export { default as abis } from "./abis";
export { default as addresses } from "./addresses";

const TOO_MUCH = 42_000_000_000;

// these are the contract instances that let us call
// all the functions on the smart contracts
// ! note: if the function changes the state of contract
// ! postfix the call with .send();
// ! else, .call();
export const ticketFactoryContract = (web3) =>
  new web3.eth.Contract(abis.ticketFactory, addresses.ticketFactory);

export const xpContract = (web3) =>
  new web3.eth.Contract(abis.xpToken, addresses.xpToken);


// TODO: rimble like notification at every step. this is a lengthy call
// -- consider creating a single smart contract function for all of the below
// todo: we need to call approve on the addresses.xpToken
// for every user. Otherwise, the transactions will fail
export const createTicket = async ({
    web3,  // instance of web3 (you instantiated it already with infura. we need context to pass it around our app)
    duration,  // 0 - means 2 mins, 1 - means 5 mins and 2 - means 10 mins
    title,
    description,
    accountSendingFrom
}) => {

    const xpInst = xpContract(web3);
    const ticketFactoryInst = ticketFactoryContract(web3);

    // TODO: that Math.random() is BAD. we will change it later
    // 1. to create a ticket, a GUEST clicks create (after filling  in
    // the details on the app). Params such as date, duration, etc. are passed
    // down into this function
    // --- we need to ensure that the user has approved our contract
    // for their XP spending
    const approveReceipt = await xpContract.methods.approve(
        addresses.ticketFactory,
        String(TOO_MUCH * 1e18),
    ).send({ from: accountSendingFrom });

    // 2. this function calls factory contract to ask chainlink to
    // generate random number. We await the result (this may take a while)
    // I have loaded up our contract with Kovan LINK so that it can do this
    const requestRandomNumReceipt = await xpContract.methods.getRandomNumber(
        String(Math.random())
    );

    // 3. it succeeds
    // we use the random value to create a QR image
    const chainLinkRandNum = await xpContract.randomResult();
    const qrURL = `https://intoo-tv.crypto/${chainLinkRandNum}`
    // ^ for now just takes this as an input to QR generation
    // TODO: 4. this QR image gets posted to IPFS
    let dur;
    if (typeof duration !== 'number') {
        // todo: use typescript
        throw new Error("duration must be an int in {0, 1, 2}");
    }

    if (duration === 0) {
        dur = "2 mins";
    } else if (duration === 1) {
        dur = "5 mins";
    } else if (duration === 2) {
        dur = "10 mins";
    } else {
        throw new Error("exhaustive check");
    }

    // 5. the IPFS link along with the meta passed to this function
    // is finally used as an ERC721 meta scheme to create an 
    // experience ticket. create the nft

    // ! meta / props info is done off-chain!!!
    const ticketPropsURI = "ipfs://we-have-stored-meta-here.json"

    const mintReceipt = await ticketFactoryInst.methods.createTicket(
        duration,
        ticketPropsURI
    ).send({ from: accountSendingFrom });

    return {
        qrURL, // @Sam, this is what you use to gen the QR image
        approveReceipt,
        requestRandomNumReceipt,
        mintReceipt,
    }
};
// ^ this over here uses ChainLink and generates the QR Code
// it is the most important bit for this hackathon

// TODO: need events in the smart contract

/**
 * @param tokenId - when we have minted the ticket, our smart contract
 * incremented the counter of how many NFTs it minted
 * We need this tokenId here so that we know which ticket the host
 * is interested in
 * @param host - the address of the person interested in hosting the event
 */
export const createAccessToEvent = async (web3, tokenId, host, accountSendingFrom) => {
    // can only be invoked after createTicket
    // ^ you need to pass an id when you do this
    // and if that id does not exist, you won't be
    // able to create. we can get ddosed with this
    // so need another check in the contract
    // but it is reentrancy guarded
    // I don't know I have slept very little in the past
    // three days. I am not thinking straight now

    // Sam, you can use the template above to implement this
    // you won't need everything, though

    const xpInst = xpContract(web3);
    const ticketFactoryInst = ticketFactoryContract(web3);

    // TODO: that Math.random() is BAD. we will change it later
    // 1. to create a ticket, a GUEST clicks create (after filling  in
    // the details on the app). Params such as date, duration, etc. are passed
    // down into this function
    // --- we need to ensure that the user has approved our contract
    // for their XP spending
    const approveReceipt = await xpContract.methods.approve(
        addresses.ticketFactory,
        String(TOO_MUCH * 1e18),
    ).send({ from: accountSendingFrom });

    // 2. call createAccessToEvent()
    const accessNfts = await xpContract.methods.createAccessToEvent(
        tokenId,
        "ipfs://we-have-stored-other-meta-here.json",
        host
    ).send({ from: accountSendingFrom });
};