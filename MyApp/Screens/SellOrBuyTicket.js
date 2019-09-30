import React, { Component } from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Colors from '../Themes/colors';

export default class SellOrBuyTicket extends Component {
     static navigationOptions = 
     { 
         title : 'التذاكر',
         
         headerStyle: {
             backgroundColor: Colors.headerColor.color,
         },
 
         headerTintColor: 'white',
         
         headerTitleStyle: {
             fontWeight: 'bold',   
             alignSelf: 'center',
             textAlign:"center", 
             flex:1,
         },
             headerLeft: null,
 
     };
 

     render() {
          return (

               <SafeAreaView style={{
                    flex: 1,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor : '#F2F2F2',

               }}>
                    <TouchableOpacity
                         onPress={() => {
                              // this.props.navigation.navigate('search');
                         }}
                    >
                         <Text style={{
                              backgroundColor: Colors.headerColor.color,
                              borderColor: 'white',
                              borderWidth: 1,
                              borderRadius: 7,
                              color: 'white',
                              fontSize: 24,
                              fontWeight: 'bold',
                              overflow: 'hidden',
                              padding: 15,
                              textAlign: 'center',
                              width: 280,
                         }}>عرض التذاكر المتاحة</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                         onPress={() => {
                              this.props.navigation.navigate('sellTickets');
                         }}
                    >
                         <Text style={{
                              backgroundColor: Colors.headerColor.color,
                              borderColor: 'white',
                              borderWidth: 1,
                              borderRadius: 7,
                              color: 'white',
                              fontSize: 24,
                              fontWeight: 'bold',
                              overflow: 'hidden',
                              padding: 15,
                              textAlign: 'center',
                              width: 280,
                         }}>بيْع التذاكر</Text>
                    </TouchableOpacity>
               </SafeAreaView>




          );


     }


}
