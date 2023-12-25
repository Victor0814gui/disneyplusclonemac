import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';


export function GradientHeader() {
  return (
    <Svg style={{ position: "absolute", top: 0, }} height={70} width="100%">
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#070421" stopOpacity="1" />
          <Stop offset="100%" stopColor="#070421" stopOpacity="0" />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
    </Svg>
  );
}