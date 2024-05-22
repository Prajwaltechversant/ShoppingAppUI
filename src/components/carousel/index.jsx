import { View, Text, Image, Dimensions } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { Button } from 'react-native-paper'
import Carousel from 'react-native-reanimated-carousel'
import { useScreenContext } from '../../context/ScreenContextProvider'
import styles from './style'

export default function CarouselContainer({ images, currImg, setCarouselIndex }) {
  const screenContext = useScreenContext()
  const width = Dimensions.get("window").width;
  const carouselRef = useRef(0);

  useEffect(() => {
    if (currImg !== undefined) {
      carouselRef.current.scrollTo({index:currImg});
    }
  }, [currImg, images]);

  const screenStyles = styles(
    screenContext,
    screenContext[screenContext.windowisPortrait ? 'windoWidth' : 'windoHeight'],
    screenContext[screenContext.windowisPortrait ? 'windowHeight' : 'windowWidth']
  );

  return (
    <Carousel
      ref={carouselRef}
      loop={true}
      autoPlay={true}
      autoPlayInterval={3000}
      data={images}
      width={width}
      height={width / 2}
      renderItem={({ item, index }) => (
        <Image source={{ uri: item }} style={{ borderWidth: 2, width, height: width / 2 }} />
      )}
    />
    
  );
}
