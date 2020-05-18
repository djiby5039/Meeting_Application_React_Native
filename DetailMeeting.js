import React from 'react';
import { 
  StyleSheet, Text, 
  View, Image, TextInput, 
  Dimensions, TouchableOpacity } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class DetailMeeting extends React.Component {

  constructor(props) {
    super(props);
    this.name = props.route.params.name;
    this.image_url = props.route.params.image_url;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: this.image_url,
          }}
          />

        <TextInput
          placeholder='Theme de la reunion'
          value={this.name}
          style={styles.simpleInput}
          />
         <Text style={styles.simpleInput}>
           La Salle dakar est une salle de 256 places
         </Text>
        

         <Text style={styles.simpleInput}>
           La Salle Zinguinchor  est une salle de 307 places
         </Text>

         <Text style={styles.simpleInput}>
           La Salle Tamba  est une salle de 400 places
         </Text>

         <Text style={styles.simpleInput}>
           La Salle Saint Louis  est une salle de 550 places
         </Text>

         <Text style={styles.simpleInput}>
           La Salle kolda  est une salle de 150 places
         </Text>

         <Text style={styles.simpleInput}>
           La Salle matam  est une salle de 1000 places
         </Text>

         
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  simpleInput: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
    borderColor: '#0000FF', 
    paddingHorizontal: 10,
    borderWidth: 1
  },

  textAreaInput: {
    width: width - 40,
    marginTop: 30,
    height: 100, 
    borderColor: '#0000FF', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  buttonSave: {
    backgroundColor: '#A72518',
    borderRadius: 20,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: 'white'
  }
});
