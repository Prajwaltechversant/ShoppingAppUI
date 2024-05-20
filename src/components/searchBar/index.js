import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function SearchBar() {
    return (
        <View style={styles.root}>
            <View style={styles.container}>

                <Searchbar
                    placeholder="Search"
                    mode='bar'
                    style={styles.searchbar}
                />
                <View  >
                    <Ionicons name='filter' size={30} color={'#D20103'} styles={styles.filtericon} />

                </View>

            </View>
        </View>

    )
}