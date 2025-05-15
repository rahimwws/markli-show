import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Name, Avatar, Referral, Welcome } from '@/screens';
import { AppNavigation } from '@/shared/lib/navigation';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName={AppNavigation.AUTH.LOGIN}>
      <Stack.Screen name={AppNavigation.AUTH.LOGIN} component={Login} />
      <Stack.Screen name={AppNavigation.AUTH.NAME} component={Name} />
      <Stack.Screen name={AppNavigation.AUTH.AVATAR} component={Avatar} />
      <Stack.Screen name={AppNavigation.AUTH.REFERRAL} component={Referral} />
      <Stack.Screen name={AppNavigation.AUTH.WELCOME} component={Welcome} />
    </Stack.Navigator>
  );
}
