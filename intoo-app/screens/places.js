import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import Card from '../components/card';

import Paris from '../assets/paris.png';
import NewYork from '../assets/nyc.png';
import Prague from '../assets/prague.png';
import Cooking from '../assets/cooking.png';

export default class Places extends React.Component  {
  state = {
    paris:true,
  };

  

  componentDidMount() {
    
  }

  render(){
    
    return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.header}></Image>
      <Text style={{position:'relative',fontSize:25,marginTop:'5%', textAlign:'left', marginLeft:'15%', color:'#000', fontFamily:'Roboto', fontWeight:'200'}}>Favorite Places - Step 3 of 3</Text>
      <Text style={{position:'relative',fontSize:20,marginTop:'5%', width:'70%',alignSelf:'center', textAlign:'center', color:'#000', fontFamily:'Roboto', fontWeight:'200'}}>Pick 1-3 places you like</Text>
      
       <View style={{height:'35%', width:'70%', alignSelf:'center'}}>
        <ScrollView style={styles.cards} horizontal={true} >
        
      <Card name="Paris" icon={Paris}></Card>
      <Card name="New York" icon={NewYork} ></Card>
      <Card name="Prague" icon={Prague} ></Card>
      <Card name="Venice" icon={Cooking} ></Card>
  
       </ScrollView>
    </View>
      <Text style={{position:'relative',fontSize:20,textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'10%', padding:'5%', width:'70%',borderWidth:2, alignSelf:'center', borderTopColor:'#000', borderBottomColor:'#000', borderLeftColor:'#FFF', borderRightColor:'#FFF', textAlignVertical:'center'}} onPress={()=>this.props.navigation.navigate('ProfileComplete')}>Let's go!</Text>
      
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
  cards:{
      flexDirection:'row',
      margin:'2.5%',
      alignContent:'center',
      alignSelf:'center',
      width:'100%',
      overflow:'hidden',
  },
  
});