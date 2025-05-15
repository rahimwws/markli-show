import { RouteProp, useRoute } from '@react-navigation/native';
import { Image } from 'expo-image';

import { Layout } from '@/shared/ui';
export default function OverviewScreen() {
  const { params } = useRoute<RouteProp<{ params: { imageUrl: string } }>>();
  return (
    <Layout>
      <Image source={{ uri: params?.imageUrl }} style={{ width: '50%', height: '50%' }} />
    </Layout>
  );
}
