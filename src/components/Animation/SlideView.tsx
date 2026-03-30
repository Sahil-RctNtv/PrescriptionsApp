import React, { useRef, useCallback } from "react";
import { Animated, StyleSheet, Easing } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

interface Props {
  children: React.ReactNode;
  from?: "left" | "right";
  duration?: number;
  delay?: number;
}

const SlideInView: React.FC<Props> = ({
  children,
  from = "left",
  duration = 800,
  delay = 0,
}) => {
  const startValue = from === "left" ? -300 : 300;
  const slideAnim = useRef(new Animated.Value(startValue)).current;

  useFocusEffect(
    useCallback(() => {
      slideAnim.setValue(startValue);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration,
        delay,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }, [from])
  );

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateX: slideAnim }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default SlideInView;

const styles = StyleSheet.create({
  container: {
    marginTop:7,
    alignSelf:'center',
    width: "93%",
  },
});