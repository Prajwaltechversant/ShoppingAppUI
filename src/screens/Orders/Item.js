import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import coloPalette from '../../assets/Theme/coloPalette';
import {useObject, useQuery, useRealm} from '@realm/react';
const Item = ({item, setData, setIsUpdating}) => {
  const realm = useRealm();
  const task = useObject('Tasks', item._id);
  console.log(task);

  const handleDelete = async () => {
    try {
      realm.write(() => {
        realm.delete(task);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async () => {
    try {
      realm.write(() => {
        task.is_Mark_As_Done = true;
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSetUpdateData = () => {
    if (!item.is_MarkAsDone) {
      setData({
        title: item.title,
        description: item.description,
        _id: item._id,
      });
      setIsUpdating(true);
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: coloPalette.light.secondary,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
      }}>
      <Text style={{color: 'red', fontSize: 25}}>{item.title}</Text>
      <Text style={{color: 'red', fontSize: 25}}>{item.description}</Text>
      <View style={{flexDirection: 'row', gap: 15}}>
        <TouchableOpacity onPress={handleEdit}>
          <Icon
            name="checkcircle"
            size={20}
            color={item.is_Mark_As_Done ? 'green' : 'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSetUpdateData}>
          <Icon name="edit" size={20} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name="delete" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default memo(Item);
