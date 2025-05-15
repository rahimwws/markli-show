import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { isAxiosError } from 'axios';
import { MutableRefObject, forwardRef, useMemo, useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';
import Created from '../created';
import SelectColor from '../selectColor';
import SelectIcon from '../selectIcon';

import { emojiList, iconList, useFolderStore } from '@/entities/creator';
import { useCreateFolder } from '@/features/creator';
import { useToast } from '@/shared/lib';
import { colors } from '@/shared/lib/theme';
import { Input, LargeButton, Sheet, Typography } from '@/shared/ui';
// icons
import ArrowRightIcon from '@/shared/ui/Icons/ArrowRight';
import CloseIcon from '@/shared/ui/Icons/Close';

const CreateFolder = forwardRef<BottomSheetModal>(({ ...props }, ref) => {
  const { showToast } = useToast();
  const createdRef = useRef<BottomSheetModal>(null);
  const selectColorRef = useRef<BottomSheetModal>(null);
  const selectIconRef = useRef<BottomSheetModal>(null);
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000000');
  const [iconID, setIconID] = useState<number>(1);
  const [isEmoji, setIsEmoji] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const { createFolder } = useFolderStore();

  const { mutate: createFolderApi, isPending: isCreatingFolder } = useCreateFolder();

  const onSubmit = () => {
    if (!name.trim()) {
      setNameErrorMessage('Folder name is required');
      return null;
    }

    createFolderApi(
      {
        color,
        icon: String(iconID),
        name,
      },
      {
        onSuccess(res) {
          createFolder({
            color,
            iconID,
            id: res.data.id,
            isIconEmoji: isEmoji,
            name,
          });
          onClose();
          createdRef.current?.present();
          setNameErrorMessage('');
        },
        onError: (error) => {
          onClose();
          if (isAxiosError(error)) {
            showToast(error.response?.data.message, 'error');
          } else {
            showToast('Something went wrong, try later', 'error');
          }
        },
      }
    );
  };

  const onClose = () => {
    (ref as MutableRefObject<BottomSheetModal>)?.current?.dismiss();
  };

  const onPressDone = () => {
    setName('');
    setIconID(1);
    setIsEmoji(false);
    setColor('#000000');
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
        enableDynamicSizing={false}
        style={{ backgroundColor: colors.background.secondary }}
        enablePanDownToClose={false}>
        <View style={styles.container}>
          <View style={styles.justifySpaceBetween}>
            <Typography size={17} font="semibold" color="black">
              Create New Folder
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
            value={name}
            isInvalid={!!nameErrorMessage}
            returnKeyType="none"
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
            {!isEmoji && <View style={styles.divider} />}
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
        </View>
        <View style={styles.largeBtnWrap}>
          <LargeButton
            styles={styles.largeBtn}
            text="Create"
            action={() => onSubmit()}
            disabled={!name.trim() || isCreatingFolder}
          />
        </View>
      </Sheet>
      <Created
        ref={createdRef}
        txt="Congratulations! Your folder has been created successfully!"
        name={name}
        onPressDone={onPressDone}
        icon={
          isEmoji && SelectedEmoji?.emoji ? (
            <Typography>{SelectedEmoji?.emoji}</Typography>
          ) : (
            !!SelectedIcon && (
              <SelectedIcon.icon
                fill={SelectedIcon.id === 1 ? 'transparent' : color}
                stroke={SelectedIcon.id === 1 ? color : undefined}
              />
            )
          )
        }
      />
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

export default CreateFolder;
