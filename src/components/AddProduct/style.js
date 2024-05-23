import { StyleSheet } from "react-native";
import coloPalette from "../../assets/Theme/coloPalette";

const styles = (screenContext, width, height, edit) => StyleSheet.create({
  root: {
    // position:'fixed',
    // bottom:edit ? 0 :-460,
    // zIndex:1000,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    right: 10,
    left: 1,
    top: screenContext.windowisPortrait ? 0 : -100

  },
  inputBoxContainer: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 50,
    color:coloPalette.light.tertiary
  },
  IconButton: {
    borderRadius: 12,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: screenContext.windowisPortrait ? 20 : 2,
    alignSelf: 'center',
    padding: 20

  },
  inputBox: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor:coloPalette.light.tertiary,
    color:'red'
  },
  modalView: {
    backgroundColor:coloPalette.light.primary,
    borderRadius: 23,
    // padding: 55,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '80%',
  },
  textStyle: {
    color: coloPalette.light.tertiary,
    fontSize: 20
  },
  uploadBtns:{
    flexDirection:'row'
  },
  btn: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  uploadContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems:'center'
  },
  uploadBtn: {
    justifyContent:'center',
    alignItems:'center',
    // borderWidth:1

    
  }
})

export default styles