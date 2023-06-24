import React, {useRef, useEffect} from 'react';

import {View, Text, Image, Pressable, Animated, StyleSheet} from 'react-native';

import DisneyPlusLogoSvg from '../assets/original.svg';
import {Input} from '../components/input';
import {ButtonCheckin} from '../components/button-checkin';
import {Header} from '../components/header';

export function SignInStepOne({navigation}) {
  const animationScreen = useRef(new Animated.Value(0.8)).current;

  const animationEnter = () => {
    Animated.timing(animationScreen, {
      toValue: 1,
      duration: 230,
      useNativeDriver: false, //
    }).start();
  };

  useEffect(() => {
    animationEnter();
  }, []);
  return (
    <Animated.View
      style={[styles.container, {transform: [{scale: animationScreen}]}]}>
      <DisneyPlusLogoSvg style={[styles.logo]} />
      <Text style={styles.title}>Use o seu e-mail para entrar</Text>
      <Text style={styles.subtitle}>
        Você usara esse email e senha para entrar na conta do Disney+ e assitir
        suas séries {'\n'}e filmes preferidos
      </Text>
      <View style={{marginBottom: 31}}>
        <Input placeholder={'digite seu email'} />
      </View>
      <View style={{width: 320, marginTop: 21}}>
        <ButtonCheckin onPress={() => navigation.navigate('SignInStepTwo')} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1c29',
    alignItems: 'center',
    paddingTop: 71,
  },
  logo: {
    height: 150,
    width: 150,
    maxWidth: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 12,
    color: '#f9f9f9',
  },
  subtitle: {
    fontSize: 12,
    color: '#ebecec',
    marginVertical: 21,
    fontWeight: '500',
    textAlign: 'center',
  },
});
