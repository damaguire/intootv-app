import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Logo from '../assets/Logo.png';

export default class ExpLive extends React.Component  {
  state = {
    
  };

  

  componentDidMount() {
    this.svg.toDataURL((data) => {console.log(data)})
  }

  render(){
    
    return (
    <View style={styles.container}>
          <Text style={{position:'relative',fontSize:40,marginTop:'20%', textAlign:'center', color:'#000', fontFamily:'Roboto', fontWeight:'bold'}}>Congratulations</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'2.5%', width:'70%',alignSelf:'center'}}>Your experience is now live </Text>
      <View style={styles.header}>
      <QRCode
      value="https://intoo-tv.crypto/"
      size={200}
      logo={Logo}
      logoMargin={10}
      logoSize={100}
      getRef={(ref) => (this.svg = ref)}
    />
    <Text style={{textAlign:'center', color:'#2d5bda', fontSize:20}}>Powered by Chainlink</Text>
    </View>

      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'25%', padding:'5%', width:'70%',borderWidth:2, alignSelf:'center', borderTopColor:'#000', borderBottomColor:'#000', borderLeftColor:'#FFF', borderRightColor:'#FFF'}} onPress={()=>this.props.navigation.navigate('GuestHome')}>Back to profile</Text>
      
    </View>
    );
   
    
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#FFF'
  },
  header:{
    marginTop:'20%',
    alignSelf:'center'
  },
  
});