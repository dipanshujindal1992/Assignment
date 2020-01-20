import React from 'react'
import {View, StyleSheet, Text, Image, TouchableWithoutFeedback, FlatList, ScrollView, TextInput} from 'react-native'
import styles from '../../auth/login/styles'
import {connect} from 'react-redux'
import * as actions from '../../../actions/homeActions'
import AuthHeader from "../../../components/authHeader";
import NavHeader from "../../../components/navHeader";
import Loader from "../../../components/loader";
import {Colors} from "../../../utils/colors";
import Button from "../../../components/Button";
import {strings} from "../../../utils/Strings";

class AddNewEmployee extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            employeesList: '',
            loading: false,
            name: '',
            age: '',
            salary: ''
        }
    }


    handleValidations() {
        const {name, age, salary} = this.state

        console.log("EMployessList-->>", JSON.stringify(this.props.employeeList.data))
        if (!name.trim()) {
            alert(strings.name_error_msg)
        } else if (!age) {
            alert(strings.age_error_msg)

        } else if (!salary) {
            alert(strings.salary_error_msg)
        } else {
            const {addNewEmployee, employeeList} = this.props;


            this.setState({loading: true})

            let data = {
                name, salary, age
            }
            addNewEmployee(data)
                .then((res) => {
                    // console.log("res",res.payload.data)
                    this.setState({loading: false,})
                    if (res && res.payload && res.payload.data && res.payload.data.status === "success") {

                        let resAdd = res.payload.data.data
                        let oldaData = this.props.employeeList.data
                        debugger
                        console.log("res--", resAdd);

                        this.setState({name: '', age: '', salary: ''})

                        console.log("oldaData", oldaData);

                         this.props.navigation.goBack()
                    } else {
                        console.log("res err", res)

                    }

                }).catch((e) => {
                this.setState({loading: false,})
            })
        }
    }


    render() {
        return <View style={styles.container}>
            <Loader loading={this.state.loading}/>

            <ScrollView style={{flex: 1, marginVertical: 20}}>
                <AuthHeader title={'Add New Employee'}/>

                <View style={{marginTop: 50}}>

                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor={Colors.grey}
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}

                        returnKeyType={'next'}
                        onSubmitEditing={() => {
                            this.ageTextInput.focus();
                        }}
                        blurOnSubmit={false}
                    />
                    <View style={styles.bottomLineView}/>
                    <TextInput
                        ref={(input) => {
                            this.ageTextInput = input;
                        }}
                        placeholderTextColor={Colors.grey}
                        style={styles.input}
                        keyboardType={'numeric'}
                        placeholder="Age"
                        returnKeyType={'done'}
                        onChangeText={(age) => this.setState({age})}
                        value={this.state.age}
                        onSubmitEditing={() => {
                            this.salaryTextInput.focus();
                        }}
                        blurOnSubmit={false}

                    />
                    <View style={styles.bottomLineView}/>

                    <TextInput
                        ref={(input) => {
                            this.salaryTextInput = input;
                        }}
                        placeholderTextColor={Colors.grey}
                        style={styles.input}
                        keyboardType={'numeric'}
                        placeholder="Salary"
                        returnKeyType={'done'}
                        onChangeText={(salary) => this.setState({salary})}
                        value={this.state.salary}


                    />
                    <View style={styles.bottomLineView}/>

                    <View style={{marginTop: 40}}>
                        <Button onPress={() => this.handleValidations()} title={'Add'}/>
                    </View>
                </View>
            </ScrollView>
        </View>;
    }


}


const stateToProps = (state) => ({
    employeeList: state.HomeReducer.employeeList,
    addNewEmployee: state.HomeReducer.addNewEmployee

});

const dispatchToProps = (dispatch) => {
    return {
        addNewEmployee: (data) => dispatch(actions.addNewEmployee(data)),

    }
};

const Container = connect(stateToProps, dispatchToProps)(AddNewEmployee);
export default Container;

