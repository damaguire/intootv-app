import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, processColor} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import  Icon  from 'react-native-vector-icons/FontAwesome5';

import "@ethersproject/shims";
import { ethers, Signer } from "ethers";

import abis from "../contracts/abis";
import addresses from "../contracts/addresses";
import { resolve } from 'url';
import { sign } from 'crypto';
const infuraProvider = new ethers.providers.InfuraProvider("kovan", "f29fe18b79cf48e9afc2b34546b61712");
console.log(infuraProvider);
//let privateKey = "0x3141592653589793238462643383279502884197169399375105820974944592"
const wallet = ethers.Wallet.createRandom().connect(infuraProvider);
console.log("wallet",wallet);
// Sign a text message
let signPromise = wallet.signMessage("Hello World!")
console.log(signPromise);
 const TOO_MUCH = 42_000_000_000;
// const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/f29fe18b79cf48e9afc2b34546b61712"));
// const acc = web3.eth.accounts.create([]);
// // web3.eth.getBalance("0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c", function(err, result) {
// //   if (err) {
// //     console.log(err)
// //   } else {
// //     console.log(web3.utils.fromWei(result, "ether") + " ETH")
// //   }
// // })




// // TODO: rimble like notification at every step. this is a lengthy call
// // -- consider creating a single smart contract function for all of the below
// // todo: we need to call approve on the addresses.xpToken
// // for every user. Otherwise, the transactions will fail


//     // TODO: that Math.random() is BAD. we will change it later
//     // 1. to create a ticket, a GUEST clicks create (after filling  in
//     // the details on the app). Params such as date, duration, etc. are passed
//     // down into this function
//     // --- we need to ensure that the user has approved our contract
//     // for their XP spending
   

export default class GuestHome extends Component {
 
