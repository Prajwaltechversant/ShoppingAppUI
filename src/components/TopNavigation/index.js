import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'


export default function TopNavigation() {
    const tabs = [
        'Popular', 'Favourite', 'Offer', 'Category', 'Lorem',
    ]

    const [isClicked, setisClicked] = useState(false)
    return (
        <View style={styles.container}>
            <FlatList data={tabs} renderItem={({ item }) => <View style={{ width: 100, marginRight: 5 }}>
                <TouchableOpacity onPress={()=>setisClicked(!isClicked)}>
                    <Text style={styles.btn} >{item}</Text>

                </TouchableOpacity>
                {/* {
                    isClicked &&
                    <View style={{ backgroundColorcolor: 'yelow', width: 50, borderWidth: 10 }}></View>
                } */}
            </View>} horizontal={true} scrollEnabled={true}
                showsHorizontalScrollIndicator={false} />
        </View>
    )
}