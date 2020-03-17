import React, { Component } from 'react'
import { View  ,Text , TextInput  , StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Todo from './src/screens/stacks/Todo';
import StorageData from './src/screens/stacks/StorageData';
import Details from './components/Details';
import TodoHome from "./src/screens/stacks/TodoHome";
import DataFetching from './components/DataFetching';
const stack = createStackNavigator();

 const Home = () => {
    
        return (
            <stack.Navigator>
                <stack.Screen name = "MAKE TODO" component = {TodoHome}/>
                <stack.Screen name = "ToDo" component = {Todo}/>
                <stack.Screen name = "storagData" component = {StorageData}/>
                <stack.Screen name = "Detalies" component = {Details}/>
                {/* <stack.Screen name = "loading" component = {DataFetching}/> */}
            </stack.Navigator>
        )
} 
export default Home;