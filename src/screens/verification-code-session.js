import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';

import {ButtonCheckin} from '../components/button-checkin';

import DisneyPlusLogoSvg from '../assets/original.svg';
import {Toast} from '../components/toast';
import {Header} from '../components/header';

export function VerificationCodeSession({navigation}) {
  const useRefList = React.useRef([]);
  return (
    <View style={styles.container}>
      <Header />
      {/* <Image
        style={styles.logo}
        resizeMode="contain"
        source={DisneyPlusLogoSvg}
      /> */}
      <DisneyPlusLogoSvg style={styles.logo} />
      <Text style={styles.title}>Confirme o seu e-mail</Text>
      <Text style={styles.subtitle}>
        Precisamos verificar seu endereço de email. Enviamos um email para
        {'\n'}asdfdsf@gmail.com com o codigo de 6 digitos que expira em 15
        minutos. Digite esse{'\n'}código abaixo.
      </Text>
      <View style={styles.inputsContainer}>
        <TextInput
          textContentType="telephoneNumber"
          style={styles.input}
          placeholder="0"
          maxLength={1}
          inputMode="numeric"
          textAlign="center"
          ref={e => (useRefList.current[0] = e)}
          onChange={e => {
            if (useRefList.current[1].value > 1) {
              useRefList.current[1].focus();
            }
          }}
        />
        <TextInput
          textContentType="telephoneNumber"
          style={styles.input}
          placeholder="0"
          maxLength={1}
          inputMode="numeric"
          textAlign="center"
          ref={e => (useRefList.current[1] = e)}
        />
        <TextInput
          textContentType="telephoneNumber"
          style={styles.input}
          placeholder="0"
          maxLength={1}
          inputMode="numeric"
          textAlign="center"
          ref={e => (useRefList.current[2] = e)}
        />
        <TextInput
          textContentType="telephoneNumber"
          style={styles.input}
          placeholder="0"
          maxLength={1}
          inputMode="numeric"
          textAlign="center"
          ref={e => (useRefList.current[3] = e)}
        />
        <TextInput
          textContentType="telephoneNumber"
          style={styles.input}
          placeholder="0"
          maxLength={1}
          inputMode="numeric"
          textAlign="center"
          ref={e => (useRefList.current[4] = e)}
        />
        <TextInput
          textContentType="telephoneNumber"
          style={styles.input}
          placeholder="0"
          maxLength={1}
          inputMode="numeric"
          textAlign="center"
          ref={e => (useRefList.current[5] = e)}
        />
      </View>
      <View style={{width: 320}}>
        <View style={{marginTop: 51, marginBottom: 8}}>
          <ButtonCheckin
            label="CONTINUAR"
            onPress={() => navigation.navigate('SignInStepTwo')}
          />
        </View>
        <ButtonCheckin
          defaultColor="#40424a"
          hoveredColor="#f9f9f9"
          labelColor="#c6c6c7"
          labelHoveredColor="#171717"
          label="REENVIAR E-MAIL"
        />
      </View>
      {/* <Modal/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#1a1d27',
  },
  logo: {
    height: 150,
    width: 150,
    maxWidth: '100%',
    marginTop: 91,
  },
  title: {
    fontSize: 34,
    fontWeight: '600',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#bdbdbe',
    marginBottom: 38,
    textAlign: 'center',
  },
  inputsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#ffffff',
  },
  input: {
    backgroundColor: '#1a1d27',
    borderColor: '#1a1d27',
    margin: 3,
    height: 70,
    fontSize: 42,
    textAlign: 'center',
  },
});
