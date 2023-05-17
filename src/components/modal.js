import React from 'react';
import { View,Text,PlatformColor,StyleSheet } from 'react-native';



export function Modal() {
  return (
    <View style={styles.container}>

    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:   PlatformColor('SystemControlBackgroundAccentRevealBorderBrush',["red"]),
    // opacity: 0.1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})