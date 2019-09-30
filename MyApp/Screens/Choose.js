import React, { Component } from 'react';
import { SafeAreaView, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../Themes/colors';

export default class Choose extends Component {

    static navigationOptions = {
        title: 'القائمة الرئيسية',
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
        headerLeft: null,

    };

    render() {
        return (

            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: Colors.contentColor.color,
                // color: Colors.inputColor.color,
            }}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('triansList');
                    }}
                >
                    <Text style={styles.TouchableOpacity}>ابحث عن قطار</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('sellOrBuyTicket');
                    }}
                >
                    <Text style={styles.TouchableOpacity}>التذاكر</Text>
                </TouchableOpacity>
            </SafeAreaView>




        );


    }


}


const styles = StyleSheet.create({

    TouchableOpacity: {

        backgroundColor: Colors.buttonsColor.color,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 7,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 15,
        textAlign: 'center',
        width: 300,
        height: 70,

    }
});
