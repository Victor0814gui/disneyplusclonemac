import React from "react";
import { StyleSheet, Text, View } from "react-native"
import { Header } from "../components/header"
import { Page } from "../components/page";




export const OriginalsScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Page>
        <Text>Originals Screen</Text>
      </Page>
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