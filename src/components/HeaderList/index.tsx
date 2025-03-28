import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

type Task = {
  id: string,
  descrition: string,
  done: boolean
}

type HeaderListProps = {
  tasks: Task[]
}
export default function HeaderList({tasks}: HeaderListProps) {

  const quantyCreatedTask = tasks.length
  const quantityDoneTask = tasks.filter(task => task.done).length
  return (
    <View style={styles.headerList}>
      <View style={styles.statusTask}>
        <Text style={styles.newTaskText}>Criadas</Text>
        <View style={styles.statusNumber}>
          <Text style={styles.statusNumberText}>{quantyCreatedTask}</Text>
        </View>
      </View>
      <View style={styles.statusTask}>
        <Text style={styles.doneTaskText}>Concluídas</Text>
        <View style={styles.statusNumber}>
          <Text style={styles.statusNumberText}>{quantityDoneTask}</Text>
        </View>
      </View>
    </View>
  )
}