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


// todo: we need to call approve on the addresses.xpToken
// for every user. Otherwise, the transactions will fail
export const createTicket = (web3) => {

    const xpInst = xpContract(web3);
    const ticketFactoryInst = ticketFactoryContract(web3);

    // 0: approving. user approoves our contract to spend his XP tokens
    await xpContract.methods.approve(
        addresses.ticketFactory,
        String(TOO_MUCH * 1e18),
    );

    // 1. to create a ticket, a GUEST clicks create (after filling  in
    // the details on the app). Params such as date, duration, etc. are passed
    // down into this function
    // ---
    // I have loaded up our contract with Kovan LINK so that it can do this


    // 2. this function calls factory contract to ask chainlink to
    // generate random number. We await the result (this may take a while)

    // 3. it succeeds
    // we use the random value to create a QR image

    // 4. this QR image gets posted to IPFS

    // 5. the IPFS link along with the meta passed to this function
    // is finally used as an ERC721 meta scheme to create an 
    // experience ticket

    // 6. create the nft
    await ticketFactoryInst.methods.createTicket(

    ).send();

};

export const createAccessTokens = (web3) => {
    // can only be invoked after createTicket
};