    constructor(props){
        super(props);
        this.state = {
          web3: undefined,
          acc: undefined,
          activeIndex:0,
          carouselItems: [
          {
              title:"Experience",
              text: "Maker's Name",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }
  ticketFactoryContract(){
      const ticketFactoryInst = new ethers.Contract( addresses.ticketFactory , abis.ticketFactory , infuraProvider )
      console.log(ticketFactoryInst)
      return ticketFactoryInst
      
    }

    
    
    xpContract(){
      const xpContractInst = new ethers.Contract(addresses.xpToken, abis.xpToken, infuraProvider);
      console.log(xpContractInst)
      return xpContractInst
    }
    
   

   async createTicket(
      infuraProvider,  // instance of web3 (you instantiated it already with infura. we need context to pass it around our app)
      duration,  // 0 - means 2 mins, 1 - means 5 mins and 2 - means 10 mins
      title,
      description,
      accountSendingFrom
  ){
  
      const xpInst = this.xpContract();
      const ticketFactoryInst = this.ticketFactoryContract();
      console.log("XP",xpInst, ticketFactoryInst)
      // TODO: that Math.random() is BAD. we will change it later
      // 1. to create a ticket, a GUEST clicks create (after filling  in
      // the details on the app). Params such as date, duration, etc. are passed
      // down into this function
      // --- we need to ensure that the user has approved our contract
      // for their XP spending
      console.log("XPPPP",xpInst)
      const approvedReceipt = await xpInst.approve(
          addresses.ticketFactory,
          "1000000000000000000000",
      )
    
      resolve(xpInst.send({"from":wallet.address, }))
      Signer.isSigner()
        
      await console.log("approved",approvedReceipt)
      
      // 2. this function calls factory contract to ask chainlink to
      // generate random number. We await the result (this may take a while)
      // I have loaded up our contract with Kovan LINK so that it can do this
      const requestRandomNumReceipt =  String(Math.random())
    
  
      // 3. it succeeds
      // we use the random value to create a QR image
      const chainLinkRandNum = await xpInst.randomResult;
      const chainLinkRandNumString = String(chainLinkRandNum)
      var qrURL = `https://intoo-tv.crypto/${chainLinkRandNumString}`
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
      ).send({"from":wallet.address});
        
      console.log(mintReceipt)
     
  };

 async mintReceipt() {
   return ticketFactoryInst.methods.createTicket(
      duration,
      ticketPropsURI
  ).send({"from":wallet.address});

};

// // ^ this over here uses ChainLink and generates the QR Code
// // it is the most important bit for this hackathon

// // TODO: need events in the smart contract

/**
* @param tokenId - when we have minted the ticket, our smart contract
* incremented the counter of how many NFTs it minted
* We need this tokenId here so that we know which ticket the host
* is interested in
* @param host - the address of the person interested in hosting the event
*/
 async createAccessToEvent(infuraProvider, tokenId, host, accountSendingFrom){
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
 
  const xpInst = xpContract();
  const ticketFactoryInst = ticketFactoryContract();

  // TODO: that Math.random() is BAD. we will change it later
  // 1. to create a ticket, a GUEST clicks create (after filling  in
  // the details on the app). Params such as date, duration, etc. are passed
  // down into this function
  // --- we need to ensure that the user has approved our contract
  // for their XP spending

 const approvedMessage= await this.approveReceipt();
    const res = await xpContract.methods.approve(
      addresses.ticketFactory,
      String(TOO_MUCH * 1e18),
  )
  console.log("res", res)
 
  
  

  // 2. call createAccessToEvent()
  await this.accessNfts();
 xpContract.methods.createAccessToEvent(
      tokenId,
      "ipfs://we-have-stored-other-meta-here.json",
      host
  ).send({"from":wallet.address});
};





    
    

    async componentDidMount() {
      // const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/f29fe18b79cf48e9afc2b34546b61712"))
      // const defaultDaiApproveAmount = String(1000 * 1e18);

      // if (!web3) {
      //   throw new Error("web3 is undefined");
      // }

     

      // if (!acc) {
      //   throw new Error("acc is undefined");
      // }

      // // TODO: @Sam is this correct?
      // //Nope
      // this.setState({web3, acc});
      // //this way :)
      // this.setState({web3:web3});
      // this.setState({acc:acc});

      // console.log(web3)
      // console.log(acc);

      // * this won't work, because acc needs to have some
      // fake kovan eth. otherwise these transactions will fail
      // * another thing is that they also need to have
      // fake XP balance that I have sent you. otherwise the transactions will also
      // fail
      // this is easy to remedy. just have a look at tis accounts address
      // and send them both ;) or tell me what address it is and I will send
      // and then will snooze and give this to your expert hands
      // will get a power nap and get back in 2-3 hours
      
      // here
      // TODO: in the future add formatter and linter; you might be getting a lot of 
      // issue due to this
      // web3 here is undefined
    const { qrURL, approvedReceipt, requestRandomNumReceipt, mintReceipt}= await  this.createTicket(infuraProvider, 0, "title", "long description",  wallet.address);
      
      console.log("qrUrl", qrURL);
      console.log(approvedReceipt);
      console.log(requestRandomNumReceipt);
      console.log(mintReceipt);
     }

    _renderItem({item,index}){
        return (
            <View>
            <View style={{borderColor:'#000', borderWidth:1, borderRadius:10, width:150}}>
            <View style={{
                borderRadius: 10,
                width:150,
                paddingBottom:10,
                marginLeft: 0,
                marginRight: 10,
                elevation:3,
                borderColor:'#000',
                borderWidth:0.1,
                shadowColor:'#000',
                shadowRadius:10,
                backgroundColor:'#FFF',
                shadowOffset: { width: 50, height: 50 },
                shadowColor: 'black',
                shadowOpacity: 0.7, }}>
               <Image source={require('../assets/pasta.png')} style={{width:150, height:150, borderRadius:10, borderBottomLeftRadius:0, borderBottomRightRadius:0}}></Image>
              <Text style={{fontSize: 20, marginLeft:10, color:'#36A9E1'}}>{item.title}</Text>
              <Text style={{marginLeft:10, color:'#000'}}>{item.text}</Text>
              
            </View>
            </View>
            <Text style={{marginLeft:10}}>Date-Time</Text>
            </View>
        )
    }
 
    render () {
        return (
         
                
            <SafeAreaView style={{flex: 1, paddingTop:'5%', backgroundColor:'#FFF'}}>
                <View style={{flexDirection:'row', marginLeft:'5%'}}>
                    <Icon name="bars" size={20} color={'#000'}></Icon>
                    <Icon name="home" size={20} style={{marginLeft:25, color:'#000'}}></Icon>
                    <Text style={{fontSize:20, marginLeft:5, color:'#000', fontWeight:'bold'}}>Home</Text>
                    <Icon name="bell" size={20} color={'#000'} style={{marginLeft:'40%'}}></Icon>
                    <Icon name="database" size={20} color={'#000'} style={{marginLeft:'5%'}}></Icon>
                    <Text style={{fontSize:20, marginLeft:5, color:'#000'}}>500</Text>
                </View>
                <Text style={styles.heading}>Past Experiences</Text>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', marginTop:'5%' }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={250}
                  itemWidth={170}
                  layoutCardOffset={10}
                  renderItem={this._renderItem}
                  activeSlideOffset={-10}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>


            <Text style={styles.heading}>Recommended for you</Text>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', marginTop:'5%' }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={250}
                  itemWidth={170}
                  layoutCardOffset={10}
                  renderItem={this._renderItem}
                  activeSlideOffset={-10}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>

            <View style={{alignSelf:'center', width:'30%', backgroundColor:'#000', borderRadius:10 ,paddingBottom:30, marginBottom:-10,}}>
         <Text style={styles.start}>Start</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('CreateRequest')}><Icon name="pen" size={30} color={'#FFF'} style={{alignSelf:'center'}}></Icon></TouchableOpacity> 
      
         </View>
          </SafeAreaView>
          
        );
    }
}
export const renftContract = (web3) =>
  new ethers.Contract(abis.renft, addresses.renft);

export const nftContract = (web3, nftAddress) =>
  new ethers.Contract(abis.erc721, nftAddress);

export const daiContract = (web3, daiAddress) =>
  new ethers.Contract(abis.erc20, daiAddress);

export const rent = async (
  web3,
  nftToRentAddress,
  collateral,
  daiContract,
  amount
) => {
  // user must approve our contract spending their DAI
  await daiContract.methods.approve(
    addresses.renft,
    amount ? String(amount) : defaultDaiApproveAmount
  );

  const renft = renftContract(web3);

  // hardcoded for now (the URL bit)
  await renft.methods.fetchNFTPriceBeforeReturn();
};

const styles = StyleSheet.create({
    heading: {
      color:'#000',
      fontFamily:'Roboto',
      fontSize:20,
      marginTop:'5%',
      marginLeft:'5%',   
      fontWeight:'bold',
      
     },
     start:{
         textAlign:'center',
         fontSize:20,
         backgroundColor:'#000',
         color:'#FFF',
         borderRadius:10,
         textAlignVertical:'center',
         alignSelf:'center',
         marginBottom:10,
         elevation:3,
         fontFamily:'Roboto',
         paddingTop:10,
         fontWeight:'bold'
     }
    
  });