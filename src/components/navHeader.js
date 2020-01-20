import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from "../utils/colors";
import {Icon} from "native-base";

const NavHeader = (props) => {
    return (<View style={styles.container}>

        <TouchableOpacity style={{marginLeft: 20,justifyContent:'center'}} onPress={() => props.onAddPress()}>

            <Image  source={require('../assets/images/plus.png')}
                    style={{tintColor: 'white'}}/>

        </TouchableOpacity>
        <Text style={styles.titleTextStyle}>{props.title}</Text>
        <TouchableOpacity style={{marginRight: 20,justifyContent:'center'}} onPress={() => props.onLogoutPress()}>

            <Image  source={require('../assets/images/logout.png')}
                    style={{width:25,height:25,tintColor: 'white'}}/>

        </TouchableOpacity>
    </View>)

};

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.purple,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60
    },
    titleTextStyle: {
        fontSize: 22,
        color: 'white',

        alignSelf: 'center',
       // marginTop: 10,
        justifyContent: 'center',
        textAlign: 'center',

    },


});

export default NavHeader
