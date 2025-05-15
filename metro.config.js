const { getDefaultConfig } = require('expo/metro-config');
const { withShareExtension } = require('expo-share-extension/metro');

module.exports = withShareExtension(
  (() => {
    // eslint-disable-next-line no-undef
    const config = getDefaultConfig(__dirname);

    const { resolver } = config;

    config.resolver = {
      ...resolver,
      assetExts: [...(resolver.assetExts || []), 'glb'],
      sourceExts: [...(resolver.sourceExts || []), 'glb'],
    };

    return config;
  })()
);
