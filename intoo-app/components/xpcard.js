import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import Tick from '../assets/tick.png';

export default function XPCard({ route,name,icon}) {
    const navigation = useNavigation();
 
    return (
    <View style={styles.container}>
        
   
        <View>
        <TouchableOpacity onPress={}><Image source={icon} style={styles.photo} /></TouchableOpacity> 
        <View style={styles.title}>  
        <Text style={styles.name}>{name}</Text>
        </View>
        </View>
        
        
        
    </View>
)}



const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation:4,
        alignSelf:'center',
        justifyContent:'center',
        marginRight:'5%',
        marginBottom:'5%',
        width:125,
        height:125,
        borderColor:'#000',
        borderWidth:0.1,
    },
    fill:{
        backgroundColor:'#000',
        borderRadius:10,
        width:'100%',
        height:'100%',
        alignContent:'center',
    },
    
    name: {
        fontSize: 15,
        color: '#000',
        fontFamily:'Roboto',
        textAlignVertical:'center',
        textAlign:'center',
    },
    namefill: {
        fontSize: 15,
        color: '#FFF',
        fontFamily:'Roboto',
        textAlignVertical:'center',
        textAlign:'center',
    },
     photo: {
        height: 50,
        width: 50,
        alignSelf:'center',
        paddingHorizontal:'10%',
        paddingVertical:'2.5%',
        resizeMode:'contain'
        
    },
    title: {
        marginLeft: 30,
        marginTop:20,
        marginRight: 30,
        justifyContent: 'center',
        textAlign:'center',
        
    },
    titlefill: {
        marginLeft: 30,
        marginRight: 30,
        marginTop:-10,
        justifyContent: 'center',
        
    },
    icon:{
        position:'absolute',
        marginTop:'5%',
        resizeMode:'contain',
        right:'5%',
    },
    description: {
        fontSize: 18,
        fontFamily:'FuturaL',
        color:'#6C63FF'
    },
  
});