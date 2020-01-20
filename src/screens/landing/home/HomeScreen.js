import React from 'react'
import {Alert, FlatList, Image, Text, TouchableWithoutFeedback, View} from 'react-native'
import styles from './styles'
import {connect} from 'react-redux'
import * as actions from '../../../actions/homeActions'
import NavHeader from "../../../components/navHeader";
import Loader from "../../../components/loader";

class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            employeesList: [],
            loading: false
        }
    }


    componentDidMount(): void {
        const {getEmployeesList} = this.props;
        this.setState({loading: true})
        getEmployeesList()
            .then((res) => {
                console.log("res -->>", JSON.stringify(Object.values(res.payload.data.data)))
                if (res && res.payload && res.payload.data && res.payload.data.status === "success") {
                     this.setState({loading: false, employeesList: Object.values(res.payload.data.data)})
                } else {
                    console.log("res err", res)
                    this.setState({loading: false})
                }

            })
    }

    renderItems(key, value) {
        return <View style={{flexDirection: 'row', marginLeft: 20}}>
            <Text style={styles.listLabelStyle}>{key}</Text>
            <Text>{value}</Text>

        </View>
    }

    render() {
        const {navigation, employeeList, screenProps} = this.props


        return <View style={styles.container}>

            <Loader loading={this.state.loading}/>

            <NavHeader onAddPress={() => this.props.navigation.navigate('AddNewEmployee')}
                       onLogoutPress={() => this.props.navigation.navigate('LoginScreen')} title={'Employee'}/>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                horizontal={false}
                style={{marginTop: 5}}
                extraData={this.state.employeesList}
                data={this.state.employeesList}
                renderItem={({item, index}) =>
                    <View style={{
                        marginHorizontal: 10,
                        marginVertical: 5,
                        paddingVertical: 5,
                        backgroundColor: 'white',
                        borderRadius: 5
                    }}>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>

                            <View style={{flexDirection: 'row', margin: 5}}>
                                <Image

                                    source={require('../../../assets/images/logo.png')}
                                />
                                <View style={{margin: 5}}>
                                    {this.renderItems('Name: ', item.employee_name)}
                                    {this.renderItems('Age: ', item.employee_age)}
                                    {this.renderItems('Salary: ', item.employee_salary)}

                                </View>

                            </View>

                            <TouchableWithoutFeedback

                                onPress={() => this.deleteId(item, index)}
                            >
                                <Image
                                    style={{width: 30, height: 30, margin: 10}}
                                    source={require('../../../assets/images/delete.jpg')}
                                />
                            </TouchableWithoutFeedback>
                        </View>

                    </View>
                }
            />

        </View>
    }


    _onItemPress(item) {

        //alert(JSON.stringify(item))
    }

    deleteId(item, index) {
        Alert.alert(
            'Employee',
            'Are you sure you want to delete this record?',
            [
                {
                    text: 'No',
                },
                {
                    text: 'Yes', onPress: () => {
                        const {deleteEmployee} = this.props;
                        this.setState({loading: true})
                        deleteEmployee(item.id).then((res) => {
                            console.log("Response", res.payload);
                            if (res && res.payload && res.payload.data && res.payload.data.status === "success") {
                                this.setState({loading: false})
                                let list = this.state.employeesList
                                list.splice(index, 1);
                                this.setState({employeesList: list})

                            } else {
                                console.log("res err", res)
                                this.setState({loading: false})
                            }

                        })

                    }
                },
            ],
            {cancelable: false},
        );

    }

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        console.log("shouldComponentUpdate-->>", nextProps)
        return true
    }

}


const stateToProps = (state) => ({
    employeeList: state.HomeReducer.employeeList,
});

const dispatchToProps = (dispatch) => {

    return {
        getEmployeesList: () => dispatch(actions.getEmployeesList()),
        deleteEmployee: (data) => dispatch(actions.deleteEmployee(data))

    }
}

const Container = connect(stateToProps, dispatchToProps)(HomeScreen);
export default Container;

