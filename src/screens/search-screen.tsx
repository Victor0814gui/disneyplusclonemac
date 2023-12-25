import React from "react";
import { StyleSheet, Text, View } from "react-native"
import { Header } from "../components/header"
import { Input } from "../components/input";
import { Page } from "../components/page";




export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Page>
        <Text>Search Screen</Text>
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