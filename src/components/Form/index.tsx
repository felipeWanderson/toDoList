import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React, { useState } from 'react'
import { styles } from './styles';

type FormProps = {
  handleAddTask: (value: string) => void
}
export default function Form({handleAddTask}: FormProps) {
  const [text, setText] = useState('');

  const handleOnChange = (description: string) => {
   
  }

  const onSubmitt = () => {
    handleAddTask(text);
    setText('');
  }
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor="#6B6B6B"
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity style={styles.button} onPress={onSubmitt}>
        <Text style={styles.buttonText}>
          <EvilIcons name="plus" size={24} color="#F2F2F2" />
        </Text>
      </TouchableOpacity>

    </View>
  )
}