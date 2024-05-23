import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import nodataImg from '../../assets/images/nodata.png'
export default function NoData() {
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    return (
        <View style={{ alignItems:'center', width,height:height/2, justifyContent:'center'}}>
            <Image source={{ uri:'https://www.minteventrentals.com/templates/mint/images/noproductfound.png' }} width={width} height={height/2} />
        </View>
    )
}