import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { styles } from './styles'

export default function EmptyList() {
  return (
    <View style={styles.emptyListContainer}>
    <Feather name="clipboard" size={56} color="#808080" />

     <View style={styles.emptyTextContainer}>
       <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
       <Text style={styles.textRegular}>Crie tarefas e organize seus itens a fazer</Text>
     </View>
  </View>
  )
}