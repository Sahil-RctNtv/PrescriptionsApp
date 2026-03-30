import React, { useEffect, useRef } from "react";
import { View, Animated, Image, Text, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }: any) => {
  const scale = useRef(new Animated.Value(0.6)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      // fade + zoom in
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1.2,
          friction: 4,
          useNativeDriver: true,
        }),
      ]),

      Animated.sequence([
        Animated.spring(scale, {
          toValue: 0.95,
          friction: 5,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    setTimeout(() => {
      navigation.replace("Login");
    }, 2200);
  }, []);

  return (
    <View style={styles.container}>
      
      <Animated.Image
        source={require("../../../assets/myIcon.png")}
        style={[
          styles.logo,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      />

      <Animated.Text style={[styles.text, { opacity }]}>
        Medi<Text style={styles.go}>Go</Text>
      </Animated.Text>

    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF6FB",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 100,
  },
  text: {
    // marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#337AC0",
  },
  go: {
    color: "#62BCCC",
  },
});