import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from "../screens/auth/login/LoginScreen";
import HomeScreen from "../screens/landing/home/HomeScreen";
import AddNewEmployee from "../screens/landing/new employee/AddNewEmployee";

const AppNavigator = createStackNavigator({
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {

                headerMode:'none'
            },

        },
        HomeScreen: {
            screen: HomeScreen,

            navigationOptions: {
                headerShown:false,
                headerMode: 'none',

            },
        },
        AddNewEmployee: {
            screen: AddNewEmployee,
            navigationOptions:{
                headerBackTitle:'',
                headerTitle:' '
            }
        }
    },
    {
        initialRouteName: 'HomeScreen',


    });

export default createAppContainer(AppNavigator);
