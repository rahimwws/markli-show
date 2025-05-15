import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { MutableRefObject, forwardRef, memo, useCallback, useState } from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { search } from '../../lib';

import { emojiList, iconList } from '@/entities/creator';
import { colors } from '@/shared/lib/theme';
import { Input, Sheet, Typography } from '@/shared/ui';
// icons
import CloseIcon from '@/shared/ui/Icons/Close';
import SearchIcon from '@/shared/ui/Icons/Search';

type SelectColorProps = {
  onSheetClose?: (isEmoji: boolean, iconID: number) => void;
};

const SelectIcon = forwardRef<BottomSheetModal, SelectColorProps>(
  ({ onSheetClose, ...props }, ref) => {
    const [iconID, setIconID] = useState<number>(1);
    const [isEmoji, setIsEmoji] = useState(false);
    const [filteredIcons, setFilteredIcons] = useState(iconList);
    const [filteredEmojies, setFilteredEmojies] = useState(emojiList);

    const onClose = () => {
      onSheetClose?.(isEmoji, iconID);
      (ref as MutableRefObject<BottomSheetModal>)?.current?.dismiss();
      setFilteredIcons(iconList);
      setFilteredEmojies(emojiList);
    };

    const onChangeText = useCallback((text: string) => {
      setFilteredIcons(search(iconList, text));
      setFilteredEmojies(search(emojiList, text));
    }, []);

    return (
      <>
        <Sheet
          ref={ref}
          sizes={['65%']}
          keyboardBehavior="interactive"
          enableDynamicSizing={false}
          style={{ backgroundColor: colors.background.secondary }}
          scrollViewProps={{
            showsVerticalScrollIndicator: false,
          }}
          enablePanDownToClose={false}>
          <View style={styles.container}>
            <View style={styles.justifySpaceBetween}>
              <Typography size={17} font="semibold" color="black">
                Choose an Icon
              </Typography>
              <TouchableOpacity style={styles.closeBtn} onPress={() => onClose()}>
                <CloseIcon fill={colors.primary.white} />
              </TouchableOpacity>
            </View>
            <Input
              startContent={<SearchIcon fill={colors.primary.gray} />}
              placeholder="Search"
              inputContainerStyle={styles.inputContainer}
              onChangeText={onChangeText}
            />
            <View style={styles.iconWrap}>
              {filteredIcons.map((IconItem) => {
                const isActive = IconItem.id === iconID;
                return (
                  <Pressable
                    key={IconItem.id}
                    style={[styles.iconBtn, isActive && { backgroundColor: colors.primary.black }]}
                    onPress={() => {
                      setIconID(IconItem.id);
                      setIsEmoji(false);
                    }}>
                    <IconItem.icon
                      fill={
                        IconItem.id == 1
                          ? 'transparent'
                          : isActive
                            ? colors.primary.white
                            : colors.primary.gray
                      }
                      stroke={
                        IconItem.id == 1
                          ? isActive
                            ? colors.primary.white
                            : colors.primary.gray
                          : undefined
                      }
                    />
                  </Pressable>
                );
              })}
            </View>
            {!!filteredEmojies.length && (
              <Typography
                styles={{ marginTop: 15 }}
                align="left"
                size={15}
                font="semibold"
                color={['text', 'secondary']}>
                EMOJI
              </Typography>
            )}
            <View style={styles.iconWrap}>
              {filteredEmojies.map((emojiItem) => {
                const isActive = emojiItem.id === iconID;
                return (
                  <Pressable
                    key={emojiItem.id}
                    style={[styles.emojiBtn, isActive && { backgroundColor: colors.primary.black }]}
                    onPress={() => {
                      setIconID(emojiItem.id);
                      setIsEmoji(true);
                    }}>
                    <Typography size={25}>{emojiItem.emoji}</Typography>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </Sheet>
      </>
    );
  }
);

export default memo(SelectIcon);
