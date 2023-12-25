import React from "react";
import { StyleSheet, Text, View } from "react-native"
import { Header } from "../components/header"




export const SeriesScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Series Screen</Text>
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