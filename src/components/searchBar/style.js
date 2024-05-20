import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'red',
        
    },
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
        , padding: 10,
        borderBottomRightRadius: 35
    },
    searchbar: {
        color: 'red',
        width: '90%'
    },
    filtericon: {
        color: 'red',
        backgroundColor: 'red',
        fontSize: 10
    }
})


export default styles