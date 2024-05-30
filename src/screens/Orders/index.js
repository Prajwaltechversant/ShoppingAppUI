 import { View, Text, Alert, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { TextInput } from 'react-native-paper';
import styles from './style';
import Plus from 'react-native-vector-icons/Entypo';
import database from '../../dB';
import coloPalette from '../../assets/Theme/coloPalette';
import Icon from 'react-native-vector-icons/AntDesign';
import { withObservables } from '@nozbe/watermelondb/react';
import EnhancedItem from './Item';
import Item from './Item';
import { useObject, useQuery, useRealm } from '@realm/react';
import { Task } from '../../REALM/Schema/taskSchema';
import { BSON } from 'realm';

export default function Order() {
  const task = useQuery('Tasks')

  const [data, setData] = useState({
    title: '',
    description: '',
    _id: ''
  });
  const [updateItem ,setUpdateItem] = useState(null)
  const realm = useRealm()
  const [isUpdating, setIsUpdating] = useState(false);
  const handleAdd = async () => {
    const newObjectId = new BSON.ObjectId();
    const { title, description } = data;
    if (!title || !description) {
      Alert.alert("Please enter the Complete details");
    } else {

      try {
        
          realm.write(()=>{
            realm.create('Tasks', {title:title, description:description, is_Mark_As_Done:false, _id:newObjectId})
          })
        setData({
          title: '',
          description: ''
        });
      } catch (err) {
        console.log(err);
      }
    }
  };



  const updateTask = async () => {
    const { title, description, _id } = data;
    const itemToBeUpdated = realm.objectForPrimaryKey('Tasks', _id)
    try {
      if(itemToBeUpdated){
        realm.write(() => {
          itemToBeUpdated.title = title;
          itemToBeUpdated.description =description
          
        });
      setIsUpdating(false);
      setData({
        title: '',
        description: '',
        id: ''
      });
      }
    } catch (err) {
      console.log(err);
    }
  };


  // const isHermes = () => !!global.HermesInternal;
  // console.log(isHermes)
  return (
    <View>
      <View>
        <Text style={styles.heading}>Add Task</Text>
        <View style={styles.formContainer}>
          <TextInput
            label="title"
            mode='outlined'
            style={styles.inputField}
            onChangeText={(e) => setData({ ...data, title: e })}
            value={data.title}
          />
          <TextInput
            label="description"
            mode='outlined'
            style={styles.inputField}
            onChangeText={(e) => setData({ ...data, description: e })}
            value={data.description}
          />
          {!isUpdating ? (
            <TouchableOpacity onPress={handleAdd}>
              <Plus name='plus' size={30} color='black' />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={updateTask}>
              <Plus name='edit' size={30} color='black' />
            </TouchableOpacity>
          )}
        </View>
        <View style={{ marginTop: 10, padding: 5 }}>
          <FlatList
            data={task}
            scrollsToTop={true}
            renderItem={({ item }) => (
              <Item item={item} setData={setData} setIsUpdating={setIsUpdating} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

