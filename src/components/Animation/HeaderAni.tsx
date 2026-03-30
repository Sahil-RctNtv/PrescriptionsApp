import React, { useRef, useCallback } from "react";
import { Animated } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const AnimatedHeaderTitle = ({ title, style }: any) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-10)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  useFocusEffect(
    useCallback(() => {
      opacity.setValue(0);
      translateY.setValue(-10);
      scale.setValue(0.9);

      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    }, [])
  );
  return (
    <Animated.Text
      style={[
        style,
        {
          opacity,
          transform: [{ translateY }, { scale }],
        },
      ]}
    >
      {title}
    </Animated.Text>
  );
};
export default AnimatedHeaderTitle;