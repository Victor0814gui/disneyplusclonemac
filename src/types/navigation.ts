

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}


export type RootStackParamList = {
  WelcomeScreen: undefined;
  SignInStepOne: undefined;
  SignInStepTwo: undefined;
  SubscriptionScreen: undefined;
  VerificationCodeSession: undefined;
  CheckoutSession: undefined;
  HomeScreen: undefined;
};