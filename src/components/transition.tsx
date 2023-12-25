import React, { useEffect, useRef, ReactNode } from 'react';
import { Animated, View } from 'react-native';
import { useIsFocused, useFocusEffect } from "@react-navigation/native";
import { titleBar } from 'react-native-custom-window';

type TransitionProps = {
  children: ReactNode;
  backButton?: boolean;
}

export function Transition({
  children,
  backButton = false
}: TransitionProps) {
  const animationScreen = useRef(new Animated.Value(0.8)).current;
  const isFocused = useIsFocused();
  const animationEnter = () => {
    Animated.timing(animationScreen, {
      toValue: 1,
      duration: 230,
      useNativeDriver: false,
    }).start();
  };

  useFocusEffect(() => {
    if (backButton) {
      titleBar.removeBackButton();
    } else {
      titleBar.addBackButton();
    }
    animationEnter();
  });

  if (isFocused) {
    return (
      <Animated.View
        style={{
          flex: 1,
          transform: [{ scale: animationScreen }],
        }}>
        {children}
      </Animated.View>
    );
  } else {
    return (
      <View />
    );
  }
}
