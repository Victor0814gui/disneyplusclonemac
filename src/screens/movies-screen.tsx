import React from "react";
import { StyleSheet, Text, View } from "react-native"
import { Header } from "../components/header"
import { Page } from "../components/page";




export const MoviesScreen = () => {
  return (
    <Page>
      <Header />
      <Page>
        <Text>Movies  Screen</Text>
      </Page>
    </Page>
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