import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  const openCamera = () => {
    router.push('/camera');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 20, padding: 20 }}>
      <Button title="카메라로 촬영하기" onPress={openCamera} />
    </View>
  );
}
