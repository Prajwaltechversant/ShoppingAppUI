import { StyleSheet } from "react-native";





const styles = StyleSheet.create({


    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        color:'black'
    },
    formContainer: {
        backgroundColor: '#b1b9c7',
        margin: 20,
        padding: 40,
        width: "80%",
        height: 'auto',
        borderRadius: 30
    },
    inputLabel: {
        color: "black",
        fontSize: 20,
        fontWeight: '400'
    },
    inputBox: {
        backgroundColor: 'yellow',
        padding: 10,
        borderRadius: 20,
        marginVertical: 10,
        color:'black'
    },
    loginBox: {
        marginVertical:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    logintext: {
        marginLeft: 5,
        color: 'black',
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    loginButton: {
        marginLeft: 10,
    },
    signupBox: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        height: 45,
        borderRadius: 20
    }
})


export default styles;