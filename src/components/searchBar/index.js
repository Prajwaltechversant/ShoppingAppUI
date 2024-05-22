import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { Searchbar } from 'react-native-paper';
import FilterModal from '../FilterModal';


export default function SearchBar({ searchProductS }) {
    return (
        <View style={styles.root}>
            <View style={styles.container}>

                <Searchbar
                    placeholder="Search"
                    mode='bar'
                    style={styles.searchbar}
                    onChangeText={(e) => searchProductS(e)}
                />
                <View  >
                    <FilterModal />
                </View>

            </View>
        </View>

    )
}