import React, { useRef, useState, useEffect, useCallback } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

import { Input } from '../components/input';
import { ButtonCheckin } from '../components/button-checkin';

import DisneyPlusLogoSvg from '../assets/original.svg';
import { ROUTES_NAMES } from '../routes';
import { Page } from '../components/page';

export function SignInStepTwo({ navigation }: any) {
  const [setText, text] = useState('');
  const animationScreen = useRef(new Animated.Value(0.8)).current;

  const animationEnter = useCallback(() => {
    Animated.timing(animationScreen, {
      toValue: 1,
      duration: 230,
      useNativeDriver: false,
    }).start();
  }, []);

  useEffect(() => {
    animationEnter();
  }, []);

  const handlerSubscriptionAccount = useCallback(() => {
    navigation.navigate(ROUTES_NAMES.subscriptionScreen);
  }, [])

  const handlerForgotPassword = useCallback(() => {
    navigation.navigate(ROUTES_NAMES.verificationCodeSession);
  }, [])

  return (
    <Page titlebar>
      <Animated.View
        style={[styles.container, { transform: [{ scale: animationScreen }] }]}>
        {/* <Image
        style={styles.logo}
        resizeMode="contain"
        source={DisneyPlusLogoSvg}
      /> */}
        <DisneyPlusLogoSvg style={[styles.logo]} />
        <Text style={styles.title}>Digite a senha</Text>
        <Text style={styles.subtitle}>
          Você usara esse email e senha para entrar na conta do Disney+ e assitir
          suas séries {'\n'}e filmes preferidos
        </Text>
        <View style={{ marginBottom: 31 }}>
          <Input inputDataSecret placeholder="Senha" />
        </View>
        <View style={{ width: 320, marginVertical: 8 }}>
          <ButtonCheckin
            onPress={handlerSubscriptionAccount}
          />
        </View>
        <View style={{ width: 320 }}>
          <ButtonCheckin
            defaultColor="#40424a"
            hoveredColor="#f9f9f9"
            labelColor="#c6c6c7"
            labelHoveredColor="#171717"
            label="ESQUECEU A SENHA?"
            onPress={handlerForgotPassword}
          />
        </View>
      </Animated.View>
    </Page>
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
