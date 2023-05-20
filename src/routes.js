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
import {Toast} from './components/toast';

const Drawer = createDrawerNavigator();

export function Routes() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer
        theme={{
          colors: {
            background: '#1a1c29',
          },
        }}>
        <Drawer.Navigator
          initialRouteName="WelcomeScreen"
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
          <Drawer.Screen name="CheckoutSession" component={CheckoutSession} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
