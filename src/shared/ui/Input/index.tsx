import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { forwardRef, ReactNode } from 'react';
import {
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  type TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import { colors } from '@/shared/lib/theme';

interface InputProps extends TextInputProps {
  value?: string;
  label?: string;
  hintText?: string;
  isInvalid?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  onChangeText?: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  /** @default false */
  isBottomSheet?: boolean;
}

const Input = forwardRef<RNTextInput, InputProps>(
  (
    {
      style,
      inputContainerStyle,
      label,
      isInvalid,
      hintText,
      startContent,
      endContent,
      containerStyle,
      value,
      isBottomSheet = false,
      ...props
    },
    ref
  ) => {
    return (
      <View style={[styles.container, containerStyle]}>
        {label && <Text style={[styles.label]}>{label}</Text>}
        <View
          style={[
            styles.wrapper,
            { borderColor: isInvalid ? colors.accent.red : colors.background.secondary },
            inputContainerStyle,
          ]}>
          {startContent && <View>{startContent}</View>}
          {isBottomSheet ? (
            <BottomSheetTextInput
              style={[styles.input, style]}
              placeholderTextColor={colors.text.secondary}
              {...props}
            />
          ) : (
            <TextInput
              ref={ref}
              style={[styles.input, style]}
              placeholderTextColor={colors.text.secondary}
              {...props}
            />
          )}
          {endContent && <View>{endContent}</View>}
        </View>
        {hintText && (
          <Text
            style={[styles.hint, { color: isInvalid ? colors.accent.red : colors.text.secondary }]}>
            {hintText}
          </Text>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8,
  },
  wrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontFamily: 'medium',
    fontSize: 16,
    color: colors.text.primary,
  },
  label: {
    fontFamily: 'medium',
    fontSize: 14,
    color: colors.text.secondary,
  },
  hint: {
    fontFamily: 'medium',
    fontSize: 11,
  },
});

Input.displayName = 'Input';

export default Input;
