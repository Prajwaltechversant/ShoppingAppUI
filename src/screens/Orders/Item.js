import { View, Text, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import database from '../../dB';
import coloPalette from '../../assets/Theme/coloPalette';
import { withObservables } from '@nozbe/watermelondb/react';

const Item = ({ item, setData, setIsUpdating }) => {
  const handleDelete = async () => {
    try {
      await database.write(async () => {
        const task = await database.get('tasks').find(item.id);
        await task.destroyPermanently();
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async () => {
    const date = new Date();
    const tdy = date.getTime();
    try {
      await database.write(async () => {
        const task = await database.get('tasks').find(item.id);
        await task.update(() => {
          task.is_MarkAsDone = true;
          task.updated_at = tdy;
        });
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
        id: item.id
      });
      setIsUpdating(true);
    }
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: coloPalette.light.secondary, borderRadius: 10, padding: 10, marginVertical: 5 }}>
      <Text style={{ color: 'red', fontSize: 25 }}>{item.title}</Text>
      <Text style={{ color: 'red', fontSize: 25 }}>{item.description}</Text>
      <View style={{ flexDirection: 'row', gap: 15 }}>
        <TouchableOpacity onPress={handleEdit}>
          <Icon name='checkcircle' size={20} color={item.is_MarkAsDone ? 'green' : 'white'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSetUpdateData}>
          <Icon name='edit' size={20} color='blue' />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name='delete' size={20} color='red' />
        </TouchableOpacity>
      </View>
    </View>
  );
};


// export default  memo(Item)
const enhance = withObservables(['item'], ({ item }) => ({
  item
}));

const EnhancedItem = enhance(Item);
export default EnhancedItem;
