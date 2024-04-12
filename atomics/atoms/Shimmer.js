import React, { useEffect, useRef, useState } from 'react';
import { View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ShimmerPlaceHolder({ style, children, shimmerGradient }) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
        delay: 500
      })
    ).start();
  }, []); 

  const handleLayout = (event) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={[style, {overflow:'hidden'}]} onLayout={handleLayout}> 
      <Animated.View style={{
        width: 50,
        height: '100%',
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 0, // Reset left to 0
        transform: [{
          translateX: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-containerWidth, containerWidth * 2] 
          })
        }]
      }} >
        <LinearGradient
              colors={shimmerGradient ? shimmerGradient: ['transparent', 'rgba(0,0,0,0.1)', 'transparent']}
              start={{ x: 0, y: 0 }} 
              end={{ x: 1, y: 0 }} 
              style={{ flex: 1 }}   
        />
        
      </Animated.View>
      {children} 
    </View>
  );
} 