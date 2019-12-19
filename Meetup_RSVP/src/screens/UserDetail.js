
//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components
 
export default class UserDetail extends Component {
  constructor(props) {
    super(props);
this.state ={

  first_name : "",
  Locality : "",
  no_persons : 0,
  age : 0,
  DOB : ""



}
  
  }

  componentDidMount(){

    const { navigation } = this.props;
    UserData = navigation.getParam("UserList");
    this.setState({ first_name: UserData.first_name });
    this.setState({ Locality: UserData.Locality });
    this.setState({ no_persons: UserData.no_persons });
    this.setState({ age: UserData.age });
    this.setState({ DOB: UserData.DOB });



  }
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Name       : this.state.first_name </Text>
        <Text style={{ fontSize: 23 }}> Localityl  : this.state.Locality </Text>
        <Text style={{ fontSize: 23 }}> no_persons : this.state.no_persons </Text>
        <Text style={{ fontSize: 23 }}> age        : this.state.age </Text>
        <Text style={{ fontSize: 23 }}> DOB        : this.state.DOB </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});