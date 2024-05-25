import { StyleSheet } from "react-native"


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
        backgroundColor:'gray',

    },
    cardContent: {
        backgroundColor: 'transparent', position: 'absolute',
        bottom: 25,
        position:'relative'

    },
    cardImage: {
        height:150,
        backgroundColor:'#C7C8CC',
        width:160,
        borderRadius:20
    },
    text: {
        backgroundColor:'gray',
        alignSelf:'flex-end'
    },
    cardContentView: {
        justifyContent: 'flex-end',
        width: '100%',
        flexDirection: 'row',
        backgroundColor:'#C7C8CC',
        marginRight:40
    },
    cardActions: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#B4B4B8',
        // gap:5


        
    },
    likebtn:{
            // color:coloPalette.light.primary,
            position:'absolute',
            right:-10,
            
    },
    rating: {
        // flexDirection: 'row',
        justifyContent:'flex-end',
        margin: 5,
        backgroundColor:'#B4B4B8',
        alignItems:'flex-end', 
        alignSelf:'flex-end'

    },
    trashIcon:{
        position:'absolute',
        right:0,
        top:5,
        borderRadius:100,
        padding:5,
        backgroundColor:'gray',
        justifyContent:'flex-end',
        alignSelf:'flex-end'
        // backgroundColor:coloPalette.light.tertiary
        
    }

})


export default styles