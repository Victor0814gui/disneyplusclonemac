import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';

import ArrowBackSvg from '../assets/arrow-back.svg';

export function Header({routeName}) {
  const navigation = useNavigation();

  const onPress = () => {
    if (!!routeName) {
      navigation.navigate(routeName);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.header}>
      <Pressable onPress={onPress}>
        <ArrowBackSvg
          style={{
            width: 30,
            height: 30,
          }}
        />
        {/* <Image
          source={require('../assets/arrow-back.svg')}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        /> */}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    maxHeight: 41,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 12,
    zIndex: 1,
  },
});
