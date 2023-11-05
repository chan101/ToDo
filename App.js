import { View, Button, ScrollView, TextInput } from "react-native";
import styles from "./Styles";
import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';


export default function App() {

  const [newTask,setNewTask] = useState('');
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    getData("taskList").then((storedTasks) => {
      if (storedTasks !== null) {
        setTasks(storedTasks);
      }
    });
  }, []);

  useEffect(()=>{
    storeData('taskList',tasks);
    console.log(tasks)
  },[tasks]);

  const taskInput = (enteredTask) => {
    setNewTask(enteredTask);
  }
  
  const addTaskHandler = () => {
    if(newTask !== null && newTask !== ""){
      setTasks(currentTasks => [...currentTasks, newTask]);
      setNewTask('');
    }
  }

  const deleteTask = (index) => {
    let newArray = [...tasks];
    if(index !== -1){
      newArray.splice(index, 1);
      setTasks(newArray)
    }
  }

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Error retrieving data: ', e);
    }
  };

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error('Error storing data: ', e);
    }
  };

  return (
    <View style={styles.container}>
    <StatusBar style="light" />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Task" style={styles.input} onChangeText={taskInput} value={newTask}/>
        <View style={styles.addButton}>
          <Button title="Add" onPress={addTaskHandler}/>
        </View>
      </View>
      <View style={styles.taskList}>
      <ScrollView>
        {tasks.map((task,index)=>(
          <TaskCard key={index} index={index} task={task} deleteTask={deleteTask}/>
        ))}
        </ScrollView>
      </View>
      
    </View>
  );
}
