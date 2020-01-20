import React from 'react'
import {View, StyleSheet, Text, ScrollView, TextInput} from 'react-native'
import styles from "./styles";
import AuthHeader from "../../../components/authHeader";
import Button from "../../../components/Button";
import {strings} from "../../../utils/Strings";
import {Colors} from "../../../utils/colors";

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleValidations() {
        const {username, password} = this.state
        if (!username.trim()) {
            alert(strings.username_error_msg)
        } else if (!password) {
            alert(strings.password_error_msg)

        } else if (username.trim() === 'admin' && password === '123456') {
            alert("Success")
        } else {
            alert(strings.username_password_error_msg)
        }
    }


    render() {
        return <View style={styles.container}>

            <ScrollView style={{flex: 1, marginVertical: 20}}>
                <AuthHeader title={'Login'}/>

                <View style={{marginTop: 50}}>

                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor={Colors.grey}
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}

                        returnKeyType={'next'}
                        onSubmitEditing={() => {
                            this.passwordTextInput.focus();
                        }}
                        blurOnSubmit={false}
                    />
                    <View style={styles.bottomLineView}/>
                    <TextInput
                        ref={(input) => {
                            this.passwordTextInput = input;
                        }}
                        placeholderTextColor={Colors.grey}
                        style={styles.input}
                        placeholder="Password"
                        returnKeyType={'done'}
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}


                    />
                    <View style={styles.bottomLineView}/>

                    <View style={{marginTop: 40}}>
                        <Button onPress={() => this.handleValidations()} title={'Login'}/>
                    </View>
                </View>
            </ScrollView>
        </View>;
    }


}


export default LoginScreen
