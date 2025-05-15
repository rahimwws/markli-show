import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { Image, View } from 'react-native';

import { LoginForm, SkipSheet } from '@/features/register-user';
import { Layout, Typography } from '@/shared/ui';

const Login = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <Image
            source={require('@/shared/assets/images/girl.png')}
            style={{ height: 450, borderRadius: 40 }}
            resizeMode="contain"
          />
          <Typography font="semibold" color="black" size={20} width="50%" align="center" top={5}>
            create any image you can dream up.
          </Typography>
        </View>
        <LoginForm
          present={() => {
            bottomSheetModalRef.current?.present();
          }}
        />
        <SkipSheet ref={bottomSheetModalRef} />
      </View>
    </Layout>
  );
};

export default Login;
