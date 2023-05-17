import React, {useEffect, useState} from 'react';

import {View, Text, Image, Linking, Animated, StyleSheet} from 'react-native';

import DisneyPlusLogoSvg from '../assets/original.svg';
import {Input} from '../components/input';
import {ButtonCheckin} from '../components/button-checkin';
import DisneyPlusBackgroundRadialGradient from '../assets/background-radial-gradient.svg';
import {Header} from '../components/header';

export default function CheckoutSession() {
  const [URLIsOpen, setURLIsOpen] = useState(false);
  useEffect(() => {
    if (!URLIsOpen) {
      Linking.openURL('https://www.disneyplus.com/');
      setURLIsOpen(true);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <Image
        style={styles.background}
        resizeMode="cover"
        source={DisneyPlusBackgroundRadialGradient}
      />
      <Text style={styles.title}>
        Conclua a sua assinatura no seu navegador
      </Text>
      <Text style={styles.subtitle}>
        Em seguida, o aplicativo será atualizado automaticamente
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1c29',
    alignItems: 'flex-start',
    paddingTop: 71,
    paddingHorizontal: 61,
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 12,
    color: '#f9f9f9',
    marginTop: '12%',
  },
  subtitle: {
    fontSize: 12,
    color: '#ebecec',
    marginVertical: 21,
    fontWeight: '500',
    textAlign: 'center',
  },
});
