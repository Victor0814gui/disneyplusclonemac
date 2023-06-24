import React, {useRef, useState} from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

import {ButtonDefault} from '../components/button-default';
import DisneyPlusLogoSvg from '../assets/original.svg';
import DisneyPlusBackgroundImage from '../assets/subscription-background-image.png';

export function SubsriptionScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={DisneyPlusBackgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        {/* <Image
          style={styles.logo}
          resizeMode="contain"
          source={DisneyPlusLogoSvg}
        /> */}
        <DisneyPlusLogoSvg style={[styles.logo]} />
        <Text style={styles.title}>
          Oi de novo! Parece que você não {'\n'}é assinante
        </Text>
        <Text style={styles.subtitle}>
          Você cancelou ou não renovou a assinatura?
        </Text>
        <ButtonDefault
          label="REATIVAR ASSINATURA"
          onPress={() => navigation.navigate('WelcomeScreen')}
        />
        <View
          style={{
            marginTop: 81,
          }}>
          <ButtonDefault
            defaultColor="#40424a"
            hoveredColor="#f9f9f9"
            labelColor="#c6c6c7"
            labelHoveredColor="#171717"
            label="SAIR"
            onPress={() => navigation.navigate('VideoDetailsContentScreen')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1c29',
    // paddingHorizontal: 71,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    // flex: 0,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 71,
    paddingTop: 41,
    maxWidth: 500,
  },
  logo: {
    height: 120,
    width: 120,
    maxWidth: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#bdbdbe',
    marginBottom: 38,
  },
  descriptionText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#bdbdbe',
    lineHeight: 16,
    marginTop: 12,
  },
});
