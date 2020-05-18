import React, { Component } from "react";
import { StyleSheet,Button, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";


export default class DateTimePickerTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

  render() {
    return (
       <View style={styles.container}>
          <Button title="Cliquer pour choisir la date" onPress={this.showDateTimePicker} />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
       </View>
        
     
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#B4F5FC',
     alignItems: 'center',
     marginTop: 50,
     
   },
})
