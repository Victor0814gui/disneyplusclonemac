import React, { ReactNode, useRef } from "react"
import { StyleSheet, View } from "react-native"
import { Transition } from "./transition";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { Animated } from "react-native";
import { titleBar } from "react-native-custom-window";


type PageProps = {
  children: ReactNode;
  titlebar?: boolean;
}

export const Page = ({ titlebar = false, children }: PageProps) => {
  const animation = useRef(new Animated.Value(0.7)).current;
  const isFocused = useIsFocused();

  const setWindowDefault = async () => {
    await titleBar.removeBackButton()
  }

  const setCustomWindowStyle = async () => {
    await titleBar.addBackButton()
  }

  useFocusEffect(() => {
    if (titlebar) {
      setCustomWindowStyle();
    } else {
      setWindowDefault();
    }
  })

  if (isFocused) {
    return (
      <View style={styles.container} focusable={false}>
        {children}
      </View>
    )
  } else {
    return <View focusable={false} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})