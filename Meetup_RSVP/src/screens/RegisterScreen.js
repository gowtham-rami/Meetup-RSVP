/*Screen to register the user*/
import React, { Component } from 'react'
import { StyleSheet, Button, View, TextInput } from "react-native";

import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_age: 0,
      user_DOB: "",
      user_Locality: "",
      no_Guests: 0,
      user_address: "",

      isLoading: false,
    };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};

  }

  //focus to next Field
  focusNextField(id) {
    this.inputs[id].focus();
  }

  register_user_validation = () => {

    const { user_name } = this.state;
    const { user_age } = this.state;
    const { user_DOB } = this.state;
    const { user_Locality } = this.state;
    const { no_Guests } = this.state;
    const { user_address } = this.state;
    //alert(user_name, user_contact, user_address);
    if (user_name) {
      if (user_age) {

        if (user_DOB) {
          if (user_Locality) {
            //Save it to Database
            if (no_Guests) {

              if(no_Guests > 2){
                alert("please enter no guests between 0-2");
              }else{
                if (user_address) {
                 
                  alert("registration sucessful");
  
                } else {
                  alert("please enter address to proceed");
  
  
                }
              }

              

            } else {
              //this.setState({isLoading: false})
              alert("please enter no guests between 0-2");
            }
          } else {
            //this.setState({isLoading: false})
            alert("Please Enter the Locality");
          }
        } else {
          //this.setState({isLoading: false})
          alert("Please Enter D O B");
        }

      } else {
        //this.setState({isLoading: false})
        alert("Please Enter Age");
      }
    } else {
      //this.setState({isLoading: false})
      alert("Please Enter the Name");
    }
  };


  render() {
    return (
      <View style={styles.container}>

        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={styles.container}>
              <View style={styles.container}>
                <TextInput style={styles.inputText}
                  placeholder="Name"
                  onChangeText={user_name => this.setState({ user_name })}
                  autoCapitalize="words"
                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    this.focusNextField("two");
                  }}
                  returnKeyType={"next"}
                  ref={input => {
                    this.inputs["one"] = input;
                  }}
                />
                <TextInput style={styles.inputText}
                  placeholder="age"
                  onChangeText={user_age =>
                    this.setState({ user_age })
                  }
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  returnKeyType={"next"}
                  maxLength={3}
                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    this.focusNextField("three");
                  }}
                  returnKeyType={"next"}
                  ref={input => {
                    this.inputs["two"] = input;
                  }}
                />
                <TextInput style={styles.inputText}
                  placeholder="D O B"

                  onChangeText={user_DOB => this.setState({ user_DOB })}

                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    this.focusNextField("four");
                  }}
                  returnKeyType={"next"}
                  ref={input => {
                    this.inputs["three"] = input;
                  }}
                />
                <TextInput style={styles.inputText}
                  placeholder="Locality"
                  autoCapitalize="none"

                  onChangeText={user_Locality =>
                    this.setState({ user_Locality })
                  }
                  blurOnSubmit={true}
                  returnKeyType={"next"}
                  ref={input => {
                    this.inputs["four"] = input;
                  }}
                />
                <TextInput style={styles.inputText}
                  placeholder="No of guests"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  maxLength={1}
                  onChangeText={no_Guests =>
                    this.setState({ no_Guests })
                  }
                  blurOnSubmit={true}
                  returnKeyType={"next"}
                  ref={input => {
                    this.inputs["five"] = input;
                  }}
                />
                <TextInput style={styles.AddressinputText}
                  placeholder="Address"
                  autoCapitalize="none"
                  maxLength={50}
                  multiline={true}
                  onChangeText={user_address =>
                    this.setState({ user_address })
                  }
                  blurOnSubmit={true}
                  returnKeyType={"done"}
                  ref={input => {
                    this.inputs["six"] = input;
                  }}
                />
              </View>

              <View>
                <Button
                  onPress={() => this.register_user_validation()}
                  title="Register"
                  color="#4B0082"
                />
              </View>
            </View>
          </KeyboardAvoidingView>
          {/* <KeyboardAwareScrollView>
            </KeyboardAwareScrollView> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 10,

  },
  inputText: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    borderColor: "#808080",
    borderWidth: 2
  },
  AddressinputText: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    height: 100,
    borderColor: "#808080",
    borderWidth: 2
  },

});
