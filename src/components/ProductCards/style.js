import { StyleSheet } from "react-native";
import coloPalette from "../../assets/Theme/coloPalette";

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 5,
        width: 180,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginVertical: 10,
        marginHorizontal:5,
        backgroundColor:'white',
        
    },
    cardContent: {
        backgroundColor: 'transparent', position: 'absolute',
        bottom: 25,
        position:'relative'

    },
    cardImage: {
        height:150
    },
    text: {
        color: 'red',
    },
    cardContentView: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
    },
    cardActions: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

        
    },
    likebtn:{
            color:coloPalette.light.primary,
            position:'absolute',
            right:-10,
            
    },
    rating: {
        flexDirection: 'row',
        margin: 5
    },
    trashIcon:{
        position:'absolute',
        right:0,
        top:5,
        borderRadius:100,
        padding:5,
        // backgroundColor:coloPalette.light.tertiary
        
    }

})

export default styles