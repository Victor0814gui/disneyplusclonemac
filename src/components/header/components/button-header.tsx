import React, { FunctionComponent, useCallback, useRef } from 'react';
import { Text, Pressable, PressableProps, Animated, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, SvgProps } from 'react-native-svg';
import { COLORS } from '../../../theme';

type ButtonHeaderProps = PressableProps & {
  label: string;
  icon: FunctionComponent<SvgProps>;
}

export function ButtonHeader({ label, icon: Icon, ...rest }: ButtonHeaderProps) {
  const opacity = useRef(new Animated.Value(1)).current;

  const onMouseEnter = useCallback(() => {
    Animated.spring(opacity, {
      useNativeDriver: true,
      toValue: 0.7,
    }).start();
  }, [])

  const onMouseLeave = useCallback(() => {
    Animated.spring(opacity, {
      useNativeDriver: true,
      toValue: 1,
    }).start();
  }, [])

  return (
    <Pressable
      {...rest}
      onHoverIn={onMouseEnter}
      onHoverOut={onMouseLeave}
      style={styles.headerButton}
    >
      <Icon fill={COLORS.icon} style={styles.icon} />
      <Animated.Text
        style={[
          styles.headerButtonText,
          {
            opacity,
          }
        ]}
      >{label}</Animated.Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 21,
  },
  headerButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  icon: {
    height: 18,
    width: 18,
    marginRight: 4,
  },
})