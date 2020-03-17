import React, { useState , useEffect} from 'react'
import { View ,Text , Button, StyleSheet, AsyncStorage, Alert, Keyboard , TouchableWithoutFeedback} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import { v4 } from "uuid";
import DataFetching from '../../../components/DataFetching';

const TodoHome = ({navigation}) => {
    const [data , setData] = useState([]);
    const [tasks , setTasks] = useState([]);
    const [laod , setLoad] = useState(true);
    const [err , setErr] = useState('');
    const [apiData , setpAiData] = useState([]);
    const [lstRef , setRef] = useState(Date(Date.now()).toString());
    const refresh = () => {
        setLoad(true);
    }
    /*---------------------------------------- */
    
    const onAdd = (text) => {
            if(text.length !== 0) {
                let id = v4();
                let obj = {txt : text, id : id, kind : 'no'};
                setData([...data , obj])
                setTasks([...tasks , obj])

            }
    }
    const onRemove = (id) => {
        let arr = data.filter(item => item.id !== id)
        let tasksArr = tasks.filter(item => item.id !== id);
        setTasks(tasksArr);
        setData(arr);
    }
    const onUpdate = (id , text) => {
        let arr = data.map(item => {
            if(item.id === id) {
                return {
                    txt : text,
                    id : id,
                    kind : "no",
                }
            } else return item
        })
        let tasksArr = tasks.map(item => {
            if(item.id === id) {
                return {
                    txt : text,
                    id : id,
                    kind : "no",
                }
            } else return item
        })
        setData(arr);
        setTasks(tasksArr);
    }
    const onDone = (id) => {
        let arr = data.map(item => {
            if(item.id === id) {
                return {
                    txt : item.txt,
                    id : id,
                    kind : (item.kind == 'yes') ? "no" : "yes",
                }
            } else return item
        })
        let tasksArr = tasks.map(item => {
            if(item.id === id) {
                return {
                    txt : item.txt,
                    id : id,
                    kind : (item.kind == 'yes') ? "no" : "yes",
                }
            } else return item
        })
        setData(arr);
        setTasks(tasksArr);
    }
    
    
    useEffect(() => {
            navigation.navigate("ToDo" , 
                {
                    data : data , 
                    onAdd : onAdd,
                    onRemove : onRemove,
                    onDone : onDone,
                    onUpdate : onUpdate,
                    laod : laod,
                    refresh : refresh, 
                    saveData : saveData,
                    err : err
                }
             )
             
    } , [data]);
    const saveData = () => {
        let obj = data
        let str = JSON.stringify(obj);
        AsyncStorage.setItem('data' , str);
    }
    const getData = async () => {
        let arr = await AsyncStorage.getItem('data');
        let obj = JSON.parse(arr);
        setData([...obj])
    }
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/todos?userId=1&fbclid=IwAR3n_ZiMQethI56UcEIG6GBXNkMG4UUN0Skw1RtJH15UUHz10HJuw3ZyMYY')
        .then(res => {
            setpAiData(res.data.map(item => {
                return (
                    {
                        txt : item.title,
                        id : v4(),
                        kind : 'no',
                    }
                )
            }));
            setData([...apiData , ...tasks]);
        })
        .then(res => {
            setErr('');
            setLoad(false);
        })
        .catch(error => {
            Alert.alert("some thing wrong with api");
            setErr('error');  
            setLoad(false);
        })
        if(err === 'error') {
            getData();
        }
    }
    
    , [laod])
    
    return (
       
        <View style = {styles.conatiner}>
        <Text style = {styles.txt}>this Todo Home</Text>
        <View style = {styles.btn}>
        <Button title = "go to todo" 
            onPress = {() => navigation.navigate("ToDo" , 
            {
                data : data , 
                onAdd : onAdd,
                onRemove : onRemove,
                onDone : onDone,
                onUpdate : onUpdate,
                laod : laod,
                refresh : refresh,
                saveData : saveData,
                err : err
            })}
        />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    conatiner : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
    },
    txt : {
        fontSize : 30,
        textTransform : "uppercase",
        color : 'gray'
    },
    btn : {
        marginTop : 5,
    }
})
export default TodoHome;
