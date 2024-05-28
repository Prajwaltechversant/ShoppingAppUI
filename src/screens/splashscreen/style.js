import { StyleSheet } from "react-native"

const styles = (screenContext, width, height) =>
    StyleSheet.create({

        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height:'100%',
            width:'100%',
            backgroundColor:'white'
        },
        logo:{
            width:100,
            height:100
        }
    })


export default styles