import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
import { ViewProps } from 'react-native';
type Props = ViewProps & {
  children?: React.ReactNode;
};

const NativeGlow = requireNativeViewManager<Props>('GlowingBorder');
export const GlowBorder = (props: Props) => {
  return (
    <NativeGlow style={[{ flex: 1, paddingTop: -100 }, props.style]}>{props.children}</NativeGlow>
  );
};
