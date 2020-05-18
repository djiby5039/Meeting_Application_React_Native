import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  StyleSheet} from 'react-native';
import ListMeeting from './ListMeeting';
import DetailMeeting from './DetailMeeting';
import AddMeeting from './AddMeeting';
import datepicker from './datepicker';
import Home from './Home';
import Presentation from './Presentation';
import Affiche  from  './Affiche';

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Home}/>
          <Stack.Screen name="List_Meetings" component={ListMeeting}/>
          <Stack.Screen name="Reunion"  component={Affiche}/>
          <Stack.Screen name="Detail" component={DetailMeeting} />
          <Stack.Screen name="Add" component={AddMeeting} />
          <Stack.Screen name="date"  component={datepicker}/>
          <Stack.Screen name="A_propos"  component={Presentation}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

});