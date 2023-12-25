import React from 'react';
import { theme } from './utils/theme-configs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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

const Drawer = createDrawerNavigator();

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
        <Drawer.Navigator
          useLegacyImplementation
          initialRouteName={ROUTES_NAMES.welcomeScreen}
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen name={ROUTES_NAMES.splashScreen} component={SplashScreen} />
          <Drawer.Screen name={ROUTES_NAMES.welcomeScreen} component={WelcomeScreen} />
          <Drawer.Screen name={ROUTES_NAMES.signInStepOne} component={SignInStepOne} />
          <Drawer.Screen name={ROUTES_NAMES.signInStepTwo} component={SignInStepTwo} />
          <Drawer.Screen
            name={ROUTES_NAMES.subscriptionScreen}
            component={SubscriptionScreen}
          />
          <Drawer.Screen
            name={ROUTES_NAMES.verificationCodeSession}
            component={VerificationCodeSession}
          />
          <Drawer.Screen name={ROUTES_NAMES.checkoutSession} component={CheckoutSession} />
          <Drawer.Screen name={ROUTES_NAMES.homeScreen} component={HomeScreen} />
          <Drawer.Screen name={ROUTES_NAMES.searchScreen} component={SearchScreen} />
          <Drawer.Screen name={ROUTES_NAMES.watchListScreen} component={WatchListScreen} />
          <Drawer.Screen name={ROUTES_NAMES.seriesScreen} component={SeriesScreen} />
          <Drawer.Screen name={ROUTES_NAMES.originalsScreen} component={OriginalsScreen} />
          <Drawer.Screen name={ROUTES_NAMES.moviesScreen} component={MoviesScreen} />
          <Drawer.Screen name={ROUTES_NAMES.movieDetailsScreen} component={MovieDetailsScreen} />
          <Drawer.Screen name={ROUTES_NAMES.playerScreen} component={PlayerScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
