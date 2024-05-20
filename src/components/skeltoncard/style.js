import { StyleSheet } from "react-native";

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
        marginHorizontal:5
    },
    cardContent: {
        backgroundColor: 'transparent', position: 'absolute',
        bottom: 70,

    },
    cardImage: {},
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
        padding: 5
    },
    rating: {
        flexDirection: 'row',
        margin: 5
    }

})

export default styles