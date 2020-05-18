import React from 'react';
import { 
  StyleSheet, View,TouchableOpacity,Text,Button} from 'react-native';


 export default class Home extends React.Component {


  constructor(props){
    super(props);
   }
 
  render() {
   
    return (

    <View style={styles.container} >
         
        <TouchableOpacity style={styles.button1}  onPress={() => this.props.navigation.navigate('Add')} >
          <Text >Programmer Une reunion</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.button2}  onPress={() => this.props.navigation.navigate('List_Meetings')}>
          <Text>La liste des salles et details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button6}  onPress={() => this.props.navigation.navigate('Reunion')}>
          <Text>Liste des reunions Programmer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button4}  onPress={() => this.props.navigation.navigate('date')}>
          <Text>Choisir la date de la reunion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button5}  onPress={() => this.props.navigation.navigate('A_propos')} >
          <Text>A propos de nous</Text>
        </TouchableOpacity>
         </View> 
         
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4F5FC',
        
       },
    button1:{
      alignItems: "center",
       backgroundColor: "#DDDDDD",
      padding: 10,
      marginTop:70,
      fontSize:15
     
    },

    button2:{
      alignItems: "center",
       backgroundColor: "#DDDDDD",
      padding: 10,
      marginTop:40,
      fontSize:15
    },

    button3:{
      alignItems: "center",
       backgroundColor: "#DDDDDD",
      padding: 10,
      marginTop:30,
      fontSize:15
    },

    button4:{
      alignItems: "center",
       backgroundColor: "#DDDDDD",
      padding: 10,
      marginTop:30,
      fontSize:15
    },

    button5:{
      alignItems: "center",
       backgroundColor: "#DDDDDD",
      padding: 10,
      marginTop:50,
      fontSize:15
    },

    button6:{
      alignItems: "center",
       backgroundColor: "#DDDDDD",
      padding: 10,
      marginTop:60,
      fontSize:15
    },

   

});