import React, { useRef, useEffect } from "react";
import { TouchableOpacity, Text, Animated,StyleSheet } from "react-native";

const AnimatedContinueButton = ({ onPress }: any) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;


  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.04,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        style={Styles.container1}
        activeOpacity={0.8}
        onPressIn={() => {
          Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
          }).start();
        }}
        onPressOut={() => {
          Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
          }).start();
        }}
        onPress={onPress}
      >
        <Text style={Styles.txt}>
          Continue
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AnimatedContinueButton;

const Styles=StyleSheet.create({
    container1:{
      marginTop: 25,
      backgroundColor: "#14B8A6",
      padding: 10,
      width: "60%",
      alignItems: "center",
      borderRadius: 15,
      elevation: 3,
      alignSelf:'center',
      marginBottom:45
      
    },
    txt:{ 
        fontSize: 20, 
        fontWeight: "500", 
        color: "#FFFFFF" 
    },
})