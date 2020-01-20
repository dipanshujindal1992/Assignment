import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';

const AuthHeader=(props)=>{
    return (<View style={styles.container}>
        <Image source={require('../assets/images/logo.png')} style={styles.logoStyle}/>

        <Text style={styles.titleTextStyle}>{props.title}</Text>

    </View>)

};

const styles = StyleSheet.create({

    container: {
       marginTop:20
    },
    logoStyle: {
        alignSelf: 'center',
        marginTop: 50,

    }, titleTextStyle: {
        fontSize:32,

        alignSelf: 'center',
        marginTop: 10,
        justifyContent:'center',
        textAlign:'center',

     },


});

export default AuthHeader
