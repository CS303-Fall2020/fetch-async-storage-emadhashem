import React, { Component, useState } from 'react'
import { View ,Text, StyleSheet, Button ,FlatList } from 'react-native'
const Screen1 = () => {
   
  
    return (
        <View style = {styles.container}>
            <Text style = {styles.txt}>welcome</Text>
            <Text style = {styles.txt}>Use the side Drawer to move around the app</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    txt : {
        fontSize : 30,
        textAlign : "center",
        textTransform : "capitalize",
        color : 'rgba(0,0,0,.4)',
    }
})
export default Screen1
