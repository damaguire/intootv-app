import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import { SocialIcon } from 'react-native-elements';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import  Icon  from 'react-native-vector-icons/Entypo';
import CardStack, { Card } from 'react-native-card-stack-swiper';

 
export default class XpMarket extends Component {
 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Tom Ellis",
              text: "Experience Title",
              description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.",
          },
          {
            title:"Tom Ellis",
            text: "Experience Title",
            description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.",
        },{
            title:"Tom Ellis",
            text: "Experience Title",
            description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.",
        },{
            title:"Tom Ellis",
            text: "Experience Title",
            description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.",
        },{
            title:"Tom Ellis",
            text: "Experience Title",
            description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.",
        },
        ]
      }
    }

    _renderItem({item,index}){
        return (
            <View>
            <View style={{borderColor:'#000', borderWidth:1, borderRadius:10, width:300}}>
            <View style={{
                borderRadius: 10,
                width:300,
                paddingBottom:10,
                marginLeft: 0,
                marginRight: 10,
                elevation:3,
                borderColor:'#000',
                borderWidth:0.1,
                shadowColor:'#000',
                shadowRadius:30,
                backgroundColor:'#FFF',
                shadowOffset: { width: 50, height: 50 },
                shadowColor: 'black',
                shadowOpacity: 0.7, }}>
                <View style={{flexDirection:'row'}}> 
                <Image source={require('../assets/tom.jpg')} style={{width:100, height:100, borderRadius:50, marginTop:'5%', marginLeft:'5%', borderColor:'#000', borderWidth:1}}></Image>
              <Text style={{fontSize: 30, marginLeft:10,marginTop:'15%', color:'#000', fontWeight:'bold'}}>{item.title}</Text></View>
              
              <Text style={{marginLeft:'5%',marginTop:'5%', color:'#36A9E1', fontWeight:'bold', fontSize:20}}>{item.text}</Text>
              <Text style={{marginLeft:'5%',marginTop:'5%', color:'#000', fontSize:15, width:'90%'}}>{item.description}</Text>
             
              <View style={{flexDirection:'row',marginTop:'5%', alignSelf:'center'}}>
                    
                    
                    <Text style={{fontSize:15,   marginTop:5, color:'#000', fontWeight:'bold', padding:'5%'}}>#Label</Text>
                    <Text style={{fontSize:15,   marginTop:5, color:'#000', fontWeight:'bold', padding:'5%'}}>#Label</Text>
                    <Text style={{fontSize:15,   marginTop:5, color:'#000', fontWeight:'bold', padding:'5%'}}>#Label</Text>

              </View>

              <Icon name="database" size={30} color={'#000'} style={{alignSelf:'center', marginTop:'10%'}}></Icon>
              <Text style={{fontSize:30,  color:'#000', fontWeight:'bold', textAlign:'center'}}>5 XP</Text>
              
            </View>
            </View>
    
            </View>
        )
    }


   
 
    render () {
        return (
         
                
            <SafeAreaView style={{flex: 1, paddingTop:'5%', backgroundColor:'#FFF'}}>
                <View style={{flexDirection:'row', marginLeft:'5%'}}>
                    <Icon name="menu" size={20} color={'#000'}></Icon>
                    <Icon name="shop" size={20} style={{marginLeft:10, color:'#000'}}></Icon>
                    <Text style={{fontSize:20, marginLeft:5, color:'#000', fontWeight:'bold'}}>XP Market</Text>
                    <Icon name="bell" size={20} color={'#000'} style={{marginLeft:'35%'}}></Icon>
                    <Icon name="database" size={20} color={'#000'} style={{marginLeft:'5%'}}></Icon>
                    <Text style={{fontSize:20, marginLeft:5, color:'#000'}}>500</Text>
                </View>
            
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', alignSelf:'center', marginTop:'15%', alignContent:'center', marginLeft:'12.5%' }}>
                <Carousel
                  layout={"tinder"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  layoutCardOffset={10}
                  renderItem={this._renderItem}
                  activeSlideOffset={10}
                  activeSlideAlignment={"end"}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
         


           
            <View style={{marginBottom:'25%'}}>
            <View style={{alignSelf:'center', flex:1, flexDirection:'row'}}>
                <Icon onPress={() => { this.carousel.snapToNext(); }} name="thumbs-down" size={70} color={'#000'} style={{alignSelf:'baseline'}}></Icon>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('XpDetails')}><Image source={require('../assets/logob.png')} style={{width:100, height:100, resizeMode:'contain', alignSelf:'center', marginHorizontal:'5%'}}></Image></TouchableOpacity> 
        <Icon onPress={() => { this.carousel.snapToNext(); }} name="thumbs-up" size={70} color={'#000'} style={{alignSelf:'baseline'}}></Icon>
         </View></View>
          </SafeAreaView>
          
        );
    }
}

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
     },
     card:{
        backgroundColor:'#ccc',
        height:500,
        width:120
     }
    
  });