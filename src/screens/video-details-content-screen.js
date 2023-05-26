import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  ScrollView,
  SectionList,
} from 'react-native';

import DisneyPlusLogoSvg from '../assets/original.svg';
import StarSvg from '../assets/star.svg';
import SearchSvg from '../assets/search.svg';
import PlusSvg from '../assets/plus.svg';
import {Toast} from '../components/toast';
import {ListItems} from '../components/list-items';

const DATA = [
  {
    i: 0,
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto', 'Fried Shrimps', 'Fried Shrimps'],
  },
  {
    i: 1,
    title: 'Sides',
    data: [
      'French Fries',
      'Onion Rings',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
    ],
  },
  {
    i: 2,
    title: 'Drinks',
    data: [
      'Water',
      'Coke',
      'Beer',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
    ],
  },
  {
    i: 3,
    title: 'Desserts',
    data: [
      'Cheese Cake',
      'Ice Cream',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
    ],
  },
  {
    i: 4,
    title: 'Desserts',
    data: [
      'Cheese Cake',
      'Ice Cream',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
    ],
  },
  {
    i: 5,
    title: 'Desserts',
    data: [
      'Cheese Cake',
      'Ice Cream',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
      'Fried Shrimps',
    ],
  },
];

export function VideoDetailsContentScreen() {
  const {width} = useWindowDimensions();
  const renderBanners = () => (
    <View style={[styles.banner, {width: width - 100}]} />
  );

  const renderItem = ({item: asdf, index}) => (
    <View style={[styles.item, index === 0 && {marginLeft: 51}]} />
  );

  const keyExtractor = item => `${item}`;

  return (
    <View style={styles.container}>
      <Toast />
      <View style={styles.header}>
        <DisneyPlusLogoSvg style={styles.logo} />
        <View style={styles.headerContent}>
          <View style={styles.headerButton}>
            <StarSvg fill="#ffffff" style={styles.icon} />
            <Text style={styles.headerButtonText}>ORIGINALS</Text>
          </View>
          <View style={styles.headerButton}>
            <SearchSvg fill="#ffffff" style={styles.icon} />
            <Text style={styles.headerButtonText}>SEARCH</Text>
          </View>
          <View style={styles.headerButton}>
            <PlusSvg fill="#ffffff" style={styles.icon} />
            <Text style={styles.headerButtonText}>WATCHLIST</Text>
          </View>
          <View style={styles.headerButton}>
            <StarSvg fill="#ffffff" style={styles.icon} />
            <Text style={styles.headerButtonText}>ORIGINALS</Text>
          </View>
          <View style={styles.headerButton}>
            <SearchSvg fill="#ffffff" style={styles.icon} />
            <Text style={styles.headerButtonText}>SEARCH</Text>
          </View>
          <View style={styles.headerButton}>
            <PlusSvg fill="#ffffff" style={styles.icon} />
            <Text style={styles.headerButtonText}>WATCHLIST</Text>
          </View>
        </View>
        <View style={styles.profile}>
          <Text style={styles.profileText}>My Profile</Text>
          <View style={styles.avatar} />
        </View>
      </View>
      <View style={styles.content}>
        <SectionList
          contentContainerStyle={styles.contentListContainer}
          sections={DATA}
          keyExtractor={(item, index) => `${index}`}
          renderItem={() => null}
          renderSectionHeader={({section: {title, data, i, key}}) => (
            <>
              {i > 0 && <Text style={styles.itemText}>{title}</Text>}
              {i === 0 ? (
                <FlatList
                  style={styles.bannerContainer}
                  data={data}
                  renderItem={renderBanners}
                  keyExtractor={() => key}
                  horizontal
                  centerContent
                  zoomScale={1}
                  scrollEnabled={false}
                  showsHorizontalScrollIndicator={false}
                />
              ) : (
                <ListItems data={data} i={key} />
              )}
            </>
          )}
        />
      </View>
    </View>
  );
}

const ProfileAvatarSize = 46;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 21,
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 80,
  },
  headerContent: {
    marginLeft: 41,
    flexDirection: 'row',
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 21,
  },
  headerButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  icon: {
    height: 18,
    width: 18,
    marginRight: 4,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  avatar: {
    height: ProfileAvatarSize,
    width: ProfileAvatarSize,
    borderRadius: ProfileAvatarSize / 2,
    backgroundColor: '#ffffff',
  },
  profileText: {
    marginRight: 12,
    fontSize: 15,
    fontWeight: '400',
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
