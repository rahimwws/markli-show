import { focusManager } from '@tanstack/react-query';
import { BlurView } from 'expo-blur';
import { useEffect } from 'react';
import { AppState, AppStateStatus, Platform, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import Root from '@/app';
import { useAppState } from '@/shared/lib/configs/app-state';

export default function App() {
  const appState = useAppState();
  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);
  return (
    <>
      <Root />
      {appState !== 'active' && (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.overlay}>
          <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
    borderRadius: 24,
    overflow: 'hidden',
  },
});
