import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import QRCode from 'react-native-qrcode-svg';


export default class ExpLive extends React.Component  {
  state = {
    
  };

  

  componentDidMount() {
  
  }

  render(){
    
    return (
    <View style={styles.container}>
          <Text style={{position:'relative',fontSize:40,marginTop:'20%', textAlign:'center', color:'#000', fontFamily:'Roboto', fontWeight:'bold'}}>Congratulations</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'2.5%', width:'70%',alignSelf:'center'}}>Your experience is now live </Text>
      
      <QRCode
      value="Just some string value"
    />
    

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
    height:'30%',
    width:'70%',
    marginTop:'20%',
    resizeMode:'contain',
    alignSelf:'center'
  },
  
});