
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop:60,
      paddingHorizontal:15,
      backgroundColor:'black'
    },
    inputContainer:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      paddingBottom: 20,
      marginBottom:10,
      borderBottomWidth: 2,
      borderColor: 'white'
    },
    input:{
      borderWidth:1,
      width: 270,
      height: 56,
      borderColor:'black',
      borderRadius: 10,
      margin: 10,
      padding:10,
      backgroundColor:'white',
    },
    addButton:{
      flex: 1,
    },
    taskList:{
      flex:8,
      paddingTop: 10,
    },
    taskContainer:{
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      borderWidth: 1,
      borderRadius: 10,
      marginVertical:10,
      backgroundColor:'#242424'
    },
    task:{
      flex:6,
      fontSize:18,
      color: 'white'
    }
  });

export default styles;