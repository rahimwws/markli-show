import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './auth';
import Service from './service';

import { useUserStore } from '@/entities/user';
import { AppNavigation } from '@/shared/lib/navigation';

const Main = () => {
  const Stack = createNativeStackNavigator();
  const user = useUserStore((state) => state.user);
  return (
    <Stack.Navigator
      initialRouteName={user?.token ? AppNavigation.SERVICE : AppNavigation.AUTH.ROOT}
      screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen
        component={AuthNavigator}
        name={AppNavigation.AUTH.ROOT}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Service}
        name={AppNavigation.SERVICE}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Main;
