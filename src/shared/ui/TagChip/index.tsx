import { FC, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { useTheme } from '@/shared/lib/theme';

interface TagChipProps {
  label?: string;
  color?: string;
  value?: boolean;
}

const TagChip: FC<TagChipProps> = ({ label = '#Guys', color = 'red', value = false }) => {
  const { colors } = useTheme();
  const [active, setActive] = useState<boolean>(value);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(active ? '#000000' : colors.background.primary, {
      duration: 100,
      easing: Easing.linear,
    }),
  }));

  return (
    <TouchableOpacity onPress={() => setActive(!active)} activeOpacity={0.8}>
      <Animated.View style={[animatedStyle, styles.background]}>
        <Text
          style={[styles.text, { color: active ? colors.primary.white : colors.text.secondary }]}>
          {label}
        </Text>
        <View style={{ width: 10, height: 10, borderRadius: 100, backgroundColor: color }} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'medium',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 100,
  },
});

TagChip.displayName = 'TagChip';

export default TagChip;
