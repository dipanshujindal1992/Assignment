import {StyleSheet} from 'react-native'
import {Colors} from "../../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    input: {
        height: 40,
        width: '70%',
        alignSelf: 'center',
        marginTop: 10,
        color: 'black',
    },
    bottomLineView: {
        height: 1,
        width: '70%',
        alignSelf: 'center',
        backgroundColor: Colors.purple,
    }

});
export default styles
