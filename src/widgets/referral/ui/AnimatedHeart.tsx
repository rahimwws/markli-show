import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const AnimatedHeart = () => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withRepeat(
            withSequence(
              withTiming(1.05, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
              withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            true
          ),
        },
      ],
    };
  });
  return (
    <Animated.Image
      source={require('@/shared/assets/images/heart.png')}
      style={[
        {
          width: 200,
          height: 200,
        },
        animatedStyle,
      ]}
    />
  );
};

export default AnimatedHeart;
