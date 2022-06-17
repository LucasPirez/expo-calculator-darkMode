// import { Animated } from "react-native";

// const animVal = new Animated.Value(0);

// export const animatedTransition = Animated.spring(animVal, {
//   toValue: 1,
//   useNativeDriver: false,
// });

// export const animatedTransitionReset = Animated.spring(animVal, {
//   toValue: 0,
//   useNativeDriver: false,
// });

import React, { useRef, useEffect } from "react";
import { Animated, Easing, Text, View } from "react-native";

export const AnimatedHistory = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(fadeAnim, {
      toValue: 2,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, props.show]);

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [270, 0],
            }),
          },
        ],
      }}
    >
      {props.children}
    </Animated.View>
  );
};
