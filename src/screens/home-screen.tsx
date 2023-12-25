import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  SectionList,
} from 'react-native-windows';

import { ListItems } from '../components/list-items';
import { SeriesAndFilms } from "../utils/series-and-films";
import { Header } from '../components/header';
import { Page } from '../components/page';


export function HomeScreen({ navigation }: any) {
  const { width } = useWindowDimensions();
  const renderBanners = () => (
    <View style={[styles.banner, { width: width - 100 }]} />
  );

  return (
    <Page>
      <Header />
      <View style={styles.content}>
        <SectionList
          contentContainerStyle={styles.contentListContainer}
          sections={SeriesAndFilms}
          keyExtractor={(item, index) => `${index}`}
          renderItem={() => null}
          renderSectionHeader={({ section: { title, data, i, key } }) => (
            <>
              {i > 0 && <Text style={styles.itemText}>{title}</Text>}
              {i === 0 ? (
                <FlatList
                  style={styles.bannerContainer}
                  data={data}
                  renderItem={renderBanners}
                  keyExtractor={() => `${key}`}
                  horizontal
                  centerContent
                  zoomScale={1}
                  showsHorizontalScrollIndicator={false}
                  scrollEnabled={false}
                />
              ) : (
                <ListItems data={data} i={key} />
              )}
            </>
          )}
        />
      </View>
    </Page>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentListContainer: {
    paddingBottom: 31,
  },
  bannerContainer: {
    maxHeight: 300,
  },
  banner: {
    backgroundColor: '#333333',
    borderRadius: 21,
    height: 300,
    marginHorizontal: 21,
  },
  itemContainer: {
    marginBottom: 8,
  },
  item: {
    height: 140,
    borderRadius: 16,
    width: 220,
    marginHorizontal: 12,
    backgroundColor: '#333333',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 16,
    marginLeft: 51,
  },
});
