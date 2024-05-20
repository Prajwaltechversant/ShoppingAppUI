import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import styles from './style';

export default function ButonFooter() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.leftText}> Earn 500+ points</Text>
            </TouchableOpacity>
            <Button icon="cart" mode="contained" onPress={() => console.log('Pressed')}>
                Add To cart
            </Button>
        </View>
    )
}