import React from 'react';
import { 
  StyleSheet, View, Text,} from 'react-native';




export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <Text>LAMZONE COMPANY</Text>
          <Text>Fondé en 2000, Lamzone est un site de commerce en ligne présent dans plus de 40pays.</Text>
          <Text>L’entreprise compte plus de 350 collaborateurs.</Text>
          <Text>Le chiffre d’affaires annuel de l’entreprise est de 12 millions d’euros.</Text>
          <Text>L’activité principale de l’entreprise est la vente de produits en ligne.</Text>
                                   
                                  <View>
                                    <Text style={styles.container1}>Nos Parties Prenantes</Text>
                                    <Text style={styles.container1}>Commanditaire : Francis R</Text>
                                    <Text style={styles.container1}>Manager projet : Alexandra S</Text>
                                    <Text style={styles.container1}>Équipe : Développeur</Text>
                                   </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4F5FC',
        },

        container1: {
              textAlign:"center"
          },

});