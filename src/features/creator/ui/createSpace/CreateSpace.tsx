import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { MutableRefObject, forwardRef, useMemo, useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';
import Created from '../created';
import SelectColor from '../selectColor';
import SelectIcon from '../selectIcon';

import { emojiList, iconList } from '@/entities/creator';
import { colors } from '@/shared/lib/theme';
import { Input, LargeButton, Sheet, Typography } from '@/shared/ui';
// icons
import ArrowRightIcon from '@/shared/ui/Icons/ArrowRight';
import CloseIcon from '@/shared/ui/Icons/Close';

const CreateSpace = forwardRef<BottomSheetModal>(({ ...props }, ref) => {
  const createdRef = useRef<BottomSheetModal>(null);
  const selectColorRef = useRef<BottomSheetModal>(null);
  const selectIconRef = useRef<BottomSheetModal>(null);
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000000');
  const [iconID, setIconID] = useState<number>(1);
  const [isEmoji, setIsEmoji] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const onSubmit = () => {
    if (!name.trim()) {
      setNameErrorMessage('Folder name is required');
      return null;
    }
    onClose();
    createdRef.current?.present();
    setNameErrorMessage('');
  };

  const onClose = () => {
    (ref as MutableRefObject<BottomSheetModal>)?.current?.dismiss();
  };

  const SelectedIcon = useMemo(() => {
    return iconList.find((iconItem) => iconID === iconItem.id);
  }, [iconID]);
  const SelectedEmoji = useMemo(() => {
    return emojiList.find((iconItem) => iconID === iconItem.id);
  }, [iconID]);

  return (
    <>
      <Sheet
        ref={ref}
        sizes={['50%']}
        keyboardBehavior="interactive"
        enableDynamicSizing={false}
        style={{ backgroundColor: colors.background.secondary }}
        enablePanDownToClose={false}>
        <View style={styles.container}>
          <View style={styles.justifySpaceBetween}>
            <Typography size={17} font="semibold" color="black">
              Create New Space
            </Typography>
            <TouchableOpacity style={styles.closeBtn} onPress={() => onClose()}>
              <CloseIcon fill={colors.primary.white} />
            </TouchableOpacity>
          </View>
          <Input
            isBottomSheet
            placeholder="Folder name"
            containerStyle={{ marginTop: 16, marginBottom: nameErrorMessage ? 0 : 10 }}
            inputContainerStyle={[
              styles.inputWrapper,
              !!nameErrorMessage && { borderColor: colors.accent.red },
            ]}
            style={styles.input}
            onChangeText={(text) => setName(text)}
            isInvalid={!!nameErrorMessage}
          />
          {!!nameErrorMessage && (
            <Typography
              styles={{ marginBottom: 15 }}
              align="left"
              size={12}
              color={['accent', 'red']}>
              {nameErrorMessage}
            </Typography>
          )}
          <View style={styles.btnWrap}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                selectIconRef.current?.present();
              }}>
              <Typography size={15} font="semibold" color="black">
                Icon
              </Typography>
              <View style={styles.btnRightContent}>
                {isEmoji ? (
                  <Typography size={18}>{SelectedEmoji?.emoji}</Typography>
                ) : (
                  SelectedIcon && (
                    <SelectedIcon.icon
                      fill={SelectedIcon.id === 1 ? 'transparent' : color}
                      stroke={SelectedIcon.id === 1 ? color : undefined}
                    />
                  )
                )}
                <ArrowRightIcon width={16} height={16} stroke={colors.primary.gray} />
              </View>
            </TouchableOpacity>
            <View style={styles.divider} />
            {!isEmoji && (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  selectColorRef.current?.present();
                }}>
                <Typography size={15} font="semibold" color="black">
                  Icon color
                </Typography>
                <View style={styles.btnRightContent}>
                  <View style={[{ backgroundColor: color }, styles.iconColor]} />
                  <ArrowRightIcon width={16} height={16} stroke={colors.primary.gray} />
                </View>
              </TouchableOpacity>
            )}
          </View>
          <LargeButton styles={styles.largeBtn} text="Create" action={() => onSubmit()} />
        </View>
      </Sheet>
      <Created ref={createdRef} txt="Congratulations! Your folder has been created successfully!" />
      <SelectColor
        ref={selectColorRef}
        onSheetClose={(color) => {
          (ref as MutableRefObject<BottomSheetModal>)?.current?.present();
          setColor(color || '#000');
        }}
      />
      <SelectIcon
        ref={selectIconRef}
        onSheetClose={(isEmoji, icon) => {
          (ref as MutableRefObject<BottomSheetModal>)?.current?.present();
          setIsEmoji(isEmoji);
          setIconID(icon);
        }}
      />
    </>
  );
});

export default CreateSpace;
