import React, { useState, useEffect } from 'react'
import { View  , Text , ScrollView , ActivityIndicator, StyleSheet} from 'react-native'
const DataFetching = () => {
    
    return (
        <View style = {styles.constiner}>
            <ActivityIndicator size = "large" color = "red"/>
            {/* <Text>loading</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    constiner : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})
export default DataFetching
