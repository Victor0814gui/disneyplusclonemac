import React, { useCallback } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../theme';
import { ROUTES_NAMES } from '../../routes';

import { GradientHeader } from "./components/gradient-header";

import DisneyPlusLogoSvg from '../../assets/original.svg';
import StarSvg from '../../assets/star.svg';
import HomeSvg from '../../assets/home.svg';
import MovieSvg from '../../assets/movie.svg';
import SeriesSvg from '../../assets/series.svg';
import SearchSvg from '../../assets/search.svg';
import PlusSvg from '../../assets/plus.svg';
import { ButtonHeader } from './components/button-header';

export function Header() {
  const navigation = useNavigation();

  const handlerNavigateSearchScreen = useCallback(() => {
    navigation.navigate(ROUTES_NAMES.searchScreen);
  }, []);

  const handlerNavigateHomeScreen = useCallback(() => {
    navigation.navigate(ROUTES_NAMES.homeScreen);
  }, []);

  const handlerNavigateWatchListScreen = useCallback(() => {
    navigation.navigate(ROUTES_NAMES.watchListScreen);
  }, []);

  const handlerNavigateOriginalsScreen = useCallback(() => {
    navigation.navigate(ROUTES_NAMES.originalsScreen);
  }, []);

  const handlerNavigateMoviesScreen = useCallback(() => {
    navigation.navigate(ROUTES_NAMES.moviesScreen);
  }, []);

  const handlerNavigateSeriesScreen = useCallback(() => {
    navigation.navigate(ROUTES_NAMES.seriesScreen);
  }, []);

  return (
    <>
      <GradientHeader />
      <View style={styles.header}>
        <DisneyPlusLogoSvg style={styles.logo} />
        <View style={styles.headerContent}>
          <ButtonHeader
            label="HOME"
            onPress={handlerNavigateHomeScreen}
            style={styles.headerButton}
            icon={HomeSvg}
          />
          <ButtonHeader
            label="SEARCH"
            onPress={handlerNavigateSearchScreen}
            style={styles.headerButton}
            icon={SearchSvg}
          />
          <ButtonHeader
            label="WATCHLIST"
            onPress={handlerNavigateWatchListScreen}
            style={styles.headerButton}
            icon={PlusSvg}
          />
          <ButtonHeader
            label="ORIGINALS"
            onPress={handlerNavigateOriginalsScreen}
            style={styles.headerButton}
            icon={StarSvg}
          />
          <ButtonHeader
            label="MOVIES"
            onPress={handlerNavigateMoviesScreen}
            style={styles.headerButton}
            icon={MovieSvg}
          />
          <ButtonHeader
            label="SERIES"
            onPress={handlerNavigateSeriesScreen}
            style={styles.headerButton}
            icon={SeriesSvg}
          />
        </View>
        <View style={styles.profile}>
          <Text style={styles.profileText}>My Profile</Text>
          <View style={styles.avatar} />
        </View>
      </View>
    </>
  );
}

const ProfileAvatarSize = 46;
const styles = StyleSheet.create({
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
});
