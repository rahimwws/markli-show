import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { onlineManager } from '@tanstack/react-query';
import * as Network from 'expo-network';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Main from './navigation';
import NavigationProvider from './provider/navigation';
import QueryProvider from './provider/query-provider';

import { ToastProvider } from '@/app/provider/toast-provider';
const Root = () => {
  onlineManager.setEventListener((setOnline) => {
    const eventSubscription = Network.addNetworkStateListener((state) => {
      setOnline(!!state.isConnected);
    });
    return eventSubscription.remove;
  });

  return (
    <NavigationProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <SafeAreaProvider>
            <QueryProvider>
              <ToastProvider>
                <KeyboardProvider>
                  <Main />
                </KeyboardProvider>
              </ToastProvider>
            </QueryProvider>
          </SafeAreaProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </NavigationProvider>
  );
};

export default Root;
