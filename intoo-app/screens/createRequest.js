import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/card';

import Sport from '../assets/sport.png';
import Music from '../assets/music.png';
import Nature from '../assets/nature.png';
import Cooking from '../assets/cooking.png';
import { TextInput } from 'react-native-gesture-handler';

export default class CreateRequest extends React.Component  {
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

  

  componentDidMount() {
    
  }

  render(){
    
    return (
    <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <Icon name="ios-arrow-back" size={30}></Icon>
            <Text style={{fontSize:25, marginLeft:'5%', color:'#000', fontWeight:'bold'}}>Create an Experience</Text>
            </View>
      <Text style={{marginTop:'5%', marginLeft:'5%'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero.</Text>
      
      <TextInput placeholder="Your Experience Title" style={{position:'relative',fontSize:20,marginTop:'5%',marginLeft:'5%', textAlign:'left', color:'#000', fontFamily:'Roboto', fontWeight:'100'}} onChangeText={(val) => this.updateInputVal(val, 'title')}></TextInput>
      <TextInput placeholder="Describe your experience" style={{position:'relative',fontSize:15,marginTop:'5%',marginLeft:'5%', paddingLeft:'5%', textAlign:'left', color:'#000', fontFamily:'Roboto', fontWeight:'100', height:'20%', width:'90%', flexWrap:'wrap', backgroundColor:'#F8FAFF', borderRadius:10, textAlignVertical:'top'}}  multiline={true} numberOfLines={10} onChangeText={(val) => this.updateInputVal(val, 'description')}></TextInput>


      <Text style={{position:'relative',fontSize:25,marginTop:'5%', textAlign:'left', marginLeft:'5%', color:'#000', fontFamily:'Roboto', fontWeight:'200'}}>Labels</Text>
      <Text style={{marginTop:'5%', marginLeft:'5%'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</Text>

      
       <View style={{marginBottom:'10%',alignSelf:'center', flex:1}}>
        <ScrollView style={styles.cards} horizontal={true} >
        
      <Card name="Sport" icon={Sport} ></Card>
      <Card name="Music" icon={Music} ></Card>
      <Card name="Nature" icon={Nature} ></Card>
      <Card name="Cooking" icon={Nature} ></Card>
  
       </ScrollView>
    </View>
    {this.state.description==null &&
      <Text style={{position:'relative',fontSize:20,textAlign:'center', color:'#000', fontFamily:'Roboto', marginTop:'-2.5%', padding:'3%', width:'70%',borderWidth:2, alignSelf:'center', borderTopColor:'#000', borderBottomColor:'#000', borderLeftColor:'#FFF', borderRightColor:'#FFF', textAlignVertical:'center'}}>1 of 3</Text>}
      {this.state.description!=null &&
      <Text style={{position:'relative',fontSize:20,textAlign:'center', color:'#FFF',backgroundColor:'#000', fontFamily:'Roboto', marginTop:'-2.5%', padding:'3%', width:'70%',borderWidth:2, alignSelf:'center', borderTopColor:'#000', borderBottomColor:'#000', borderLeftColor:'#FFF', borderRightColor:'#FFF', textAlignVertical:'center'}} onPress={()=>this.props.navigation.navigate('RequestCalendar')}>1 of 3</Text>}
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