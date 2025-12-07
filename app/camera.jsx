import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, View } from 'react-native';

export default function Camera() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [camera, setCamera] = useState(null);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button title="카메라 권한 허용" onPress={requestPermission} />
      </View>
    );
  }

  const takePicture = async () => {
    if (!camera) return;

    try {
      const photo = await camera.takePictureAsync();
      // 사진 찍은 후에 이동
      router.push({
        pathname: '/result',
        params: { imageUri: photo.uri },
      });
    } catch (error) {
      console.log('Camera error:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} ref={setCamera} />
      <View style={{ position: 'absolute', bottom: 30, alignSelf: 'center' }}>
        <Button title="촬영" onPress={takePicture} />
      </View>
    </View>
  );
}
