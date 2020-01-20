import React from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Colors} from "../utils/colors";

const Button = (props) => {
    return (<View>
        <TouchableOpacity
            onPress={()=>props.onPress()}
            style={styles.buttonView}
        >
            <Text style={styles.titleTextStyle}>{props.title}</Text>
        </TouchableOpacity>

    </View>)

};

const styles = StyleSheet.create({

    buttonView: {
        backgroundColor: Colors.purple,
        width: '70%',
        height: 40,
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent:'center'
    },
    titleTextStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'white'

    },


});

export default Button
