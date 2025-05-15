import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

import { styles } from './style';
import { pickImage, takePhoto } from '../lib/configs';

import { useUserStore } from '@/entities/user';
import { useToast } from '@/shared/lib';
import { colors } from '@/shared/lib/theme';
// icons
import CameraIcon from '@/shared/ui/Icons/Camera';
import EditIcon from '@/shared/ui/Icons/Edit';
import GalleryIcon from '@/shared/ui/Icons/Gallery';
import PlusIcon from '@/shared/ui/Icons/Plus';

export const AvatarForm = () => {
  const [mode, setMode] = useState<'edit' | 'camera' | 'gallery' | 'choose' | null>(null);
  const { showToast } = useToast();
  const setAvatar = useUserStore((state) => state.setAvatar);
  const avatar = useUserStore((state) => state.user?.avatar);
  console.log(avatar);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withSpring(mode === 'choose' || mode === 'edit' ? '45deg' : '0deg', {
            damping: 15,
            stiffness: 120,
          }),
        },
      ],
    };
  });

  const cameraStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(mode === 'choose' || mode === 'edit' ? 5 : -60, {
            damping: 15,
            stiffness: 120,
          }),
        },
      ],
      opacity: withSpring(mode === 'choose' || mode === 'edit' ? 1 : 0, {
        damping: 15,
        stiffness: 120,
      }),
    };
  });

  const galleryStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(mode === 'choose' || mode === 'edit' ? 10 : -60, {
            damping: 15,
            stiffness: 120,
          }),
        },
      ],
      opacity: withSpring(mode === 'choose' || mode === 'edit' ? 1 : 0, {
        damping: 15,
        stiffness: 120,
      }),
    };
  });

  const chooseFromGallery = async () => {
    const result = await pickImage();
    setMode('gallery');
    if (result.assets) {
      setAvatar(result.assets[0].uri);
    } else if (result.canceled) {
      showToast('cancelled', 'error');
    }
  };

  const takePhotoFromCamera = async () => {
    const result = await takePhoto();
    if (result.assets) {
      setAvatar(result.assets[0].uri);
      setMode('camera');
    } else if (result.canceled) {
      showToast('cancelled', 'error');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (avatar) {
            setMode('edit');
          } else {
            if (mode === 'choose') {
              setMode(null);
            } else {
              setMode('choose');
            }
          }
        }}
        style={styles.form}>
        <BlurView intensity={20} tint="light" style={styles.blurContainer} />
        {avatar ? (
          <EditIcon />
        ) : (
          <Animated.View style={animatedStyle}>
            <PlusIcon stroke={colors.primary.gray} />
          </Animated.View>
        )}
      </TouchableOpacity>
      <Animated.View style={[styles.camera, cameraStyle]}>
        <BlurView intensity={10} tint="light" style={styles.blurContainer} />
        <TouchableOpacity activeOpacity={0.8} onPress={takePhotoFromCamera}>
          <CameraIcon />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.gallery, galleryStyle]}>
        <BlurView intensity={20} tint="light" style={styles.blurContainer} />
        <TouchableOpacity activeOpacity={0.8} onPress={chooseFromGallery}>
          <GalleryIcon />
        </TouchableOpacity>
      </Animated.View>
      {avatar && <Image source={{ uri: avatar }} style={styles.image} contentFit="cover" />}
    </View>
  );
};
