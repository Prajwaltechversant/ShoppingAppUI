import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { Searchbar } from 'react-native-paper';
import FilterModal from '../FilterModal';
import coloPalette from '../../assets/Theme/coloPalette';


export default function SearchBar({ searchProductS }) {
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Searchbar
                    placeholder="Search"
                    mode='bar'
                    style={styles.searchbar}
                    onChangeText={(e) => searchProductS(e)}
                    iconColor={coloPalette.light.primary}
                    
                />
                <View style={{justifyContent:'center', alignItems:'center'}} >
                    <FilterModal />
                </View>

            </View>

        </View>

    )
}