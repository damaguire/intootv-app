import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';



export default class Forgot extends React.Component  {
  state = {
    password:true,
    password2:true,
    eye: "eye",
    eye2: "eye",
    p1:null,
    p2: null,
    match: true,
    email: null,
  };

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  
  }
  
  _togglePassword(){
      if(!this.state.password){
          this.setState({eye:"eye-with-line"})
      }
      else if(this.state.password){
        this.setState({eye:"eye"})
      }
   
  }
  componentDidMount() {
    
  }

  render(){
    
    return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.header}></Image>
      <Text placeholder="Email" style={{position:'relative',fontSize:30,marginTop:'10%', textAlign:'center', color:'#000', fontFamily:'Roboto', fontWeight:'100'}} >Forgot Password?</Text>
      <Text placeholder="Email" style={{position:'relative',fontSize:20,marginTop:'10%', textAlign:'center', color:'#000', fontFamily:'Roboto', fontWeight:'100', width:'70%', alignSelf:'center'}} >Please enter your email address registered with intoo to request a new password</Text>


      <TextInput placeholder="Email" style={{position:'relative',fontSize:20,marginTop:'10%',marginLeft:'20%', textAlign:'left', color:'#000', fontFamily:'Roboto', fontWeight:'100'}} onChangeText={(val) => this.updateInputVal(val, 'email')}></TextInput>
     
      
     
     

      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'10%', padding:'5%', width:'70%',borderWidth:2, alignSelf:'center', borderTopColor:'#000', borderBottomColor:'#000', borderLeftColor:'#FFF', borderRightColor:'#FFF'}} onPress={()=>{this.props.navigation.navigate('Reset');}}>Reset Password</Text>

      <Text style={{position:'relative',fontSize:15,margin:'auto', textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'10%',  width:'70%', alignSelf:'center'}}>New to IntooTV?</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'1%',  width:'70%', alignSelf:'center', textDecorationLine:'underline'}} onPress={()=>{this.props.navigation.navigate('Register');}}>Create an account</Text>


      
      
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