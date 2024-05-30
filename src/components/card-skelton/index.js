import styles from './style';
import {View, Text,} from 'react-native';
import React, { useEffect } from 'react';
import {Avatar, Button, Card, withTheme} from 'react-native-paper';
import Star from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated, {useAnimatedStyle, Easing ,useSharedValue, withRepeat, withTiming} from 'react-native-reanimated';

export default function CardSkelton() {
  const opacity = useSharedValue(1);
  console.log(opacity.value, 'opacity')

useEffect(()=>{
    opacity.value = withRepeat(withTiming(0.1, {duration:1000
        ,easing:Easing.ease
    }),
-1,
true)
},[])

  const loadingAnimation = useAnimatedStyle(() => {
    return {
        opacity: opacity.value,
    };
});
  return (
      <Animated.View style={[styles.container,loadingAnimation]}>
        <Animated.View style={[styles.cardImage, loadingAnimation]} />
        <Animated.View style={[styles.cardContent, loadingAnimation]}>
          <View style={styles.cardContentView}>
            <Animated.View style={[styles.trashIcon, loadingAnimation]}></Animated.View>
            <View>
              <View style={styles.text}></View>
            </View>
          </View>
        </Animated.View>
        <Card.Actions>
          <Animated.View style={[styles.cardActions, loadingAnimation]}>
            <View style={{flexDirection: 'row'}}>
              <Animated.View style={[{backgroundColor: '#F2EFE5', height: 10,},loadingAnimation]}></Animated.View>
              <Animated.View style={[{backgroundColor: '#F2EFE5', height: 10,opacity},loadingAnimation]}></Animated.View>
            </View>
            <Animated.View style={[{backgroundColor: 'gray', justifyContent:'flex-end', alignItems:'flex-end'},loadingAnimation]}>
              <View style={styles.rating}></View>
            </Animated.View>
          </Animated.View>
        </Card.Actions>
      </Animated.View>
  );
}
