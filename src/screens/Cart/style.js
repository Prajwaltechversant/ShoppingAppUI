import { StyleSheet } from "react-native"
import coloPalette from "../../assets/Theme/coloPalette"


const styles = StyleSheet.create({

    container: {

    },
    formContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    inputField:{
            width:'35%',
    },
    heading:{
        color:coloPalette.light.primary,
        fontSize:20,
        textAlign:'center',
        fontFamily:'PlayfairDisplay-Black'
        
    }
})

export default styles