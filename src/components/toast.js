import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function Toast({type = '', text = 'Você está online.'}) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>!</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 21,
    backgroundColor: '#31343e',
    // backgroundColor: '#31343e',
    borderRadius: 25,
    position: 'absolute',
    top: 41,
    right: 41,
    zIndex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    // backgroundColor: '#ffb63f',
    backgroundColor: '#72D37E',

    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 17,
    color: '#31343e',
    fontWeight: '600',
    lineHeight: 20,
  },
  text: {
    fontWeight: '500',
  },
});
