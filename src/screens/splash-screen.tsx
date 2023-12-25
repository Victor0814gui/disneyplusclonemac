import React, { useEffect } from "react";
import { StyleSheet } from "react-native"
import Video from "react-native-video"

import { ROUTES_NAMES } from "../routes";
import { Page } from "../components/page";

import SplashVideoMP4 from "../assets/splash.mp4";
import { titleBar } from "react-native-custom-window";
import { useFocusEffect } from "@react-navigation/native";


export const SplashScreen = ({ navigation }: any) => {
  const onEnd = () => {
    navigation.navigate(ROUTES_NAMES.welcomeScreen)
  }

  return (
    <Page>
      <Video
        focusable={false}
        accessible={false}
        playInBackground={false}
        paused={false}
        source={SplashVideoMP4}
        style={styles.video}
        onEnd={onEnd}
        resizeMode="cover"
      />
    </Page>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1C28"
  },
  video: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})