import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Video from 'react-native-video';

import {ROUTES_NAMES} from '../routes';
import {Page} from '../components/page';

import SplashScreenVideoMP4 from '../assets/splash.mp4';

export const SplashScreen = ({navigation}: any) => {
  const onEnd = () => {
    navigation.navigate(ROUTES_NAMES.welcomeScreen);
  };

  const onError = () => {
    navigation.navigate(ROUTES_NAMES.welcomeScreen);
  };

  const imagePath = Image.resolveAssetSource(require('../assets/splash.mp4'));
  console.log({imagePath});

  return (
    <Page>
      <Video
        focusable={false}
        accessible={false}
        playInBackground={false}
        paused={false}
        source={SplashScreenVideoMP4}
        style={styles.video}
        controls={false}
        onEnd={onEnd}
        onError={onError}
        resizeMode="cover"
      />
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1C28',
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});
