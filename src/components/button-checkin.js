import React, {useRef, useState} from 'react';

import {View, Text, Animated, Pressable, StyleSheet} from 'react-native';

export function ButtonCheckin({
  label = 'ASSINAR AGORA',
  defaultColor = '#004580',
  hoveredColor = '#0072d2',
  labelColor = '#9cb1cc',
  labelHoveredColor = '#f6f7f9',
  onPress = () => {},
}) {
  const animatedButtonCheckin = useRef(
    new Animated.ValueXY({
      x: 1,
      y: 1,
    }),
  ).current;
  const [onHover, setOnHover] = useState(false);

  const animateMouseEnter = () => {
    setOnHover(true);
    Animated.timing(animatedButtonCheckin, {
      toValue: {
        x: 1.12,
        y: 1.1,
      },
      duration: 130,
      useNativeDriver: false,
    }).start();
  };

  const onPressIn = () => {
    Animated.timing(animatedButtonCheckin, {
      toValue: {
        x: 1.09,
        y: 1.07,
      },
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const animatedMouseLeave = () => {
    setOnHover(false);
    Animated.timing(animatedButtonCheckin, {
      toValue: {
        x: 1,
        y: 1,
      },
      duration: 130,
      useNativeDriver: false,
    }).start();
  };

  const handlePress = () => {
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={onPressIn}
      onPressOut={animatedMouseLeave}>
      <Animated.View
        onMouseEnter={animateMouseEnter}
        onMouseLeave={animatedMouseLeave}
        style={[
          styles.buttonCheckin,
          {backgroundColor: defaultColor},
          onHover && {backgroundColor: hoveredColor},
          {
            transform: [
              {scaleX: animatedButtonCheckin.x},
              {scaleY: animatedButtonCheckin.y},
            ],
          },
        ]}>
        <Text
          style={[
            styles.buttonCheckinText,
            {color: labelColor},
            onHover && {color: labelHoveredColor},
          ]}>
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonCheckin: {
    height: 35,
    width: '100%',
    paddingHorizontal: 24,
    backgroundColor: '#004580',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  buttonCheckinHovered: {
    backgroundColor: '#0072d2',
  },
  buttonCheckinTextHovered: {
    color: '#f6f7f9',
  },
  buttonCheckinText: {
    color: '#9db2cc',
    fontWeight: '600',
    fontSize: 13,
  },
});
