import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/card';

import Coins from '../assets/coins.png';
import { TextInput } from 'react-native-gesture-handler';

export default class Budget extends React.Component  {
  state = {
    title: null,
    description: null,
    selected:3,
  };

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  
  }
  ConfirmXP = () =>
  Alert.alert(
    "Confirm",
    "Are you sure?",
    [
      {
        text: "No",
        onPress: () => console.log("Yes, Submit"),
        style: "cancel"
      },
      { text: "OK", onPress: () => {console.log("Submitted"); this.props.navigation.navigate('ExpLive'); }}
    ],
    { cancelable: false }
  );


  

  componentDidMount() {
    
  }

  render(){
    
    return (
    <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <Icon name="ios-arrow-back" size={30}></Icon>
            <Text style={{fontSize:25, marginLeft:'5%', color:'#000', fontWeight:'bold'}}>Budget</Text>
            </View>
      <Text style={{marginTop:'5%', marginLeft:'5%'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero.</Text>
      
      
      
       <View style={{alignSelf:'center', flex:1, flexDirection:'row', flexWrap:'wrap', alignContent:'center', justifyContent:'center'}}>
  
      <Card name="2 mins" icon={Coins} ></Card>
      <Card name="5 mins" icon={Coins} ></Card>
      <Card name="10 mins" icon={Coins} ></Card>

  
    
    </View>
    
  
      <Text style={{position:'relative',fontSize:20,textAlign:'center', color:'#FFF',backgroundColor:'#000', fontFamily:'Roboto', marginTop:'-2.5%', padding:'3%', width:'70%',borderWidth:2, alignSelf:'center', borderTopColor:'#000', borderBottomColor:'#000', borderLeftColor:'#FFF', borderRightColor:'#FFF', textAlignVertical:'center'}} onPress={()=>this.ConfirmXP()}>Submit</Text>
    </View>
    );
   
    
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#FFF',
    paddingHorizontal:'5%',
    paddingTop:'5%',
    paddingBottom:'5%'
  },
  header:{
    height:'20%',
    width:'30%',
    marginTop:'10%',
    resizeMode:'contain',
    alignSelf:'center'
  },
  cards:{
      flexDirection:'row',
      width: Dimensions.get('window').width-100,
      height:'10%',
      overflow:'hidden',
  },
  
});