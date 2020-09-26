import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';

import ImagePicker from 'react-native-image-picker';
import Logo from '../assets/Logo.png';
const options = {
    title: 'Upload Profile Picture',
    storageOptions: {
      skipBackup: true,
      path: 'images',
      avatarSource: null,
    },
  };

export default class CreateProfile extends React.Component  {
    state = {
        nick: null,
        loc: null,
      };
    
      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      
      }

  

  componentDidMount() {
    
  }

  _chooseImage(){
      console.log('Triggered!')
      ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
   
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.uri };
   
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
   
      this.setState({
        avatarSource: source,
      });
    }
  });
  }
  

  render(){
    
    return (
    <View style={styles.container}>
    {this.state.avatarSource == null &&
      <Image source={Logo} style={styles.header} />}
    {this.state.avatarSource != null &&
      <Image source={this.state.avatarSource} style={styles.header} />}
      <Text style={{position:'relative',fontSize:25,marginTop:'5%', textAlign:'left', marginLeft:'15%', color:'#000', fontFamily:'Roboto', fontWeight:'200'}}>Your Profile- Step 1 of 3</Text>
      <Text style={{position:'relative',fontSize:17.5,marginTop:'2.5%', width:'70%',alignSelf:'center', textAlign:'left', marginLeft:'2.5%', color:'#000', fontFamily:'Roboto', fontWeight:'200'}}>Before you start, we’d love to learn a little more about you.</Text>

      <TextInput placeholder="Create a nickname" style={{position:'relative',fontSize:20,marginTop:'10%',marginLeft:'15%', textAlign:'left', color:'#000', fontFamily:'Roboto', fontWeight:'100'}} onChangeText={(val) => this.updateInputVal(val, 'nick')}></TextInput>
      <View style={{flexDirection:'row',marginTop:'10%',}}>
      <Text  style={{position:'relative',fontSize:20,marginLeft:'15%', textAlign:'left', color:'#000', fontFamily:'Roboto', fontWeight:'100'}}> Profile Picture</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto',marginLeft:'5%', width:'40%', textAlign:'center', color:'#000', fontFamily:'Roboto',  padding:'1%', borderWidth:2, alignSelf:'center', borderTopColor:'#000', borderBottomColor:'#000', borderLeftColor:'#FFF', borderRightColor:'#FFF'}} onPress={()=>this._chooseImage()}>Upload Photo</Text>
      </View>
      <TextInput placeholder="Your location" style={{position:'relative',fontSize:20,marginTop:'10%',marginLeft:'15%', textAlign:'left', color:'#000', fontFamily:'Roboto', fontWeight:'100'}} onChangeText={(val) => this.updateInputVal(val, 'loc')}></TextInput>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'25%', padding:'5%', width:'70%',borderWidth:2, alignSelf:'center', borderTopColor:'#000', borderBottomColor:'#000', borderLeftColor:'#FFF', borderRightColor:'#FFF'}} onPress={()=>this.props.navigation.navigate('Interests')}>Next: Pick your interests</Text>
      
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