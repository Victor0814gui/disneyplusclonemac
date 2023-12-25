import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import EyeSvg from '../assets/eye.svg';
import EyeHiddenSvg from '../assets/eye-hidden.svg';

import { ButtonCircularDefault } from './button-circular-default';

export type InputProps = {
  inputDataSecret?: boolean;
} & TextInputProps;

export function Input({ inputDataSecret = false, ...rest }: InputProps) {
  const [textSecret, setTextSecret] = React.useState(false);
  return (
    <View style={styles.container}>
      {inputDataSecret && (
        <View
          style={[styles.containerIcon, { backgroundColor: 'transparent' }]}
        />
      )}
      <TextInput
        {...rest}
        clearButtonMode="never"
        style={styles.input}
        verticalAlign="middle"
        textAlign="center"
        secureTextEntry={textSecret}
      />
      {inputDataSecret && (
        <ButtonCircularDefault
          onPress={() => setTextSecret(!textSecret)}
          defaultColor="#40424a"
          hoveredColor="#f9f9f9"
          labelColor="#c6c6c7"
          labelHoveredColor="#171717">
          {textSecret ? (
            <EyeSvg fill={'#cacaca'} style={styles.icon} />
          ) : (
            <EyeHiddenSvg fill={'#cacaca'} style={styles.icon} />
          )}
        </ButtonCircularDefault>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    width: 410,
    padding: 8,
    borderRadius: 3,
    borderColor: '#f0eeee',
    backgroundColor: '#474953',
    marginHorizontal: 12,
  },
  containerIcon: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#3d434e',
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#cacaca',
    height: 16,
    width: 16,
  },
});
