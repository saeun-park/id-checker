import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  const openCamera = () => {
    router.push('/camera');
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      router.push({
        pathname: '/result',
        params: { imageUri: result.assets[0].uri },
      });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 20, padding: 20 }}>
      <Button title="카메라로 촬영하기" onPress={openCamera} />
      <Button title="갤러리에서 선택하기" onPress={openGallery} />
    </View>
  );
}
