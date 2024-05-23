import { StyleSheet } from "react-native"
import coloPalette from "../../assets/Theme/coloPalette"

const styles = StyleSheet.create({
    root: {
        backgroundColor: coloPalette.light.primary,
        
    },
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
        , padding: 10,
        borderBottomRightRadius: 35,
    },
    searchbar: {
        color: 'red',
        width: '90%'
    },
    // filtericon: {
    //     color: coloPalette.light.primary,
    //     backgroundColor: coloPalette.light.primary,
    //     fontSize: 10
    // }
})


export default styles