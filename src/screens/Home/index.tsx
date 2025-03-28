import { View, Image, TextInput, TouchableOpacity, Text, FlatList,  } from 'react-native'
import React, { useState } from 'react'
import 'react-native-get-random-values';
import { v4 as uuidV4 } from 'uuid'; 
import { styles } from './styles'
import Form from '../../components/Form';
import HeaderList from '../../components/HeaderList';
import EmptyList from '../../components/EmptyList';
import Task from '../../components/Task';

type Task = {
  id: string,
  descrition: string,
  done: boolean
}
export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([{
    id: '1',
    descrition: "Tarefa Exemplo",
    done: false
  }]);

  const handleAddTask = (value: string) => {
    const newTask: Task = {
      id: uuidV4(),
      descrition: value,
      done: false
    }
    setTasks(prevState => [...prevState, newTask]);
  }
  const handleDoneTask = (idTask: string) => {
    setTasks(prevState => prevState.map(oldTask => {
      if (oldTask.id === idTask) {
        return {
          ...oldTask,
          done: !oldTask.done
        }
      }
      return oldTask
    }));
  }
  const handleDeleteTask = (idTask: string) => {
    setTasks(prevState => prevState.filter(state => state.id !== idTask));
  }
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Image
          source={require('../../../assets/to-do-logo.png')}
        />
      </View>

      <View style={styles.toDoListContainer}>
        <Form handleAddTask={handleAddTask}/>

        <HeaderList tasks={tasks} />

        <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <Task 
            task={item} 
            handleDoneTask={handleDoneTask} 
            handleDeleteTask={handleDeleteTask} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
      />
      </View>

    </View>
  )
}