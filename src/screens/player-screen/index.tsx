import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Pressable } from 'react-native-windows';
import Video from "react-native-video";
import VideoMP4 from "../../assets/Mandalorian.mp4";
import { Page } from '../../components/page';
import { Seekbar } from "./components/seekbar";

export function PlayerScreen({ navigation }: any) {
  const { width, height } = useWindowDimensions();
  const [playing, setPlaying] = useState(true);
  const [videoInfo, setVideoInfo] = useState({ duration: 0, progress: 0 });

  const viewRef = useRef<View>(null);

  const onLoad = useCallback((e: any) => {
    console.log(e.nativeEvent.duration)
    setVideoInfo(prevState => ({ ...prevState, duration: e.nativeEvent.duration }));
  }, [videoInfo.duration]);

  const onEnd = useCallback(() => {
    console.log("Video ended");
  }, []);

  const onProgress = (e: any) => {
    setVideoInfo({ ...videoInfo, progress: e.nativeEvent.currentTime });
  }

  const handlerPauseAndPlay = useCallback(() => {
    setPlaying(prevState => !prevState);
  }, []);

  return (
    <Page titlebar>
      <Video
        source={VideoMP4}
        onLoad={onLoad}
        onEnd={onEnd}
        onProgress={onProgress}
        controls={false}
        paused={!playing}
        style={{ width, height }}
      />
      <View style={styles.controls} ref={viewRef} focusable>
        <Text>Mandalarian</Text>
        <Pressable onPress={handlerPauseAndPlay}>
          <Text>{playing ? "Pause" : "Play"}</Text>
        </Pressable>
        <Text>Progress: {videoInfo.progress}</Text>
        <Text>Duration: {videoInfo.duration}</Text>

        <Seekbar duration={videoInfo.duration} progress={videoInfo.progress} />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  controls: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  }
});
