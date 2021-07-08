import React, { Component, useState , useEffect} from 'react'
import { View, StyleSheet ,Text, Button , Navigator} from 'react-native';

const Doing = ({txt = '' , kind = '' , onDone = f => f , id = 0 , onGoDet = f => f}) => {
    const txtStyle = () => ({
        flex : 1,
        alignItems : "center",
        textAlign : "center",
        fontSize : 25,
        color : "white",
        textDecorationLine : (kind === 'yes') ? "line-through" : 'none',
    })
    return (
        <View style = {styles.container}>
            <Button title = "details" onPress = {() => onGoDet(id , txt)}/>
            <Text style = {txtStyle()}>{txt}</Text>
            <Button title = "done" onPress = {() => onDone(id)}/>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'gray',
        borderRadius : 5,
        marginBottom : 10,
        width : 340,
        paddingTop : 20,
        paddingBottom : 20,
        alignItems : "center",
        flexDirection : "row"
    }
})
export default Doing 