import React, { Component, useState } from 'react'
import {FlatList,  View  ,Text , TextInput , Button  , StyleSheet , TouchableOpacity , ScrollView} from 'react-native'
 const Details = ({navigation , route}) => {
        const {onUpdate , onRemove , id , text , onAddSubTasks , onRemovesubTask , subTasks} = route.params;
        const [txt , setText] = useState(text);
        const [subTask , setSubText] = useState('');
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.txtInp} onChangeText = {(t) => setText(t)} value = {txt}/>
                <View style = {styles.btnHolder}>
                    <Button title = "remove" onPress = {() => onRemove(id)}/>
                    <Button title = "Update" onPress = {() => onUpdate(id , txt)}/>
                </View>
                <Button title = "cancle" onPress = {() => navigation.goBack()}/>
                <View style = {styles.subcon}>
                    <Text>Add subTask</Text>
                    <TextInput style = {styles.subtxtInp} onChangeText = {t => setSubText(t)} value = {subTask}/>
                    <Button title = "add subTask" onPress = {() => {setSubText('');onAddSubTasks(subTask)}}/>
                    {/* <FlatList style = {{height  : "auto" , width : 200}}
                        data = {subTasks}
                        renderItem = {({item}) => {
                            return (
                                <TouchableOpacity onPress = {() => onRemovesubTask(item.subId)}>
                                    <Text>
                                        {item.task}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor = {item => item.subId}
                    /> */}
                    <ScrollView>
                        {
                            subTasks.map(item => {
                                return (
                                    <TouchableOpacity onPress = {() => onRemovesubTask(item.subId)} key = {Math.random() * 200}>
                                        <Text>
                                            {item.task}
                                        </Text>
                                </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
}
const styles = StyleSheet.create({
    btnHolder : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        width : '50%',
        marginBottom : 20
    },
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "flex-start",
        marginTop : 50
    },
    txtInp : {
        height : 'auto',
        width : "80%",
        fontSize : 30,
        borderWidth : 1,
        borderRadius : 6,
        borderColor : "rgba(0,0,0,.3)",
        marginBottom : 25
    },
    subcon : {
       alignItems : "center",
       marginTop : 10,
       width : "100%"
    },
    subtxtInp : {
        width : '80%',
        height : 'auto',
        fontSize : 20,
        borderWidth : 1,
        borderRadius : 6,
        borderColor : "rgba(0,0,0,.3)",
        marginBottom : 25
    }

})
export default Details