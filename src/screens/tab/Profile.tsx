import { TouchableOpacity } from 'react-native';

import { Layout, Typography } from '@/shared/ui';
import ArrowBoxLeft from '@/shared/ui/Icons/ArrowBoxLeft';
import { ProfileHead, ProfileInfo } from '@/widgets/profile';
import { MenuList } from '@/widgets/profile/ui';
// icons

export default function Profile() {
  return (
    <Layout>
      <ProfileHead />
      <ProfileInfo firstName="Murat" lastName="Sapayev" email="msapayev2@gmail.com" />
      <MenuList />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          marginVertical: 20,
          padding: 10,
        }}
        onPress={() => {}}>
        <ArrowBoxLeft />
        <Typography font="semibold" size={17} color="black">
          Sign Out
        </Typography>
      </TouchableOpacity>
    </Layout>
  );
}
