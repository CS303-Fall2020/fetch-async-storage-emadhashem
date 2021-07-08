import React, { Component, useState , useEffect} from 'react'
import { View ,Text , TextInput, StyleSheet , 
        Button , FlatList , TouchableWithoutFeedback , Keyboard , Modal , TouchableOpacity} from "react-native";
import Doing from '../../../components/Doing';
import {v4} from 'uuid';
import DataFetching from '../../../components/DataFetching';
const Todo = ({navigation , route}) => {
    const [text , setText] = useState('');
    const [subTasks , setSubTask] = useState([]);
    const [cur , setCur] = useState(false);
    const onAddSubTasks = (task) => {
        // console.warn(task)
        setCur(true)
        if(task !== '') setSubTask([...subTasks , {subId : v4() , task : task}])
    }
    const onRemovesubTask = (subId) => {
        setCur(true)   
        let arr = subTasks.filter(item => item.subId !== subId);
        setSubTask(arr);
    }
    useEffect(() => {
        if(cur === true)
        navigation.navigate('Detalies' , {
            onAddSubTasks : onAddSubTasks,
            onRemovesubTask : onRemovesubTask,
            subTasks : subTasks
        })
        setCur(false);
    }, [subTasks])
    /*----------------------- */
    // const data = route.params.data;
    // const onAdd = route.params.onAdd;
    // const onDone = route.params.onDone;
    // const onUpdate = route.params.onUpdate;
    // const onRemove = route.params.onRemove;
    // const laod = route.params.laod;
    // const refresh = route.params.refresh;
    // const saveData = route.params.saveData;
    const {data , onAdd, onDone , onUpdate , onRemove , laod , refresh , saveData , err} = route.params;
    console.warn(err)
    const onGoDet = (id , text) => {
        setCur(true)
        navigation.navigate('Detalies' , {
            onUpdate : onUpdate,
            onRemove : onRemove,
            id : id,
            text : text,
            onAddSubTasks : onAddSubTasks,
            onRemovesubTask : onRemovesubTask,
            subTasks : subTasks
        })
    }
        
    return (
         (laod) ? 
        <DataFetching /> 
            :
         <TouchableWithoutFeedback onPress = { () => Keyboard.dismiss()}
            style = {{height : '100%' }}
         >
                    
                <View style = {styles.container}>
                {
                        (err == 'error') ?
                        <TouchableOpacity style = {styles.mod} onPress = {() => refresh()}>
                        <Text style = {styles.txtWaring}>
                                it seems there is problem with connect {"\n"}
                                Press here to refresh
                            </Text>
                        </TouchableOpacity> : 
                        null
                    }
                        <Text style = {[
                            styles.txt,
                        ]}>Make your Todo</Text>
                        <TextInput multiline style = {styles.txtIn} onChangeText = {(txt) => setText(txt)} value = {text}/>
                        <View style = {styles.btnHolder}>
                            <Button  title = "add" onPress = {() => {onAdd(text); setText('')}}/> 
                            <Button title = "refresh" onPress = {() => refresh()}/>
                            <Button title = "saveLocal" onPress = {() => saveData()}/>
                        </View>
                        <FlatList style = {{marginTop : 10 , height : 'auto'}}
                            data = {data}
                            renderItem = {({item}) => {
                                    return <Doing {...item} 
                                        onDone = {onDone}
                                        onGoDet = {onGoDet}
                                    />
                                }
                            }
                            keyExtractor = {item => item.id}
            
                        /> 
                    </View>

            
                
            </TouchableWithoutFeedback>
        )
    
}
const styles = StyleSheet.create({
    txtIn : {
        height : "auto",
        width : '80%',
        borderWidth : 1,
        borderRadius : 5,
        borderColor : "rgba(0,0,0,.3)",
        padding : 5,
        marginBottom : 15
    },
    container : {
        alignItems : "center",
        height : '100%',
        
    },
    txt : {
        fontSize : 30,
        textTransform : "uppercase"
    },
    btnHolder : {
        justifyContent : "space-around",
        alignItems : "center",
        flexDirection : "row",
        width : '80%'
        
    },
    mod : {
        height : '10%',
        
    },
    txtWaring : {
        fontSize : 20,
        textAlign : "center" , 
        textTransform : 'capitalize',
        backgroundColor : '#FFCC00',
    }
})
export default Todo
