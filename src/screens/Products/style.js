import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 5,
        flex: 1

    },
    itemName:{
        fontSize:35,
        color:'black',
        fontWeight:'800'
    },
    headerContainer: {
        padding: 20,
        width: '100%',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5
    },
    loremText: {
        fontSize: 15,
        color: 'black',

    },
    price: {
        fontSize: 25,
        color: 'red',
        fontWeight:'900'
    },
    priceFooter:{
        padding:10,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    imagesArray:{
        width:120 ,
        height:80,
        marginRight:10,
        borderRadius:18
    },
    moreContent:{
        padding:15
    },
    descriptionContainer:{
        backgroundColor:'#F3F1EE', 
        padding:5, 
        borderRadius:5
    }
}
)

export default styles