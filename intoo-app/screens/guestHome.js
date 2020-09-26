import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import { SocialIcon } from 'react-native-elements';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import  Icon  from 'react-native-vector-icons/FontAwesome5';


 
export default class GuestHome extends Component {
 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Experience",
              text: "Maker's Name",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
            <View>
            <View style={{borderColor:'#000', borderWidth:1, borderRadius:10, width:150}}>
            <View style={{
                borderRadius: 10,
                width:150,
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
               <Image source={require('../assets/pasta.png')} style={{width:150, height:150, borderRadius:10, borderBottomLeftRadius:0, borderBottomRightRadius:0}}></Image>
              <Text style={{fontSize: 20, marginLeft:10, color:'#36A9E1'}}>{item.title}</Text>
              <Text style={{marginLeft:10, color:'#000'}}>{item.text}</Text>
              
            </View>
            </View>
            <Text style={{marginLeft:10}}>Date-Time</Text>
            </View>
        )
    }
 
    render () {
        return (
         
                
            <SafeAreaView style={{flex: 1, paddingTop:'5%', backgroundColor:'#FFF'}}>
                <View style={{flexDirection:'row', marginLeft:'5%'}}>
                    <Icon name="bars" size={20} color={'#000'}></Icon>
                    <Icon name="home" size={20} style={{marginLeft:25, color:'#000'}}></Icon>
                    <Text style={{fontSize:20, marginLeft:5, color:'#000', fontWeight:'bold'}}>Home</Text>
                    <Icon name="bell" size={20} color={'#000'} style={{marginLeft:'40%'}}></Icon>
                    <Icon name="database" size={20} color={'#000'} style={{marginLeft:'5%'}}></Icon>
                    <Text style={{fontSize:20, marginLeft:5, color:'#000'}}>500</Text>
                </View>
                <Text style={styles.heading}>Past Experiences</Text>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', marginTop:'5%' }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={250}
                  itemWidth={170}
                  layoutCardOffset={10}
                  renderItem={this._renderItem}
                  activeSlideOffset={-10}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>


            <Text style={styles.heading}>Recommended for you</Text>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', marginTop:'5%' }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={250}
                  itemWidth={170}
                  layoutCardOffset={10}
                  renderItem={this._renderItem}
                  activeSlideOffset={-10}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>

            <View style={{alignSelf:'center', width:'30%', backgroundColor:'#000', borderRadius:10 ,paddingBottom:30, marginBottom:-10,}}>
         <Text style={styles.start}>Start</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('CreateRequest')}><Icon name="pen" size={30} color={'#FFF'} style={{alignSelf:'center'}}></Icon></TouchableOpacity> 
      
         </View>
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
     }
    
  });