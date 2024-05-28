import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import Plus from 'react-native-vector-icons/Entypo'
import { TextInput } from 'react-native-paper';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import database from '../../dB';
import Task from '../../dB/model/Task';
import NoData from '../../components/nodata';
import coloPalette from '../../assets/Theme/coloPalette';
import Icon from 'react-native-vector-icons/AntDesign'
import { desc } from '@nozbe/watermelondb/QueryDescription';


export default function Cart() {

  const [task, setAllTask] = useState()
  const [data, setData] = useState({
    title: '',
    description: '',
    id: ''
  })

  const [isUpdating, setIsUpdating] = useState(false)
  // const getData = async () => {
  //   console.log(data)
  // }
  // useEffect(() => {
  //   getData()
  // }, [])

  const handleAdd = async () => {

    const { title, description } = data;
    if (!title || !description) {
      Alert.alert("Please enter the Complete details")
    } else {
      try {
        await database.write(async () => {
          const note = await database.get('tasks').create(task => {
            task.title = title;
            task.description = description;
            task.is_MarkAsDone = false;
          })
          // return note
          getAllTasks()

        })
        setData({
          title: '',
          description: ''
        })
      } catch (err) {
        console.log(err)
      }
    }

  }


  const getAllTasks = async () => {
    const data = await Task.allData()
    let temp = []
    data.forEach(item => {
      temp.push(item._raw)
    })
    console.log(temp)
    setAllTask(temp.sort((a, b) => b.created_at - a.updated_at   ))
  }
  useEffect(() => {
    getAllTasks()

  }, [])
  // console.log(task)

  const handleDelete = async (id) => {
    await database.write(async () => {
      const task = await database.get('tasks').find(id)
      // console.log(task)
      await task.destroyPermanently()
      getAllTasks()

    })
  }

  const handleEdit = async (id) => {
    const date = new Date()
    const tdy = date.getTime()

    await database.write(async () => {
      const task = await database.get('tasks').find(id)
      await task.update(() => {
        task.is_MarkAsDone = true;
        task.updated_at = tdy;
      })
    })
    getAllTasks()
  }


  const handleSetUpdateData = (item) => {

    if (!item.is_MarkAsDone) {
      setData({
        title: item.title,
        description: item.description,
        id: item.id
      })
      setIsUpdating(true)

    }

  }

  const updateTask = async () => {
    const { title, description, id } = data

    const editTask = await database.write(async () => {
      const task = await database.get('tasks').find(id);
      await task.update(() => {
        task.title = title;
        task.description = description;

      })
    })
    getAllTasks()
    setIsUpdating(false)
    setData({
      title: '',
      description: '',
      id: ''
    })
  }
  return (
    <View>
      <View>
        <Text style={styles.heading}>Add Task</Text>
        <View style={styles.formContainer}>
          <TextInput
            label="title"
            mode='outlined'
            style={styles.inputField}
            onChangeText={(e) => { setData({ ...data, title: e }) }}
            value={data.title}
          />
          <TextInput
            label="description"
            mode='outlined'
            style={styles.inputField}
            onChangeText={(e) => { setData({ ...data, description: e }) }}
            value={data.description}
          />
          {!isUpdating ?
            <TouchableOpacity onPress={handleAdd}>
              <Plus name='plus' size={30} color='black' />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={updateTask}>
              <Plus name='edit' size={30} color='black' />
            </TouchableOpacity>
          }
        </View>

        <View style={{ marginTop: 10, padding: 5 }}>
          <FlatList
            data={task}
            scrollsToTop={true}
            renderItem={({ item }) => (
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
            )}
          // refreshing={true}
          // onRefresh={data}
          />
        </View>
      </View>
    </View>
  )
}