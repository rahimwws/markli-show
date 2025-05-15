import { BlurView } from 'expo-blur';
import { type InitialProps, openHostApp } from 'expo-share-extension';
import { GlowBorder } from 'modules/glowing-border';
import { useCallback, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FilamentScene, FilamentView, DefaultLight, Model, Camera } from 'react-native-filament';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

import AiFolder from './ai/AiFolder';
import { createStyles } from './style';

import MyModel from '@/shared/assets/glb/ai.glb';
import { SegmentedControl, Typography } from '@/shared/ui';
import { useTheme } from '@/theme/useTheme';
const Data = [
  { name: 'Ai', slug: 'ai' },
  { name: 'Custom', slug: 'custom' },
];
export default function ShareExtension({ images }: InitialProps) {
  const { colors } = useTheme();
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
  const [scale, setScale] = useState<[number, number, number]>([1, 1, 1]);
  const [mode, setMode] = useState<'ai' | 'custom'>();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(mode === 'custom' ? '87%' : '80%', {
        damping: 15,
        stiffness: 100,
      }),
    };
  });

  useEffect(() => {
    const easeInOut = (t: number) => 0.5 - Math.cos(Math.PI * t) / 2;

    let angle = 0;
    let timeout: NodeJS.Timeout;

    const animate = () => {
      // 🔸 SCALE IN (0 → 1.15)
      let scaleFrame = 0;

      const scaleIn = () => {
        scaleFrame += 1;
        const t = scaleFrame / 30; // ~0.5s
        if (t >= 1) {
          setScale([1.15, 1.15, 1.15]);
          scaleOut();
          return;
        }

        const eased = easeInOut(t);
        const s = 1 + eased * 0.15;
        setScale([s, s, s]);

        requestAnimationFrame(scaleIn);
      };

      // 🔸 SCALE OUT (1.15 → 1)
      const scaleOut = () => {
        let scaleOutFrame = 0;

        const go = () => {
          scaleOutFrame += 1;
          const t = scaleOutFrame / 30;
          if (t >= 1) {
            setScale([1, 1, 1]);
            startRotation(); // запуск вращения после скейла
            return;
          }

          const eased = easeInOut(t);
          const s = 1.15 - eased * 0.15;
          setScale([s, s, s]);

          requestAnimationFrame(go);
        };

        go();
      };

      // 🔸 ROTATION (по оси Y)
      const startRotation = () => {
        let rotateFrame = 0;
        const from = angle;
        const to = angle + Math.PI * 2;
        angle = to;

        const rotate = () => {
          rotateFrame += 1;
          const t = rotateFrame / 50; // ~0.5s, медленнее
          if (t >= 1) {
            setRotation([0, to, 0]);
            timeout = setTimeout(animate, 500); // пауза перед повтором
            return;
          }

          const eased = easeInOut(t);
          const a = from + (to - from) * eased;
          setRotation([0, a, 0]);

          requestAnimationFrame(rotate);
        };

        rotate();
      };

      scaleIn();
    };

    animate();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const styles = createStyles(colors);
  const handleOpenHostApp = useCallback(() => {
    if (images?.length) {
      openHostApp(`/create?imageUrl=${images[0]}`);
    }
  }, [images]);
  return (
    <GlowBorder>
      <View style={styles.container}>
        <BlurView intensity={120} tint="dark" style={StyleSheet.absoluteFill}>
          {images?.length ? (
            <Image
              source={{ uri: images[0] }}
              style={styles.backgroundImage}
              resizeMode="cover"
              blurRadius={100}
            />
          ) : null}
        </BlurView>
        <Animated.View style={[styles.shareContainer, animatedStyle]}>
          <SegmentedControl
            data={Data}
            onPress={(item) => setMode(item.slug as 'ai' | 'custom')}
            selected={Data.find((item) => item.slug === mode) || Data[0]}
            width={150}
            height={35}
          />
          <FilamentScene>
            <FilamentView
              style={{
                width: 350,
                height: 350,
                // backgroundColor: 'red',
                position: 'absolute',
                top: '-5%',
                zIndex: 2,
              }}>
              <Model source={MyModel} transformToUnitCube rotate={rotation} scale={scale} />
              <DefaultLight />
              <Camera />
            </FilamentView>
          </FilamentScene>
          <View style={{ width: '90%', flex: 1, alignItems: 'center', top: '25%' }}>
            <Typography size={24} styles={{ fontFamily: 'GeneralSans-SemiBold' }}>
              Organize your screenshot with AI
            </Typography>
            {images?.length ? (
              <AiFolder image={images[0]} />
            ) : // <Image source={{ uri: images[0] }} style={styles.aiImage} resizeMode="cover" />
            null}
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleOpenHostApp}>
            <Text style={styles.buttonText}>organizeeee ✨</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </GlowBorder>
  );
}
