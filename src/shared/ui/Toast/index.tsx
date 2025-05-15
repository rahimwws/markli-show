import { BlurView } from 'expo-blur';
import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Animated, PanResponder, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/shared/lib/theme/useTheme';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onHide: () => void;
  icon?: React.ReactNode;
  visible?: boolean;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 5000,
  onHide,
  icon,
  visible = true,
}) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newY = Math.min(Math.max(gestureState.dy, -100), 50);
        translateY.setValue(newY);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (Math.abs(gestureState.dy) > 50) {
          Animated.timing(translateY, {
            toValue: gestureState.dy > 0 ? 100 : -100,
            duration: 200,
            useNativeDriver: true,
          }).start(onHide);
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            friction: 8,
            tension: 40,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (visible) {
      translateY.setValue(0);
      opacity.setValue(0);

      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(duration),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        onHide();
      });
    }
  }, [visible, duration]);

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return colors.accent.green;
      case 'error':
        return colors.accent.red;
      case 'info':
      default:
        return colors.accent.blue;
    }
  };

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity,
          transform: [
            {
              translateY: Animated.add(
                translateY,
                opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                })
              ),
            },
          ],
          bottom: insets.bottom + 20,
        },
      ]}
      {...panResponder.panHandlers}>
      <BlurView
        intensity={80}
        tint="light"
        style={[styles.toast, { backgroundColor: `#ffffff90` }]}>
        <View style={styles.content}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Text style={[styles.message, { color: getBackgroundColor() }]}>{message}</Text>
        </View>
      </BlurView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 9999,
    pointerEvents: 'box-none',
  },
  toast: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 50,
    marginHorizontal: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  message: {
    fontFamily: 'medium',
    fontSize: 16,
    textAlign: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 8,
  },
});

export default Toast;
