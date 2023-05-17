import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export function Input({inputDataSecret = false, ...rest}) {
  return (
    <View style={styles.container}>
      {inputDataSecret && (
        <View
          style={[
            styles.containerIcon,
            {backgroundColor: 'transparent'},
          ]}></View>
      )}
      <TextInput
        {...rest}
        clearButtonMode="never"
        style={styles.input}
        verticalAlign="middle"
        textAlign="center"
        secureTextEntry={inputDataSecret}
      />
      {inputDataSecret && <View style={styles.containerIcon}></View>}
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
  },
  containerIcon: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#3d434e',
    marginLeft: 12,
  },
});
