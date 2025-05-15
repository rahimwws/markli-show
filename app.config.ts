import { ExpoConfig } from 'expo/config';

export default ({ config }: { config: ExpoConfig }) => {
  return {
    expo: {
      name: 'Markli',
      slug: 'Markli',
      version: '1.0.0',
      scheme: 'markli',
      experiments: {
        tsconfigPaths: true,
      },
      orientation: 'portrait',
      icon: './assets/icon.png',
      userInterfaceStyle: 'light',
      assetBundlePatterns: ['**/*'],
      ios: {
        usesAppleSignIn: true,
        supportsTablet: true,
        bundleIdentifier: 'com.markli',
        appleTeamId: 'Y56294DLAF',
        entitlements: {
          'com.apple.security.application-groups': ['group.com.markli', 'group.com.markli.widget'],
        },
        privacyManifests: {
          NSPrivacyAccessedAPITypes: [
            {
              NSPrivacyAccessedAPIType: 'NSPrivacyAccessedAPICategoryFileTimestamp',
              NSPrivacyAccessedAPITypeReasons: ['C617.1'],
            },
          ],
        },
      },
      android: {
        adaptiveIcon: {
          foregroundImage: './assets/adaptive-icon.png',
          backgroundColor: '#ffffff',
        },
        package: 'com.markli',
      },
      plugins: [
        'react-native-bottom-tabs',
        [
          'expo-image-picker',
          {
            photosPermission: 'Allow $(PRODUCT_NAME) to access your photos',
            cameraPermission: 'Allow $(PRODUCT_NAME) to access your camera',
          },
        ],
        'expo-apple-authentication',
        [
          'expo-build-properties',
          {
            ios: {
              deploymentTarget: '18.0',
              extraPods: [
                { name: 'SDWebImage', modular_headers: true },
                { name: 'SDWebImageSVGCoder', modular_headers: true },
              ],
            },
          },
        ],
        [
          'expo-share-extension',
          {
            activationRules: [
              { type: 'image', max: 1 },
              { type: 'image', max: 1 },
            ],
            backgroundColor: {
              red: 255,
              green: 255,
              blue: 255,
              alpha: 0,
            },
            excludedPackages: [
              'expo-dev-client',
              'expo-splash-screen',
              'expo-updates',
              'expo-font',
              'react-native-reanimated',
              'pressto',
              'react-native-worklets-core',
              'react-native-filament',
            ],
          },
        ],
        [
          'expo-splash-screen',
          {
            backgroundColor: '#fff',
            image: './assets/splash-2.0.png',
            dark: {
              image: './assets/splash-dark.png',
              resizeMode: 'contain',
            },
            imageWidth: 900,
          },
        ],
        [
          'expo-font',
          {
            fonts: [
              './assets/fonts/GeneralSans-Regular.otf',
              './assets/fonts/GeneralSans-Medium.otf',
              './assets/fonts/GeneralSans-SemiBold.otf',
              './assets/fonts/GeneralSans-Bold.otf',
            ],
          },
        ],
        [
          'expo-quick-actions',
          {
            iosActions: [
              {
                id: '1',
                title: 'Organize',
                subtitle: 'Organize your screenshots',
                icon: 'symbol:lasso.badge.sparkles',
                params: {
                  href: '/search',
                },
              },
            ],
          },
        ],
        '@bacons/apple-targets',
      ],
      extra: {
        eas: {
          projectId: 'ae2bc3fb-bf61-4c54-af76-0566ea5262f8',
        },
      },
    },
  };
};
