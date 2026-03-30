import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

const Loader = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  },[]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, { transform: [{ rotate }] }]} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 30,
    height:30,
    borderWidth: 4,
    borderColor: "#62BCCC",
    borderTopColor: "transparent",
    borderRadius: 20,
  },
});





















