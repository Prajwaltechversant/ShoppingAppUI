import { View, Text, Dimensions, ImageBackground, Image } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated'
import coloPalette from '../../assets/Theme/coloPalette'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import logo from '../../assets/images/logo.png'
import Feather from 'react-native-vector-icons/Feather'
import NativeStack from '../stacks/NativeStack'



export default function Entry({ navigation }) {


    const { width, height } = Dimensions.get('screen')
    const translateY = useSharedValue(0)

    console.log(translateY.value)
    const Pan = Gesture.Pan()
        .onStart((event) => {
            // console.log('started')
            translateY.value = 0
        })
        .onUpdate((event) => {
            // console.log("running")
            if (event.translationY < 1) {
                translateY.value = withTiming(event.translationY, { duration: 1, easing: Easing.ease })
                
            }

        })
        .onEnd((event) => {
            console.log(-height / 2)
            console.log(translateY.value)
            if (translateY.value < -height / 2 || event.velocityY < -3500) {
                translateY.value = withTiming(-height, { duration: 3, easing: Easing.linear });
                navigation.replace('Tabs')


            } else {
                translateY.value = 0
            }
        }).runOnJS(true)

    const swipeUp = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }]
    }))

    return (
        <Animated.View style={[{ flex: 2, alignItems: 'center', backgroundColor: 'white', flexDirection: 'column' }, swipeUp]}>
            
            <View style={{ flex: 1, borderRadius:1, justifyContent:'center',alignItems:'center', flexDirection:'column' }}>
            <Image source={require('../../assets/images/logo.png')} width={100} height={100} />
            <Text style={{textAlign:'center', color:'black', fontSize:20}}>Lorem Lopsem</Text>
            </View>
            <GestureDetector gesture={Pan}>
                <Animated.View style={{  width,  flex:0.5, alignItems:'center', justifyContent:'center' }} >
                    <Text style={{color:'black'}}>Explore</Text>
                    <Feather name='chevrons-up' color='black' size={40}/>
                </Animated.View>
                
            </GestureDetector>

        </Animated.View>
    )
}