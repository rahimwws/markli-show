import * as Haptics from 'expo-haptics';
import { PressableScale } from 'pressto';
import { useMemo } from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AnimatedBlurView } from './AnimatedBlur';

import { colors } from '@/shared/lib/theme';
export const Palette = {
  baseGray05: '#f5f5f5',
  baseGray80: colors.primary.light_gray,
  background: colors.background.primary,
  highlightLabel: colors.text.primary,
  baseLabel: colors.text.disabled,
};
const TimingConfig = {
  duration: 700,
  easing: Easing.bezier(0.4, 0.0, 0.2, 1),
};

// Define a type for the SegmentedControl component's props
type SegmentedControlProps<T extends { name: string }> = {
  data: readonly T[]; // An array of items to display in the control
  onPress: (item: T) => void; // A function to handle item selection
  selected: T; // The currently selected item
  width: number; // The width of the control
  height: number; // The height of the control
};

// Define the SegmentedControl component
function SegmentedControl<T extends { name: string }>({
  data,
  onPress,
  selected,
  width,
  height,
}: SegmentedControlProps<T>) {
  // Internal padding for spacing between elements
  const internalPadding = 3;

  // Calculate the width of each cell background based on the number of items
  const cellBackgroundWidth = width / data.length;
  const activeIndexes = useSharedValue<number[]>([]);

  // Find the index of the selected item in the data array
  const selectedCellIndex = useMemo(
    () => data.findIndex((item) => item === selected),
    [data, selected]
  );

  const blurProgress = useSharedValue(0);

  const animatedBlurProps = useAnimatedProps(() => {
    return {
      intensity: interpolate(blurProgress.value, [0, 0.5, 1], [0, 15, 0]),
    };
  }, [blurProgress]);

  // Create an animated style for the selected cell background
  const rCellMessageStyle = useAnimatedStyle(() => {
    // Define the padding based on the selected item's index
    const padding = interpolate(
      selectedCellIndex,
      [0, data.length - 1],
      [internalPadding, -internalPadding]
    );
    // Example (with 5 items):
    // 0 -> internalPadding / 2
    // 1 ->  internalPadding / 4
    // 2 -> 0
    // 3 -> -internalPadding / 4
    // 4 -> -internalPadding / 2

    return {
      left: withTiming(cellBackgroundWidth * selectedCellIndex + padding, TimingConfig),
    };
  }, [selectedCellIndex]);

  const rCellBlurMessageStyle = useAnimatedStyle(() => {
    return {
      left: withTiming(cellBackgroundWidth * selectedCellIndex, TimingConfig),
    };
  }, [selectedCellIndex]);

  return (
    <View
      style={[
        localStyles.backgroundContainer,
        {
          backgroundColor: Palette.baseGray05,
          width,
          height,
          padding: internalPadding,
        },
      ]}>
      {data.map((item, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const internalBlurProps = useAnimatedProps(() => {
          return {
            intensity: interpolate(
              activeIndexes.value.includes(index) ? blurProgress.value : 0,
              [0, 0.5, 1],
              [0, 10, 0]
            ),
          };
        }, [blurProgress]);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const rLabelStyle = useAnimatedStyle(() => {
          return {
            color: withTiming(
              selectedCellIndex === index ? Palette.highlightLabel : Palette.baseLabel,
              TimingConfig
            ),
          };
        }, [selectedCellIndex, index]);

        return (
          <Pressable
            key={item.name}
            style={[localStyles.labelContainer]}
            onPress={() => {
              // Call the provided onPress function with the selected item
              onPress(item);
              const prevIndex = data.findIndex((dataItem) => dataItem.name === selected.name);
              if (prevIndex === index) {
                return;
              }
              activeIndexes.value = [prevIndex, index];
              cancelAnimation(blurProgress);
              blurProgress.value = withTiming(1, TimingConfig, () => {
                blurProgress.value = 0;
                activeIndexes.value = [];
              });
              Haptics.selectionAsync();
            }}>
            <Animated.Text style={[localStyles.difficultyLabel, rLabelStyle]}>
              {item.name}
            </Animated.Text>
            <AnimatedBlurView
              animatedProps={internalBlurProps as any}
              tint={'light' as any}
              style={localStyles.blurView}
            />
          </Pressable>
        );
      })}

      {/* CELL BACKGROUND */}
      <Animated.View
        style={[
          {
            width: cellBackgroundWidth - internalPadding / data.length,
            height: height - internalPadding * 2,
          },
          localStyles.highlightedCellContent,
          rCellMessageStyle,
        ]}
      />
      <Animated.View
        style={[
          {
            width: cellBackgroundWidth,
            height,
            zIndex: 10,
          },
          localStyles.highlightedCellBlurContent,
          rCellBlurMessageStyle,
        ]}>
        <AnimatedBlurView animatedProps={animatedBlurProps} tint="light" style={localStyles.fill} />
      </Animated.View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  backgroundContainer: {
    flexDirection: 'row',
    borderRadius: 35,
    zIndex: 5,
  },
  difficultyLabel: {
    fontSize: 15,
    color: Palette.baseGray80,
    textAlign: 'center',
    fontFamily: 'GeneralSans-Semibold',
  },
  highlightedCellBlurContent: {
    zIndex: 1,
    alignSelf: 'center',
    position: 'absolute',
  },
  highlightedCellContent: {
    zIndex: 1,
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: Palette.background,
    borderRadius: 35,
  },
  labelContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    flexDirection: 'row',
    gap: 5,
  },
  shadow: {
    shadowColor: 'rgba(104, 104, 104, 0.20)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 24.2,
    elevation: 24.2,
  },
});

export { SegmentedControl };
