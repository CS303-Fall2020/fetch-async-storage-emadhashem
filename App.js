import React , {useState} from 'react';
import { Platform, StatusBar, StyleSheet, View , Text } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator  } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  Home from "./Home";
import Screen1 from "./src/screens/drawers/Screen1";
import Screen2 from "./src/screens/drawers/Screen2";
import Screen3 from "./src/screens/drawers/Screen3";
import Constants from 'expo-constants'; 
const Drawer = createDrawerNavigator();
const mTTop = createMaterialTopTabNavigator();
const mTBottom = createMaterialBottomTabNavigator();

export default function App(props) {  
    return (
        <View style = {styles.container}>
          <NavigationContainer>
            <Drawer.Navigator>    
              <Drawer.Screen name = "Welcome" component ={Screen1}/>
              <Drawer.Screen name = "Home" children = {Home} />
              <Drawer.Screen name = "About" component = {Screen2}/>
              <Drawer.Screen name = "Contactus" component ={Screen3} />
            </Drawer.Navigator>
        </NavigationContainer>
        
        
        </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop : Constants.statusBarHeight,
    flex : 1
  },
});
