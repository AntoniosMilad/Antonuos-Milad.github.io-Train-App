import React, { Component } from 'react';
import { SafeAreaView, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native'
import Colors from '../Themes/colors';

export default class ViewTrains extends Component {

     static navigationOptions =
          {
               title: 'قائمة بالقطارات',

               headerStyle: {
                    backgroundColor: Colors.headerColor.color,
               },

               headerTintColor: 'white',

               headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    textAlign: "center",
                    flex: 1,
                    paddingRight: 40,
               },

          };


     state =
          {
               allPosts: [],
               postTexts: [],
               postIDs: [],
               user: {},
          }

     getTrains = () => {
          //get user object from navigation content
          this.setState({ user: this.props.navigation.state.params.user });
          alert("user name is ".concat(this.state.username));


          var url = 'http://192.168.1.3/TrainApp/api/TrianPosts';

          fetch(url) // get the list of stations
               .then(response => response.json())
               .then(Posts => {
                    this.setState({ allPosts: Posts });
                    alert(this.state.allPosts);
               }
               )
               .then(() => {
                    this.state.allPosts.forEach((item) => {
                         this.state.postTexts.push(item.Text);
                         this.state.postIDs.push(item.PostID)

                         // alert((this.item.text).concat(' *** ').concat(this.state.postTexts))
                    });
               })
               .catch(error => console.error('Error fetching train posts :: ', error));
     }



     render() {




          return (
               <SafeAreaView
                    onLayout={this.getTrains}
                    style=
                    {{
                         flex: .9,
                         width: 350,
                         justifyContent: 'space-evenly',
                         alignItems: 'center',
                         paddingTop: 30,

                    }}
               >


                    <FlatList
                         data={this.state.postTexts}
                         keyExtractor={(item, index) => index.toString()}
                         renderItem={({ item, index }) => {
                              return (
                                   <TouchableOpacity
                                        onPress={() => {
                                             //navigate to post and send data to the next screen
                                             this.props.navigation.navigate('trainPost',
                                                  {
                                                       postText: item,
                                                       postID: (index + 1),
                                                       user: this.state.user,
                                                  });
                                        }}
                                        key={index.toString()}

                                   >
                                        <Text style={styles.textStyle}>
                                             {item}
                                        </Text>

                                   </TouchableOpacity>

                              )
                         }}
                    />

               </SafeAreaView>

          );
     }
}


const styles = StyleSheet.create({
     textStyle:
     {
          backgroundColor: '#1f4e5f',
          borderColor: 'white',
          borderWidth: 1,
          borderRadius: 7,
          color: 'white',
          fontSize: 16,
          overflow: 'hidden',
          padding: 10,
          textAlign: 'center',
          width: 340,
          marginBottom: 15,
          marginLeft: 8,
     }
});