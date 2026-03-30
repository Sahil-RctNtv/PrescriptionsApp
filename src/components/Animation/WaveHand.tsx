import React, { useEffect, useRef } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";

const WavingHand = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: -1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  },[]);

  const rotate = rotateAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-25deg", "25deg"],
  });

  
  return (
    <View style={styles.wrapper}>
     <Animated.View style={{transform: [{ translateY: 3 },{ rotate }]}}>
        <Text style={styles.hand}>👋</Text>
      </Animated.View>
    </View>
  );
};

export default WavingHand;

const styles = StyleSheet.create({
  wrapper: {
    height: 30,
    justifyContent: "flex-end", 
  },
  hand: {
    fontSize: 22,
  },
});