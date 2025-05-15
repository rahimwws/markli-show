import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Overview, Paywall, Notifications, LastScreenshots, AllFolders } from '@/screens';
import { AppNavigation } from '@/shared/lib/navigation';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppNavigation.HOME_STACK.OVERVIEW} component={Overview} />
      <Stack.Screen name={AppNavigation.HOME_STACK.PAYWALL} component={Paywall} />
      <Stack.Screen name={AppNavigation.HOME_STACK.NOTIFICATIONS} component={Notifications} />
      <Stack.Screen name={AppNavigation.HOME_STACK.LAST_SCREENSHOTS} component={LastScreenshots} />
      <Stack.Screen name={AppNavigation.HOME_STACK.ALL_FOLDERS} component={AllFolders} />
    </Stack.Navigator>
  );
}
