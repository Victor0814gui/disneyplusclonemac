import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, Pressable, StyleSheet} from 'react-native';

export function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/arrow-back.svg')}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
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
