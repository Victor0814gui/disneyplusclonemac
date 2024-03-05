import React from 'react';
import { theme } from './utils/theme-configs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignInStepOne } from './screens/signin-step-one-screen';
import { SignInStepTwo } from './screens/signin-step-two-screen';
import { SubscriptionScreen } from './screens/subscription-screen';
import { VerificationCodeSession } from './screens/verification-code-session';
import { WelcomeScreen } from './screens/welcome-screen';
import { CheckoutSession } from './screens/checkout-session';
import { HomeScreen } from './screens/home-screen';
import { SearchScreen } from './screens/search-screen';
import { WatchListScreen } from './screens/watch-list-screen';
import { SeriesScreen } from './screens/series-screen';
import { OriginalsScreen } from './screens/originals-screen';
import { MoviesScreen } from './screens/movies-screen';
import { MovieDetailsScreen } from './screens/movie-details-screen';
import { PlayerScreen } from './screens/player-screen';
import { SplashScreen } from './screens/splash-screen';

const Navigator = createNativeStackNavigator();

export const ROUTES_NAMES = {
  welcomeScreen: "WelcomeScreen",
  signInStepOne: "SignInStepOne",
  signInStepTwo: "SignInStepTwo",
  subscriptionScreen: "SubscriptionScreen",
  verificationCodeSession: "VerificationCodeSession",
  checkoutSession: "CheckoutSession",
  homeScreen: "HomeScreen",
  searchScreen: "SearchScreen",
  watchListScreen: "WatchListScreen",
  seriesScreen: "SeriesScreen",
  originalsScreen: "OriginalsScreen",
  moviesScreen: "MoviesScreen",
  movieDetailsScreen: "MovieDetailsScreen",
  playerScreen: "PlayerScreen",
  splashScreen: "SplashScreen",
}

enableScreens(true);
export function Routes() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }} focusable={false}>
      <NavigationContainer theme={theme}>
        <Navigator.Navigator
          initialRouteName={ROUTES_NAMES.welcomeScreen}
          screenOptions={{
            headerShown: false,
          }}>
          <Navigator.Screen name={ROUTES_NAMES.splashScreen} component={SplashScreen} />
          <Navigator.Screen name={ROUTES_NAMES.welcomeScreen} component={WelcomeScreen} />
          <Navigator.Screen name={ROUTES_NAMES.signInStepOne} component={SignInStepOne} />
          <Navigator.Screen name={ROUTES_NAMES.signInStepTwo} component={SignInStepTwo} />
          <Navigator.Screen
            name={ROUTES_NAMES.subscriptionScreen}
            component={SubscriptionScreen}
          />
          <Navigator.Screen
            name={ROUTES_NAMES.verificationCodeSession}
            component={VerificationCodeSession}
          />
          <Navigator.Screen name={ROUTES_NAMES.checkoutSession} component={CheckoutSession} />
          <Navigator.Screen name={ROUTES_NAMES.homeScreen} component={HomeScreen} />
          <Navigator.Screen name={ROUTES_NAMES.searchScreen} component={SearchScreen} />
          <Navigator.Screen name={ROUTES_NAMES.watchListScreen} component={WatchListScreen} />
          <Navigator.Screen name={ROUTES_NAMES.seriesScreen} component={SeriesScreen} />
          <Navigator.Screen name={ROUTES_NAMES.originalsScreen} component={OriginalsScreen} />
          <Navigator.Screen name={ROUTES_NAMES.moviesScreen} component={MoviesScreen} />
          <Navigator.Screen name={ROUTES_NAMES.movieDetailsScreen} component={MovieDetailsScreen} />
          <Navigator.Screen name={ROUTES_NAMES.playerScreen} component={PlayerScreen} />
        </Navigator.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
