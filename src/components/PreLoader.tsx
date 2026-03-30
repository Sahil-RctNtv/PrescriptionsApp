import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

const HealthifyPreloader = ({ navigation }) => {

  const progress = useSharedValue(0);

  useEffect(() => {
  progress.value = withRepeat(
    withTiming(1, { duration: 4000, easing: Easing.linear }),
    -1,
    false
  );

  const timer = setTimeout(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Tabs" }],
    });
  }, 2500);

  return () => clearTimeout(timer);
}, []);

  const waveStyle1 = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: progress.value * -200,
      },
      {
        translateY: progress.value * -4,
      }
    ],
  }));

  const waveStyle2 = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: progress.value * 200,
      },
      {
        translateY: progress.value * 4, 
      }
    ],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.circle}>

        
        <Animated.View style={[styles.waveContainer, waveStyle2]}>
          <Svg width="400" height="100" viewBox="0 0 400 120">
            <Path
              d="M0 50 Q 50 20, 100 50 T 200 50 V 120 H 0 Z"
              fill="#9fdad5"
              opacity="0.5"
            />
            <Path
              d="M200 50 Q 250 20, 300 50 T 400 50 V 120 H 200 Z"
              fill="#9fdad5"
              opacity="0.5"
            />
          </Svg>
        </Animated.View>

      
        <Animated.View style={[styles.waveContainer, waveStyle1]}>
          <Svg width="600" height="100" viewBox="0 0 400 120">

            <Path
              d="M0 45 Q 50 15, 100 45 T 200 45 V 120 H 0 Z"
              fill="#07b3b9"
              opacity="0.8"
            />

            <Path
              d="M200 45 Q 250 15, 300 45 T 400 45 V 120 H 200 Z"
              fill="#07b3b9"
              opacity="0.8"
            />

            <Path
              d="M400 45 Q 450 15, 500 45 T 600 45 V 120 H 400 Z"
              fill="#07b3b9"
              opacity="0.8"
            />

          </Svg>
        </Animated.View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#4DB6AC',
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  waveContainer: {
    position: 'absolute',
    bottom: -10,
  },
});

export default HealthifyPreloader;