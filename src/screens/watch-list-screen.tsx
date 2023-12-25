import React from "react";
import { StyleSheet, Text, View } from "react-native"
import { Header } from "../components/header"




export const WatchListScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Watch List Screen</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})