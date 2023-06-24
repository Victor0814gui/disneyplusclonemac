import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SignInStepOne} from './screens/signin-step-one-screen';
import {SignInStepTwo} from './screens/signin-step-two-screen';
import {SubsriptionScreen} from './screens/subscription-screen';
import {VerificationCodeSession} from './screens/verification-code-session';
import {WelcomeScreen} from './screens/welcome-screeen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CheckoutSession from './screens/checkout-session';
import {VideoDetailsContentScreen} from './screens/video-details-content-screen';
import TestScreen from './screens/test-screen';
import {enableScreens} from 'react-native-screens';
import {DragAndDropScreen} from './screens/drag-and-drop';
const Drawer = createDrawerNavigator();

export function Routes() {
  enableScreens(true);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer
        theme={{
          colors: {
            background: '#1a1c29',
          },
        }}>
        <Drawer.Navigator
          initialRouteName="DragAndDropScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Drawer.Screen name="SignInStepOne" component={SignInStepOne} />
          <Drawer.Screen name="SignInStepTwo" component={SignInStepTwo} />
          <Drawer.Screen
            name="SubsriptionScreen"
            component={SubsriptionScreen}
          />
          <Drawer.Screen
            name="VerificationCodeSession"
            component={VerificationCodeSession}
          />
          <Drawer.Screen
            name="VideoDetailsContentScreen"
            component={VideoDetailsContentScreen}
          />
          <Drawer.Screen name="CheckoutSession" component={CheckoutSession} />
          <Drawer.Screen
            name="TestScreen"
            options={{
              headerShown: true,
            }}
            component={TestScreen}
          />
          <Drawer.Screen
            name="DragAndDropScreen"
            options={{
              headerShown: true,
            }}
            component={DragAndDropScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
