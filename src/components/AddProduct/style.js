import { StyleSheet } from "react-native";

const styles = (screenContext, width, height, edit) => StyleSheet.create({
  root: {
    // position:'fixed',
    // bottom:edit ? 0 :-460,
    // zIndex:1000,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'absolute',
    right: 10,
    left: 1,
    top: screenContext.windowisPortrait ? 0 : -100

  },
  inputBoxContainer: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
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
    marginTop: screenContext.windowisPortrait ? 15 : 2,
    alignSelf: 'center',
    padding: 30

  },
  inputBox: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'yellow',
    color:'red'
  },
  modalView: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    // padding: 55,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%'
  },
  textStyle: {
    color: 'black',
    fontSize: 20
  },
  btn: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center'
  },
  uploadBtn: {
    justifyContent:'center',
    alignItems:'center',
    
  }
})

export default styles