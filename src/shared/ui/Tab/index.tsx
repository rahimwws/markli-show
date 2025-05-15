import { FC, useEffect } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useTheme } from '@/shared/lib/theme';

interface TabProps {
  label: string;
  isActive: boolean;
  onPress?: () => void;
}

const Tab: FC<TabProps> = ({ isActive, label, onPress }) => {
  const { colors } = useTheme();
  const animationProgress = useSharedValue(0);

  useEffect(() => {
    animationProgress.value = withTiming(isActive ? 1 : 0, { duration: 300 });
  }, [isActive]);

  const underlineStyle = useAnimatedStyle(() => {
    const width = interpolate(animationProgress.value, [0, 1], [0, 100]);

    return {
      width: `${width}%`,
      opacity: animationProgress.value,
      alignSelf: 'center',
    };
  });

  return (
    <Pressable onPress={onPress} style={[styles.container]}>
      <Text
        style={{
          fontSize: 17,
          fontFamily: 'medium',
          color: isActive ? colors.text.primary : colors.text.secondary,
        }}>
        {label}
      </Text>
      <Animated.View style={[styles.underline, underlineStyle]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  underline: {
    height: 2,
    backgroundColor: '#007AFF',
    borderRadius: 1,
  },
});

Tab.displayName = 'Tab';

export default Tab;
