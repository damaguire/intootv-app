import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from './screens/splash';
import Login from './screens/login';
import Option from './screens/option';
import Success from './screens/success';
import CreateProfile from './screens/createProfile';
import Register from './screens/register';
import Interests from './screens/interests';
import Places from './screens/places';
import ProfileComplete from './screens/profileComplete';
import Forgot from './screens/forgot';
import Reset from './screens/reset';
import  GuestHome  from './screens/guestHome';
import CreateRequest from './screens/createRequest';
import RequestCalendar from './screens/requestCalendar';
import Budget from './screens/budget';
import ExpLive from './screens/expLive';
import  HostHome  from './screens/hostHome';
import  XpMarket  from './screens/xpMarket';
import XpDetails  from './screens/xpdetails';
import  XpCalendar  from './screens/xpCalendar';
import XPCabin from './screens/xpcabin';




const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Splash" 
        component={Splash} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Option" 
        component={Option} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="Success" 
        component={Success} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="CreateProfile" 
        component={CreateProfile} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Interests" 
        component={Interests} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Places" 
        component={Places} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="ProfileComplete" 
        component={ProfileComplete} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Forgot" 
        component={Forgot} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Reset" 
        component={Reset} 
        options={{ headerShown: false}} 
      />
     <Stack.Screen 
        name="GuestHome" 
        component={GuestHome} 
        options={{ headerShown: false}} 
      />
     <Stack.Screen 
        name="CreateRequest" 
        component={CreateRequest} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="RequestCalendar" 
        component={RequestCalendar} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Budget" 
        component={Budget} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="ExpLive" 
        component={ExpLive} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="HostHome" 
        component={HostHome} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="XpMarket" 
        component={XpMarket} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="XpDetails" 
        component={XpDetails} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="XpCalendar" 
        component={XpCalendar} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="XpCabin" 
        component={XPCabin} 
        options={{ headerShown: false}} 
      />
     
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}