import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import ListView from "deprecated-react-native-listview";




export default class Affiche extends React.Component {



  constructor(props){
    super(props);
    state = {
      theme: '',
        salle: '',
        adresse: '',
        meeting: '',
        isLoading:true,
    }
   
    }

    Action_Click(name){
      Alert.alert(name)
    }
  
  componentDidMount(){
    return fech('http://192.168.1.27/Projet_React/affiche.php')
           .then((response)=> response.json())
           .then((response) => {
             let ds = new ListView.DataSource({
               rowHasChanged:(r1,r2) => r1 !== r2});
             this.setState({ isLoading:false,
                          dataSource: ds.cloneWithRows(responseJson)}),
                          function(){}
             });
             
  }



_conn = () => {


    fetch('http://192.168.1.27/Projet_React/affiche.php', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        "theme": this.state.theme,
        "salle": this.state.salle,
        "adresse": this.state.adresse,
        "meeting": this.state.meeting

        })
    }).then(response => {
  return response.json();
})
.then((response) => {
		console.log(response);
 }).catch((error) => {
    console.error(error);
    });

  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

render() {
   return (

	<View style={styles.container}>

    <ListView
       
       dataSource={this.state.dataSource}
       renderSeparator= {this.ListViewItemSeparator}
       renderRow= {(rowData)  =>
        <Text style={styles.container1}  onPress={this.Action_Click.bind(rowData.name)}>{rowData.name}</Text>
      }
      
    />

 
  </View>


 )}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#ffffff'
  },
   rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
      }
})