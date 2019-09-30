import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'

import Login from './MyApp/Screens/Login';
import Choose from './MyApp/Screens/Choose';
import Signup from './MyApp/Screens/Signup';
import TrainsList from './MyApp/Screens/TrainsList';
import SellOrBuyTicket from './MyApp/Screens/SellOrBuyTicket';
import SellTickets from './MyApp/Screens/SellTickets';
import TrainPost from './MyApp/Screens/TrainPost';
//import About from './MyApp/Screens/about';

import NewLogin from './MyApp/Screens/NewLogin';



const Nav = createStackNavigator({
  login: NewLogin,
  signup: Signup,
  choose: Choose,
  triansList: TrainsList,
  trainPost: TrainPost,
  sellOrBuyTicket: SellOrBuyTicket,
  sellTickets: SellTickets,
  //about : About,


},

  {
    initialRouteName: 'login',
  });


export default createAppContainer(Nav);

