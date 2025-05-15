import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';
import { useCallback, useEffect, useRef, useState } from 'react';
import { View, Modal, TouchableOpacity, FlatList, useWindowDimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles';
import RecentBox from '../recentBox';
import SearchHead from '../searchHead';
import SearchImage from '../searchImage';
import SearchTagList from '../searchTagList';
import SelectModeBottomOptions from '../selectModeBottomOptions';

import { AddTagsSheet, DeleteConfirmSheet, MoveFolderSheet } from '@/features/search';
import useAnimatedAppearance from '@/shared/lib/hooks/useAnimatedAppearance';
import { colors } from '@/shared/lib/theme';
import { Typography } from '@/shared/ui';

// icons
import ChevronLeftSmallIcon from '@/shared/ui/Icons/ChevronLeftSmall';
import CloseIcon from '@/shared/ui/Icons/Close';
import { SearchInput } from '@/widgets/search';

const recents = [
  {
    id: 1,
    txt: '“Rabbit” 116',
    img: 'https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    txt: '“Rabbit” 116',
    img: 'https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    txt: '“Rabbit” 116',
    img: 'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    txt: '“Rabbit” 116',
    img: 'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    txt: '“Rabbit” 116',
    img: 'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    txt: '“Rabbit” 116',
    img: 'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    txt: '“Rabbit” 116',
    img: 'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 8,
    txt: '“Rabbit” 116',
    img: 'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 9,
    txt: '“Rabbit” 116',
    img: 'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 10,
    txt: '“Rabbit” 116',
    img: 'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 11,
    txt: '“Rabbit” 116',
    img: 'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

type SearchModalProps = {
  visible: boolean;
  setIsVisibleSearchModal: (value: boolean) => void;
};

const SearchModal = (props: SearchModalProps) => {
  const { setIsVisibleSearchModal, visible } = props;
  const { top } = useSafeAreaInsets();
  const { width: deviceWidth } = useWindowDimensions();
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const itemWidth = (deviceWidth - 48) / 3; // 48 = outer padding and inner margin between elements
  const confirmDeleteSheetRef = useRef<BottomSheetModal>(null);
  const addTagsSheetRef = useRef<BottomSheetModal>(null);
  const moveFolderSheetRef = useRef<BottomSheetModal>(null);
  const { animatedStyle } = useAnimatedAppearance(visible);

  const toggleItemSelection = useCallback((id: number) => {
    setSelectedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  useEffect(() => {
    if (!isSelectMode) setSelectedItems([]);
  }, [isSelectMode]);

  const renderRecentItem = useCallback((item: (typeof recents)[number]) => {
    return <RecentBox img={item.img} txt={item.txt} onPress={() => {}} />;
  }, []);

  const renderResultItem = useCallback(
    (item: (typeof recents)[number]) => {
      return (
        <SearchImage
          img={item.img}
          onPress={isSelectMode ? () => toggleItemSelection(item.id) : undefined}
          width={itemWidth}
          isSelected={selectedItems.includes(item.id)}
        />
      );
    },
    [selectedItems, isSelectMode]
  );

  const onDeletePress = useCallback(() => {
    setIsVisibleSearchModal(false);
    confirmDeleteSheetRef?.current?.present();
  }, []);
  const onAddTagsPress = useCallback(() => {
    setIsVisibleSearchModal(false);
    addTagsSheetRef?.current?.present();
  }, []);
  const onMoveFolderPress = useCallback(() => {
    setIsVisibleSearchModal(false);
    moveFolderSheetRef?.current?.present();
  }, []);
  const onSheetClose = useCallback(() => {
    setIsVisibleSearchModal(true);
    setIsSelectMode(false);
  }, []);

  return (
    <>
      <Modal
        visible={visible}
        onRequestClose={() => setIsVisibleSearchModal(false)}
        animationType="fade"
        transparent>
        <Animated.View style={[{ flex: 1 }, animatedStyle]}>
          <BlurView style={{ flex: 1 }} intensity={50} experimentalBlurMethod="dimezisBlurView">
            <View style={[styles.overlay, { paddingTop: top }]}>
              <FlatList
                data={!isSearchMode ? recents : null}
                numColumns={3}
                contentContainerStyle={[
                  {
                    flexGrow: 1,
                    paddingBottom: 140,
                  },
                ]}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ paddingHorizontal: 16 }}
                renderItem={({ item }) => renderResultItem(item)}
                ListHeaderComponent={
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 16,
                        height: 30,
                      }}>
                      {isSearchMode && (
                        <TouchableOpacity
                          style={styles.closeBtn}
                          onPress={() => setIsSearchMode(false)}>
                          <ChevronLeftSmallIcon stroke={colors.primary.black} />
                        </TouchableOpacity>
                      )}
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 16,
                      }}>
                      <Typography align="left" color="black" font="semibold" size={34}>
                        Search
                      </Typography>
                      <TouchableOpacity
                        style={styles.closeBtn}
                        onPress={() => setIsVisibleSearchModal(false)}>
                        <CloseIcon fill={colors.primary.black} />
                      </TouchableOpacity>
                    </View>
                    {isSearchMode ? (
                      <>
                        <View
                          style={[{ marginTop: 12, paddingHorizontal: 16 }, styles.spaceBetween]}>
                          <Typography align="left" color="black" font="medium" size={16}>
                            Recents
                          </Typography>
                          <TouchableOpacity onPress={() => {}}>
                            <Typography align="left" color="black" font="medium" size={16}>
                              Clear
                            </Typography>
                          </TouchableOpacity>
                        </View>
                        <FlatList
                          data={recents}
                          renderItem={({ item }) => renderRecentItem(item)}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                          contentContainerStyle={{
                            marginTop: 12,
                            paddingHorizontal: 16,
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <View
                          style={[{ marginTop: 12, paddingHorizontal: 16 }, styles.spaceBetween]}>
                          <Typography align="left" color="black" font="medium" size={16}>
                            Folders
                          </Typography>
                        </View>
                        <FlatList
                          data={recents}
                          renderItem={({ item }) => renderRecentItem(item)}
                          showsHorizontalScrollIndicator={false}
                          contentContainerStyle={{
                            marginTop: 12,
                            paddingHorizontal: 16,
                          }}
                          horizontal
                        />
                        <SearchHead isSelectMode={isSelectMode} setIsSelectMode={setIsSelectMode} />
                      </>
                    )}
                  </>
                }
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                }}>
                {isSelectMode ? (
                  <SelectModeBottomOptions
                    countSelectedPhotos={selectedItems.length}
                    onPressAddTags={() => onAddTagsPress()}
                    onPressDelete={() => onDeletePress()}
                    onPressMoveToFolder={() => onMoveFolderPress()}
                  />
                ) : (
                  <View style={{ flexDirection: 'column' }}>
                    <SearchTagList />
                    <SearchInput
                      onKeyBoardVisibleChange={(visible) => {
                        setIsSearchMode(visible);
                      }}
                    />
                  </View>
                )}
              </View>
            </View>
          </BlurView>
        </Animated.View>
      </Modal>
      <DeleteConfirmSheet
        ref={confirmDeleteSheetRef}
        selectedItems={selectedItems}
        onSheetClose={onSheetClose}
      />
      <AddTagsSheet ref={addTagsSheetRef} onSheetClose={onSheetClose} />
      <MoveFolderSheet ref={moveFolderSheetRef} onSheetClose={onSheetClose} />
    </>
  );
};

export default SearchModal;
