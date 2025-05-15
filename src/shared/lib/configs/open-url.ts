import { Platform, Linking } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
export const openUrl = async (url: string) => {
  await (Platform.OS === 'ios'
    ? InAppBrowser.open(url, {
        animated: true,
        modalPresentationStyle: 'formSheet',
      })
    : Linking.openURL(url));
};
