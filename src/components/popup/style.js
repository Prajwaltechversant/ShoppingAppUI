import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderWidth:2,
    //     backgroundColor:'yellow',
    //     padding:50
    // },
    popupText: {
        color: 'black',
        fontSize:15, 
        fontWeight:'600',
        textAlign:'center'
    },
    modalView: {
        // margin: 20,

        // justifyContent: 'center',
        // borderWidth:2
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    modalInner:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        height:120, 
        width:300,
        paddingVertical:20,
                borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    content: {
        flexDirection: 'row',
        gap: 10,
        marginVertical:20

    },
})


export default styles