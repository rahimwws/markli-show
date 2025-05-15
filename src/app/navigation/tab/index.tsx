import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import * as Linking from 'expo-linking';
import { useEffect } from 'react';

import { Home, Profile, Folders } from '@/screens';
import { AppNavigation, useAppNavigation } from '@/shared/lib/navigation';
import { useTheme } from '@/theme/useTheme';

const Tab = createNativeBottomTabNavigator();

export default function TabNavigator() {
  const { colors } = useTheme();
  const navigation = useAppNavigation();
  useEffect(() => {
    const subscription = Linking.addEventListener('url', (event) => {
      console.log(event.url);
      if (event.url.includes('create')) {
        navigation.navigate(AppNavigation.HOME_STACK.ROOT, {
          screen: AppNavigation.HOME_STACK.OVERVIEW,
          params: { imageUrl: event.url.split('imageUrl=')[1] },
        });
      }
    });

    return () => {
      subscription.remove();
    };
  }, [navigation]);
  return (
    <Tab.Navigator
      initialRouteName={AppNavigation.TAB.HOME}
      tabLabelStyle={{
        fontFamily: 'medium',
      }}
      sidebarAdaptable
      hapticFeedbackEnabled
      screenOptions={{
        lazy: false,
      }}
      translucent
      tabBarActiveTintColor={colors.text.primary}
      tabBarInactiveTintColor={colors.text.secondary}
      tabBarStyle={{
        backgroundColor: colors.background.primary,
      }}>
      <Tab.Screen
        name={AppNavigation.TAB.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? require('@/svg/home-filled.svg') : require('@/svg/home.svg'),
        }}
      />
      <Tab.Screen
        name={AppNavigation.TAB.FOLDERS}
        component={Folders}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? require('@/svg/folder-open-filled.svg') : require('@/svg/folder-open.svg'),
        }}
      />
      <Tab.Screen
        name={AppNavigation.TAB.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? require('@/svg/profile-filled.svg') : require('@/svg/profile.svg'),
        }}
      />
    </Tab.Navigator>
  );
}
