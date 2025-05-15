import { View } from 'react-native';

import { useAppleSignIn, useGoogleSignIn } from '../lib/configs';

import { LargeButton } from '@/shared/ui/Button';
import AppleLogo from '@/shared/ui/Icons/Apple';
import GoogleLogo from '@/shared/ui/Icons/Google';
import Row from '@/shared/ui/Row';
import { useTheme } from '@/theme/useTheme';
// icons

export default function LoginForm({ present }: { present: () => void }) {
  const { handleAppleSignIn } = useAppleSignIn();
  const { promptAsync } = useGoogleSignIn();
  const { colors } = useTheme();

  return (
    <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 16 }}>
      <View style={{ gap: 10 }}>
        <LargeButton
          text="continue with apple"
          icon={<AppleLogo fill={colors.primary.white} />}
          action={handleAppleSignIn}
        />
        <Row gap={10} style={{ width: '100%' }}>
          <View style={{ flex: 1 }}>
            <LargeButton
              icon={<GoogleLogo fill={colors.primary.black} />}
              bg="secondary"
              action={() => promptAsync()}
            />
          </View>
          <View style={{ flex: 1 }}>
            <LargeButton
              text="skip"
              bg="secondary"
              textColor="black"
              // isRoute
              // route="Name"
              action={present}
            />
          </View>
        </Row>
      </View>
    </View>
  );
}
