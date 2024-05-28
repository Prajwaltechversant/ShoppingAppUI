import { View, Text, TouchableOpacity } from 'react-native'
import React, { memo, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import database from '../../dB'
import coloPalette from '../../assets/Theme/coloPalette'
import { withObservables } from '@nozbe/watermelondb/react'

 const Item = ({item, setData,setIsUpdating})=> {

    console.log('child .........')
    const handleDelete = async () => {
        console.log('delete tasks')

        await database.write(async () => {
          const task = await database.get('tasks').find(item.id)
          await task.destroyPermanently()
        })
      }
      const handleEdit = async () => {
        const date = new Date()
        const tdy = date.getTime()
    
        await database.write(async () => {
          const task = await database.get('tasks').find(item.id)
          await task.update(() => {
            task.is_MarkAsDone = true;
            task.updated_at = tdy;
          })
        })
        // getAllTasks()
      }
      const handleSetUpdateData = () => {
        console.log('handle updateset')
    
        if (!item.is_MarkAsDone) {
          setData({
            title: item.title,
            description: item.description,
            id: item.id
          })
          setIsUpdating(true)
    
        }
      }
    
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: coloPalette.light.secondary, borderRadius: 10, padding: 10, marginVertical: 5 }}>
    <Text style={{ color: 'red', fontSize: 25 }}>{item.title}</Text>
    <Text style={{ color: 'red', fontSize: 25 }}>{item.description}</Text>
    <View style={{ flexDirection: 'row', gap: 15 }}>
      {!item.is_MarkAsDone ? <TouchableOpacity onPress={() => handleEdit(item.id)}>
        <Icon name='checkcircle' size={20} color={'white'} />
      </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => handleEdit(item.id)}>
          <Icon name='checkcircle' size={20} color={'green'} />
        </TouchableOpacity>
      }
      <TouchableOpacity onPress={() => handleSetUpdateData(item)}>
        <Icon name='edit' size={20} color={'blue'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Icon name='delete' size={20} color='red' />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default memo(Item)

