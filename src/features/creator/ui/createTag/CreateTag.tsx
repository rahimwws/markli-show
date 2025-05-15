import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { MutableRefObject, forwardRef, useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';
import Created from '../created';

import { useTagStore } from '@/entities/creator';
import { colors } from '@/shared/lib/theme';
import { Input, LargeButton, Sheet, Typography } from '@/shared/ui';
// icons
import CloseIcon from '@/shared/ui/Icons/Close';

const CreateTag = forwardRef<BottomSheetModal>(({ ...props }, ref) => {
  const createdRef = useRef<BottomSheetModal>(null);
  const [name, setName] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const { createTag } = useTagStore();

  const onSubmit = () => {
    if (!name.trim()) {
      setNameErrorMessage('Tag name is required');
      return null;
    }

    createTag({
      id: 1,
      name,
    });

    onClose();
    createdRef.current?.present();
    setNameErrorMessage('');
  };

  const onPressDone = () => {
    setName('');
  };

  const onClose = () => {
    (ref as MutableRefObject<BottomSheetModal>)?.current?.dismiss();
  };

  return (
    <>
      <Sheet
        ref={ref}
        sizes={['22%']}
        keyboardBehavior="interactive"
        enableDynamicSizing={false}
        style={{ backgroundColor: colors.background.secondary }}
        enablePanDownToClose={false}>
        <View style={styles.container}>
          <View style={styles.justifySpaceBetween}>
            <Typography size={17} font="semibold" color="black">
              Create New Tag
            </Typography>
            <TouchableOpacity style={styles.closeBtn} onPress={() => onClose()}>
              <CloseIcon fill={colors.primary.white} />
            </TouchableOpacity>
          </View>
          <Input
            isBottomSheet
            placeholder="Tag name"
            startContent={<Typography color="gray">#</Typography>}
            containerStyle={{ marginTop: 16, marginBottom: nameErrorMessage ? 0 : 10 }}
            inputContainerStyle={[
              styles.inputWrapper,
              !!nameErrorMessage && { borderColor: colors.accent.red },
            ]}
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
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
        </View>
        <View style={styles.largeBtnWrap}>
          <LargeButton
            styles={styles.largeBtn}
            text="Create"
            action={() => onSubmit()}
            disabled={!name.trim()}
          />
        </View>
      </Sheet>
      <Created
        ref={createdRef}
        txt="Congratulations! Your tag has been created successfully!"
        onPressDone={onPressDone}
      />
    </>
  );
});

export default CreateTag;
