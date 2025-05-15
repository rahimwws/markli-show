import * as ImagePicker from 'expo-image-picker';

type ImageSource = 'camera' | 'gallery';

export const pickImage = async (
  source: ImageSource = 'gallery'
): Promise<ImagePicker.ImagePickerResult> => {
  if (source === 'camera') {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      throw new Error('Camera permission not granted');
    }
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    selectionLimit: 1,
  });

  return result;
};

export const takePhoto = async (): Promise<ImagePicker.ImagePickerResult> => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Camera permission not granted');
  }

  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  return result;
};
