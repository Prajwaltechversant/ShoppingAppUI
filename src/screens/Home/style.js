import { StyleSheet } from 'react-native'
import coloPalette from '../../assets/Theme/coloPalette'

// const width = dim
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  topContainer: {
  },
  contentContainer: {
    flex: 1,
    backgroundColor: coloPalette.light.tertiary,
    borderTopLeftRadius: 40, 
    justifyContent:'center',
    alignItems:'center',
    marginTop:-30,
    
  },
  addContainer: {
    position: 'absolute',
    bottom: 0,
    right: 1,
  },
})

export default styles

