import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, useWindowDimensions, ScrollView, Pressable } from 'react-native';
import { TabView, SceneMap, TabBarProps } from 'react-native-tab-view';

import styles from './styles';
import CreateSheet from '../createSheet/CreateSheet';

import { useSpacesStore } from '@/entities/user';
import { colors } from '@/shared/lib/theme';
import { SmallButton, Typography } from '@/shared/ui';
// icons
import PlusIcon from '@/shared/ui/Icons/Plus';

const SpaceTabs = () => {
  const { spaces, initializeSpaces } = useSpacesStore();
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState<{ key: string; title: string }[]>([]);
  const layout = useWindowDimensions();
  const bottomRef = useRef<BottomSheetModal>(null);

  useLayoutEffect(() => {
    initializeSpaces();
  }, []);

  useEffect(() => {
    if (spaces.length)
      setRoutes(
        spaces.map((space) => ({
          key: space.id,
          title: space.name,
        }))
      );
  }, [spaces]);

  const renderScene = SceneMap(
    spaces.reduce(
      (acc, space) => {
        acc[space.id] = () => (
          <View style={{ flex: 1 }}>
            <Typography>Content for {space.name}</Typography>
          </View>
        );
        return acc;
      },
      {} as Record<string, React.ComponentType<object>>
    )
  );

  const renderTabBar = (props: TabBarProps<{ key: string; title: string }>) => {
    const { navigationState, jumpTo } = props;
    const { index: activeIndex, routes } = navigationState;

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 50 }}>
        {routes.map((route, i) => {
          const isActive = i === activeIndex;
          return (
            <Pressable
              key={route.key}
              style={[styles.tabStyle, isActive && styles.tabStyle_active]}
              onPress={() => jumpTo(route.key)}>
              <Typography size={17} font="semibold" color={isActive ? 'black' : 'light_gray'}>
                {route.title}
              </Typography>
            </Pressable>
          );
        })}
      </ScrollView>
    );
  };

  if (!routes.length) return null;

  return (
    <>
      <View style={styles.container}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          swipeEnabled
          initialLayout={{ width: layout.width }}
        />
        <View style={styles.btnWrapper}>
          <SmallButton
            textColor="gray"
            bg="primary"
            icon={<PlusIcon width={16} height={16} stroke={colors.primary.gray} />}
            action={() => bottomRef.current?.present()}
          />
        </View>
      </View>
      <CreateSheet ref={bottomRef} />
    </>
  );
};

export default SpaceTabs;
