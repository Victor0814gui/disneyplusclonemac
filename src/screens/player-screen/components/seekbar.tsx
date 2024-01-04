import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Pressable } from 'react-native-windows';


type SeekbarPros = {
  duration: number;
  progress: number;
}

export function Seekbar({ duration, progress }: SeekbarPros) {
  const backgroundSize = duration - progress;

  const minutes = Math.floor(progress / 60);
  const seconds = Math.floor(progress % 60);

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');


  return (
    <>
      <View style={styles.container}>
        <View style={[styles.progress, { flex: progress }]} />
        <View style={styles.circle} />
        <View style={[styles.background, { flex: backgroundSize }]} />
        <View style={styles.containerTime}>
          <Text style={styles.text}>{formattedMinutes}:{formattedSeconds}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 4,
    flexDirection: "row",
    width: "100%",
    marginVertical: 31
  },
  progress: {
    backgroundColor: "#00E676",
    height: 4
  },
  circle: {
    width: 4,
    height: 10,
    // borderRadius: 2,
    backgroundColor: "#f2f2f2",
    alignSelf: "center",
  },
  background: {
    backgroundColor: "#232323", height: 4
  },
  containerTime: {
    width: 40,
    height: 40,
  },
  text: {
    color: "#f2f2f2",
  }
});
