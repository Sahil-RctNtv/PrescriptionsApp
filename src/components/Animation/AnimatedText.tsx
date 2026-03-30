import React, { useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const AnimatedText = ({ text }: { text: string }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useFocusEffect(
    React.useCallback(() => {
      // reset every time screen opens
      opacity.setValue(0);
      scale.setValue(0.8);

      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        }),
      ]).start();
    }, [])
  );

  return (
    <Animated.Text
      style={[
        styles.text,
        {
          opacity,
          transform: [{ scale }],
        },
      ]}
    >
      {text}
    </Animated.Text>
  );
};

export default AnimatedText;

const styles = StyleSheet.create({
  text: {
     color: "#dc4079",
        fontSize: 25,
        fontWeight:"700",
        lineHeight:25
  },
});