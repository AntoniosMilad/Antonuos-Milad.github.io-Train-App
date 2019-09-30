import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {
     SafeAreaView,
     TouchableOpacity,
     Text,
     TextInput,
     KeyboardAvoidingView,
     ScrollView,
     View,
} from 'react-native';
import Colors from '../Themes/colors';


export default class SellTickets extends Component {
     static navigationOptions = 
     { 
         title : 'بيْع التذاكر',
         
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

          

          this.state =
               {
                    todos: [],

               }

          fetch('https://192.168.137.42/TrainAppLast/api/Tickets',
               {
                    method: "GET"
               })
               .then(async response => {

                    if (response.ok) {

                         const todos = await response.json();
                         this.setState({ todos });
                         console.warn(this.state.todos);
                    }
               })
               .catch(() => {
                    console.warn('error happend')
               })

          let data = this.state.todos;

 

          return (
               <SafeAreaView style={{
                    flex: .75,
                    width: 340,
                    justifyContent: 'space-evenly',
                    textAlign: 'right',
                    color: 'black',
                    borderBottomWidth: 0,

 

               }}>

                    <KeyboardAvoidingView behavior='padding' enabled>
                    <View> 

<ScrollView>

                    <Dropdown
                         label='محطة المغادرة'
                         
                         data={this.state.todos}
                         labelFontSize={16}
                         keyExtractor={(item, index) => index.toString()}
                         renderItem={({ item, index }) => {
                              return <Text>{item.title}</Text>
                         }}

                    />
                    <Dropdown
                         label='محطة الوصول'
                         data={data}
                         labelFontSize={16}
                         

                    />
                    <Dropdown
                         label='نوع القطار'
                         data={data}
                         labelFontSize={16}

                    />

                    <TextInput
                         style={{
                              width: 340,
                              color: '#000038',
                              fontSize: 16,
                              borderBottomColor : '#ccc',
                              borderBottomWidth :1,
                              textAlign: 'right',
                              height : 30,
                         }}
                         enablesReturnKeyAutomatically={true}
                         placeholder='رقم الهاتف'
                         autoCapitalize="none"
                         placeholderTextColor='#ccc'
                         onChangeText={() => { }}
                         keyboardType='number-pad'
                         maxLength={11}
                         keyboardType='numeric'
                         

                    />

                    <TouchableOpacity onPress={() => {
                         this.props.navigation.navigate('viewTrains');
                    }}>
                         <Text style={{
                              backgroundColor : Colors.buttonsColor.color,
                              borderColor: 'white',
                              borderRadius: 10,
                              color : Colors.inputColor.color,
                              fontSize: 16,
                              overflow: 'hidden',
                              padding: 10,
                              textAlign: 'center',
                               marginBottom: 8,
                              width: 300,
                              marginTop: 20,
                            marginLeft :25,
                         }}>تأكيد</Text>
                    </TouchableOpacity>

                    </ScrollView>
                    </View>
                    </KeyboardAvoidingView>
               </SafeAreaView>

          );
     }
}