import React, { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";

const AnimatedHeading = ({ Styles }: any) => {
  const scale = useRef(new Animated.Value(0.8)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1.1,
          friction: 4,
          useNativeDriver: true,
        }),
      ]),
      Animated.spring(scale, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.Text
      style={[
        Styles.medi,
        {
          opacity,
          transform: [{ scale }],
        },
      ]}
    >
      Medi<Text style={Styles.go}>Go</Text>
    </Animated.Text>
  );
};

export default AnimatedHeading;