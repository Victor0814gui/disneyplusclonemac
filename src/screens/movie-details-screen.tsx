import React, { useEffect, useRef } from "react";
import { Text, View, Image, ImageBackground, Animated, StyleSheet, SectionList, useWindowDimensions, Pressable } from "react-native"
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

import { Header } from "../components/header"
import ThumbnailLogo from "../assets/movie-logo.png";
import ThumbnailVideoPng from "../assets/thumbnail-film.png"
import ThumbnailGradient from "../assets/background-gradient.svg"
import { SeriesAndFilms } from "../utils/series-and-films";
import { ListItems } from "../components/list-items";
import { FlatList } from "react-native-gesture-handler";
import { SeriesAndFilmsRecommendation } from "../utils/series-and-films-recommendation";
import { ROUTES_NAMES } from "../routes";
import { useNavigation } from "@react-navigation/native";
import { titleBar } from "react-native-custom-window";
import { Page } from "../components/page";
import { ButtonCheckin } from "../components/button-checkin";



const GradienteBackground = () => {
  return (
    <Svg style={{ position: "absolute", zIndex: 0, }} width={"100%"} height={"100%"} >
      <Path d="M0 0L1440 164V762.545V882H0V0Z" fill="url(#gradient)" />
      <Defs>
        <LinearGradient
          id="gradient"
          x1={657.5}
          y1={138.5}
          x2={659.153}
          y2={864.546}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#1A1D29" stopOpacity="0" />
          <Stop offset="0.596475" stopColor="#1A1D29" stopOpacity="0.791667" />
          <Stop offset="1" stopColor="#1A1D29" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}


const Content = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES_NAMES.playerScreen)
  }
  return (
    <View style={styles.content}>
      <Image resizeMode="contain" style={styles.logo} source={ThumbnailLogo} />
      <Text style={styles.text}>Tras la caída del Imperio Galáctico, la anarquía se ha esparcido en la Galaxia. Un pistolero solitario se abre paso por los bordes exteriores, ganándose su lugar como cazarrecompensas.</Text>
      <View style={styles.contentFooter}>
        {/* <Pressable onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>ASSISTIR AGORA</Text>
        </Pressable > */}
        <ButtonCheckin
          defaultColor="#40424a"
          hoveredColor="#f9f9f9"
          labelColor="#c6c6c7"
          labelHoveredColor="#171717"
          label="ASSISTIR AGORA"
          onPress={onPress}
        />

        <ButtonCheckin
          defaultColor="#40424a"
          hoveredColor="#f9f9f9"
          labelColor="#c6c6c7"
          labelHoveredColor="#171717"
          label="MAIS INFORMAÇÕES"
          onPress={onPress}
        />
        {/* <View style={styles.buttonBorder}>
          <Text style={styles.buttonBorderText}>MAIS INFORMAÇÕES</Text>
        </View > */}
      </View>

    </View>
  )
}

export const MovieDetailsScreen = () => {

  const { width } = useWindowDimensions();
  const renderBanners = () => (
    <View style={[styles.banner, { width: width - 100 }]} />
  );

  return (
    <Page titlebar>
      <ImageBackground source={ThumbnailVideoPng} resizeMode="cover" style={styles.thumbnail}>
        <GradienteBackground />
        <Header />
        <View style={styles.gradientContainer}>
          <SectionList
            contentContainerStyle={styles.contentListContainer}
            ListHeaderComponent={<Content />}
            sections={SeriesAndFilmsRecommendation}
            keyExtractor={(item, index) => `${index}`}
            renderItem={() => null}
            renderSectionHeader={({ section: { title, data, i, key } }) => (
              <>
                {i > 0 && <Text style={styles.itemText}>{title}</Text>}
                <ListItems data={data} i={key} />
              </>
            )}
          />
        </View>
      </ImageBackground>
    </Page>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  backgroundGradient: {
    position: "absolute",
  },
  thumbnail: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    // maxWidth: 480,
    margin: 31,
    marginHorizontal: 51,
    paddingTop: 120,
    marginBottom: 150
  },
  logo: {
    height: 178,
    width: 319,
  },
  text: {
    fontWeight: "400",
    maxWidth: 620,
    fontSize: 18,
    color: "#F9F9F9"
  },
  contentFooter: {
    flexDirection: "row",
    paddingTop: 41,
    gap: 21,
  },
  button: {
    height: 42,
    paddingHorizontal: 31,
    backgroundColor: "#F9F9F9",
    borderRadius: 5,
    marginRight: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#1A1D29",
    fontWeight: "700",
  },
  buttonBorder: {
    height: 42,
    paddingHorizontal: 31,
    borderColor: "#F9F9F9",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBorderText: {
    color: "#F9F9F9",
    fontWeight: "700",
  },
  contentListContainer: {
    paddingBottom: 31,
  },
  bannerContainer: {
    maxHeight: 300,
  },
  banner: {
    backgroundColor: '#333333',
    borderRadius: 21,
    height: 300,
    marginHorizontal: 21,
  },
  itemContainer: {
    marginBottom: 8,
  },
  item: {
    height: 140,
    borderRadius: 16,
    width: 220,
    marginHorizontal: 12,
    backgroundColor: '#333333',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 16,
    marginLeft: 51,
  },
})