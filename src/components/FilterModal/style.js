import { StyleSheet } from "react-native"
import coloPalette from "../../assets/Theme/coloPalette"

const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor:'white'
    },
    modalInner: {
        width: '100%',
        height: 300,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    modalCloseBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        width: 20,
        height: 20,
        marginBottom: 5,
        backgroundColor:'tranparent',
        position:'absolute',
        right:15,
        top:15
    },
    modalContent: {
        position:'relative',
        flex: 1,
        flexDirection: 'row',

    },
    filterMenu: {
        flex: 1,
        backgroundColor:coloPalette.light.tertiary,
        padding:20


    },filtericon:{
        color:'red'
    }
    , filterContainer: {
        flex: 3,
    },
    filterMenuText:{
        color:'black',
    },
    filterMenuOption:{
        marginVertical:10,
        
    },
    btnContainer:{
        flexDirection:'row',
        gap:5,
        justifyContent:'center',
    }
})

export default styles