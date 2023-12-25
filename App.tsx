import React, { useEffect } from "react";
import { titleBar } from "react-native-custom-window"
import { Routes } from "./src/routes"
import { View, Text } from "react-native";




function ErrorScreen() {
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Text style={{ fontSize: 51, color: "red" }}>INTERNAL BACKEND ERROR</Text>
    </View>
  )
}


export function App() {
  const setCustomTitlebarColor = async () => {
    try {
      await titleBar.TitlebarColor({
        backgroundColor: "#070421",
        buttonBackgroundColor: "#070421",
        buttonForegroundColor: "#f2f2f2",
        buttonHoverForegroundColor: "#d9d9d9",
        inactiveBackgroundColor: "#f2f2f2",
        buttonInactiveBackgroundColor: "#f2f2f2",
        buttonInactiveForegroundColor: "#070421",
      })
    } catch (err) { }
  }

  useEffect(() => {
    setCustomTitlebarColor();
  }, [])

  try {
    return <Routes />
  } catch (err) {
    return <ErrorScreen />
  }
}