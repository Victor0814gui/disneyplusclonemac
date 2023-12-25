import React, { memo, useMemo, useRef, useState } from 'react';
import { View, StyleSheet, Pressable, Animated, FlatList } from 'react-native';

import ArrowLeftSvg from '../assets/arrow-left.svg';
import ArrowRightSvg from '../assets/arrow-right.svg';
import { useNavigation } from '@react-navigation/native';
import { ROUTES_NAMES } from '../routes';

const ITEM_WIDTH = 220;

const Item = memo(({ item, index }: any) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES_NAMES.movieDetailsScreen)
  }

  return (
    <Pressable onPress={onPress} style={[styles.item, index === 0 && { marginLeft: 51 }]} />
  )
});

export const ListItems = ({ data, i }: any) => {
  const [onHover, setOnHover] = useState(false);
  const [listIndex, setListIndex] = useState(0);
  const animatedView = useRef(new Animated.Value(0)).current;
  const listRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({ item, index }: any) => <Item item={item} index={index} />;
  const dataLength = useMemo(() => data.length, []);

  const animationEnter = async () => {
    Animated.timing(animatedView, {
      useNativeDriver: false,
      toValue: 1,
      duration: 200,
    }).start();
  };

  const animationLeave = async () => {
    Animated.timing(animatedView, {
      useNativeDriver: false,
      toValue: 0,
      duration: 1000,
    }).start();
  };

  const onMouseEnter = async () => {
    await animationEnter();
    setOnHover(true);
  };

  const onMouseLeave = async () => {
    await animationLeave();
    setOnHover(false);
  };

  const handleNext = () => {
    console.log('handleNext');
    setScrollOffset(scrollOffset + ITEM_WIDTH);
  };

  const handlePrevious = () => {
    console.log('handlePrevious');
    setScrollOffset(scrollOffset - ITEM_WIDTH);
  };

  const onScroll = (event: any) => {
    console.log(event);
    const { contentOffset } = event.nativeEvent;
    setScrollOffset(contentOffset.x);
  }

  const getItemLayout = (data: any, index: number) => ({
    length: ITEM_WIDTH, // Defina o valor do tamanho de cada item
    offset: ITEM_WIDTH * index,
    index,
  });

  const keyExtractor = (_: any, index: number) => index.toString();

  const initialScrollIndex = Math.round(scrollOffset / ITEM_WIDTH);

  return (
    <View
      style={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {onHover && (
        <Pressable
          onPress={handlePrevious}
          style={[styles.button, styles.buttonBack]}>
          <ArrowLeftSvg style={styles.icon} />
        </Pressable>
      )}
      <FlatList
        ref={listRef}
        style={styles.itemContainer}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        centerContent
        zoomScale={1}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={initialScrollIndex}
        onScroll={onScroll}
        getItemLayout={getItemLayout}
      />
      {onHover && (
        <Pressable
          onPress={handleNext}
          style={[styles.button, styles.buttonNext]}>
          <ArrowRightSvg style={styles.icon} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
  },
  itemContainer: {
    marginBottom: 8,
  },
  item: {
    height: 140,
    borderRadius: 16,
    width: ITEM_WIDTH,
    marginHorizontal: 12,
    backgroundColor: '#333333',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 16,
  },
  button: {
    height: '100%',
    width: 40,
    backgroundColor: '#444444',
    position: 'absolute',
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  buttonBack: {
    left: 0,
  },
  buttonNext: {
    right: 0,
  },
  icon: {
    height: 40,
    width: 40,
  },
});
