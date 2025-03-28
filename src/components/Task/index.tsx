import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { styles } from './styles'

type Task = {
  id: string,
  descrition: string,
  done: boolean
}

type TaskProps = {
  task: Task,
  handleDoneTask: (idTask: string) => void,
  handleDeleteTask: (idTask: string) => void
}

export default function Task({task, handleDeleteTask, handleDoneTask}: TaskProps) {
  const [isChecked, setChecked] = useState(false);

  const handleValueChange = () => {
    setChecked(prevState => !prevState);
    handleDoneTask(task.id);
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={handleValueChange} color={isChecked ? '#5E60CE' : undefined}  />
      <Text style={!isChecked ? styles.text : styles.textDone }>{task.descrition}</Text>
      </View>
      <EvilIcons name="trash" size={32} color="#808080" onPress={() => handleDeleteTask(task.id)} />
    </View>
  )
}