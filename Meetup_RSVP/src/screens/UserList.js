//This is an example code to Add Search Bar Filter on Listview//
import React, { Component } from 'react';
import customData from '../JsonData/MOCK_DATA.json';
//import react in our code.

import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
//import all the components we are going to use.

export default class App extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: '' };
    this.arrayholder = [];
  }

  componentDidMount() {
    this.setState(
      {
        isLoading: false,
        dataSource: customData
      },
      function() {
        this.arrayholder = customData;
      }
    );
  }


  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.first_name ? item.first_name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  clickUserList = (item) => {

    this.props.navigation.navigate("userDetail",{UserList: item});
    

    // if (visibleParam != 'Visibletype') {
    //     this.onAddButton(item);
    // }
  }
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Users"
        />
        <FlatList
          data={this.state.dataSource}
        
          renderItem={({ item }) => (<TouchableOpacity
            onPress={this.clickUserList.bind(this, item)} >
            <View style={styles.ContainerOutside}
                key={item.id}>
                <View>
                    <Text>UserName: {item.first_name}</Text>
                    <Text>Locality: {item.Locality}</Text>
                    
                </View>
            </View>
        </TouchableOpacity>)}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 30,
    padding: 10,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  ContainerOutside: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#808080",
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    flexDirection: 'row'
},
});