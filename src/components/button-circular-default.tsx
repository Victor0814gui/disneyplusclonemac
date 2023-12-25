import React, { cloneElement, useRef, useState, ReactNode, ReactElement } from 'react';

import { View, Text, Animated, Pressable, StyleSheet, PressableProps } from 'react-native';

type ButtonCircularDefaultProps = PressableProps & {
  children: ReactElement;
  size?: number;
  defaultColor?: string;
  hoveredColor?: string;
  labelColor?: string;
  labelHoveredColor?: string;
}

export function ButtonCircularDefault({
  children,
  size = 38,
  defaultColor = '#004580',
  hoveredColor = '#0072d2',
  labelColor = '#9cb1cc',
  labelHoveredColor = '#f6f7f9',
  ...rest
}: ButtonCircularDefaultProps) {
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

  const onPressOut = () => {
    Animated.timing(animatedButtonCheckin, {
      toValue: {
        x: 1.04,
        y: 1,
      },
      duration: 80,
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

  return (
    <Pressable focusable {...rest} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        accessibilityRole="button"
        onMouseEnter={animateMouseEnter}
        onMouseLeave={animatedMouseLeave}
        style={[
          styles.buttonCheckin,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
          { backgroundColor: defaultColor },
          onHover && { backgroundColor: hoveredColor },
          {
            transform: [
              { scaleX: animatedButtonCheckin.x },
              { scaleY: animatedButtonCheckin.y },
            ],
          },
        ]}>
        {/* <Text
          style={[
            styles.buttonCheckinText,
            {color: labelColor},
            onHover && {color: labelHoveredColor},
          ]}> */}
        {cloneElement(children, {
          fill: onHover ? '#00001a' : '#f2f2f2',
        })}
        {/* </Text> */}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonCheckin: {
    backgroundColor: '#004580',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCheckinHovered: {
    backgroundColor: '#0072d2',
  },
  buttonCheckinTextHovered: {
    color: '#f6f7f9',
  },
  buttonCheckinText: {
    color: '#9db2cc',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 21,
  },
});
