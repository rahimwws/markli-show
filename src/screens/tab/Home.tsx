import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Layout } from '@/shared/ui';
import {
  CreateSheet,
  Folders,
  HomeHeader,
  LastScreenshots,
  SearchInput,
  Tags,
} from '@/widgets/home';
import { SearchModal } from '@/widgets/search';

export default function Home() {
  const insets = useSafeAreaInsets();
  const bottomRef = useRef<BottomSheetModal>(null);
  const [isVisibleSearchModal, setIsVisibleSearchModal] = useState(false);
  return (
    <>
      <SearchModal
        setIsVisibleSearchModal={setIsVisibleSearchModal}
        visible={isVisibleSearchModal}
      />
      <Layout showPx={false} pt={0}>
        <LinearGradient
          colors={['#F8F5F4', '#F1F7FF', '#F8F4F2']}
          locations={[0.0387, 0.3336, 0.6298]}
          style={{ paddingTop: insets.top, flex: 1, width: '100%', alignItems: 'center' }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.1, y: 1 }}>
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: insets.bottom }}>
            <CreateSheet ref={bottomRef} />
            <HomeHeader onPress={() => bottomRef.current?.present()} />
            {/* <SpaceTabs /> */}
            <SearchInput onPress={() => setIsVisibleSearchModal(true)} />
            <LastScreenshots />
            <Folders />
            <Tags />
          </ScrollView>
        </LinearGradient>
      </Layout>
    </>
  );
}
