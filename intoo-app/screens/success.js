import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';



export default class Success extends React.Component  {
  state = {
    
  };

  

  componentDidMount() {
    
  }

  render(){
    
    return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.header}></Image>
      <Text style={{position:'relative',fontSize:30,marginTop:'20%', textAlign:'center', color:'#000', fontFamily:'Roboto', fontWeight:'200'}}>Success</Text>
      <Text style={{position:'relative',fontSize:20,marginTop:'5%', width:'70%',alignSelf:'center', textAlign:'center', color:'#000', fontFamily:'Roboto', fontWeight:'200'}}>Now please check your inbox to verify your email address</Text>
    
      
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'25%', padding:'5%', width:'70%',borderWidth:2, alignSelf:'center', borderTopColor:'#000', borderBottomColor:'#000', borderLeftColor:'#FFF', borderRightColor:'#FFF'}} onPress={()=>this.props.navigation.navigate('CreateProfile')}>Login</Text>
      
    </View>
    );
   
    
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#FFF',
  },
  header:{
    height:'20%',
    width:'30%',
    marginTop:'10%',
    resizeMode:'contain',
    alignSelf:'center'
  },
  
});