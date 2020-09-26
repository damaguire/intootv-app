import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';



export default class Register extends React.Component  {
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
    if(this.state.p1 !=this.state.p2){
        this.setState({match:false});
    }
    else if(this.state.p1 ==this.state.p2){
        this.setState({match:true});
    }
  }
  
  _togglePassword(){
      if(!this.state.password){
          this.setState({eye:"eye-with-line"})
      }
      else if(this.state.password){
        this.setState({eye:"eye"})
      }
  
  }
  _togglePassword2(){
   
    if(!this.state.password2){
      this.setState({eye2:"eye-with-line"})
  }
  else if(this.state.password2){
    this.setState({eye2:"eye"})
  }
}
  componentDidMount() {
    
  }

  render(){
    
    return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.header}></Image>
      
      <TextInput placeholder="Email" style={{position:'relative',fontSize:20,marginTop:'10%',marginLeft:'20%', textAlign:'left', color:'#000', fontFamily:'Roboto', fontWeight:'100'}} onChangeText={(val) => this.updateInputVal(val, 'email')}></TextInput>
     
      <View style={{flexDirection:'row', marginTop:'5%'}}><TextInput placeholder="Password" secureTextEntry={this.state.password} style={{position:'relative', fontSize:20,marginLeft:'20%', textAlign:'left', color:'#000', fontFamily:'Roboto', fontWeight:'100'}} value={this.state.p1} onChangeText={(val) => this.updateInputVal(val, 'p1')}></TextInput>
      <Icon onPress={()=>{this.setState({password:!this.state.password});this._togglePassword();}} name={this.state.eye} size={30} style={{position:'absolute', right:'20%'}}></Icon></View>
     
      <View style={{flexDirection:'row', marginTop:'5%'}}><TextInput placeholder="Confirm Password" secureTextEntry={this.state.password2} style={{position:'relative', fontSize:20,marginLeft:'20%', textAlign:'left', color:'#000', fontFamily:'Roboto', fontWeight:'100'}} onChangeText={(val) => this.updateInputVal(val, 'p2')}></TextInput>
      <Icon onPress={()=>{this.setState({password2:!this.state.password2});this._togglePassword2();}} name={this.state.eye2} size={30} style={{position:'absolute', right:'20%'}}></Icon></View>
    {!this.state.match &&
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'red', fontFamily:'Roboto', marginTop:'2.5%',  width:'70%', alignSelf:'center'}} onPress={()=>{this.props.navigation.navigate('Login');}}>Passwords do not match</Text>
    }

      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'25%', padding:'5%', width:'70%',borderWidth:2, alignSelf:'center', borderTopColor:'#000', borderBottomColor:'#000', borderLeftColor:'#FFF', borderRightColor:'#FFF'}} onPress={()=>{this.props.navigation.navigate('Success');}}>Create Account</Text>
      <Text style={{position:'relative',fontSize:15,margin:'auto', textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'10%',  width:'70%', alignSelf:'center'}}>Already have an account?</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'1%',  width:'70%', alignSelf:'center', textDecorationLine:'underline'}} onPress={()=>{this.props.navigation.navigate('Login');}}>Login</Text>


      
      
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