import React from 'react';
import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation';
import ChooseScreen from '../Screens/Choose';
import SignupScreen from '../Screens/Signup';

const main = createStackNavigator(
     {
          loginSuccess:
          {
               screen: ChooseScreen,
          },
          signup:
          {
               screen: SignupScreen,
          }

     },
     {
          initialRouteName: 'signup',

     })

export default createAppContainer(main);