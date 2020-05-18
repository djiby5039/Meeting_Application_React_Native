import React from 'react';
import { 
  StyleSheet,
  View, 
  Dimensions, FlatList, Text} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import VoisinRow from './MeetingRow';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const actions = [
  {
    text: "Add",
    icon: require("./assets/add_white.png"),
    name: "bt_add",
    position: 1
  }
];

export default class ListMeeting extends React.Component {

  constructor(props){
    super(props);
    this.navigation = props.navigation;
    this.state = {
      voisins: []
    }
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch("https://demo7105857.mockable.io/")
    .then(response => response.json())
    .then((responseJson)=> {
      console.log('We are here');
      this.setState({
        voisins: responseJson
      })
    })
    .catch(error => console.log(error)) //to catch the errors if any
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.voisins}
          renderItem={
            ({item}) => <VoisinRow
            name={item.name}
            image_url={item.image_url}
            navigation={this.navigation}
          />
          }
          >
        </FlatList>
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            if(name === 'bt_add') {
              this.navigation.navigate('Add');
            }
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4F5FC',
    alignItems: 'center',
    flexDirection: 'row'
  },

  list: {
    
  }
});