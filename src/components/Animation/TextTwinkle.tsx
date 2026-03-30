import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";

const TwinkleText = ({ text }: { text: string }) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0, 
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1, 
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.Text style={[styles.text, { opacity }]}>
      {text}
    </Animated.Text>
  );
};

export default TwinkleText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "700",
    color: "#F97316",

  },
});