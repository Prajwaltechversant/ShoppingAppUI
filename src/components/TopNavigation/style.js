import { StyleSheet } from "react-native"
import coloPalette from "../../assets/Theme/coloPalette"

const styles = StyleSheet.create({
  container:{
    backgroundColor:coloPalette.light.primary,
    height:80,
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center',
    padding:13,
    width:'100%'
    
  },
  btn:{
    // fontSize:100,
    fontWeight:'900',
    color:'white',
    textAlign:'center'
  }
})


export default styles