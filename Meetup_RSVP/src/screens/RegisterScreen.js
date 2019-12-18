/*Screen to register the user*/
import React, { Component } from 'react'
import { StyleSheet, Button, View, Image,TextInput } from "react-native";

import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
//import { TextField } from "react-native-material-textfield";

// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Text Input Focus Followed from the Below site
// https://medium.com/reactnative/tabbing-through-input-fields-ef283f923ab1

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_email_id: "",
      user_pin: 0,
      user_confirm_pin: 0,
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

    const login_status = 0;
    const { user_name } = this.state;
    const { user_email_id } = this.state;
    const { user_pin } = this.state;
    const { user_confirm_pin } = this.state;
    //alert(user_name, user_contact, user_address);
    if (user_name) {
      if (user_email_id) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(user_email_id) === true) {
          if (user_pin && user_pin.length == 4) {
            if (user_confirm_pin && user_confirm_pin.length == 4) {
              //Save it to Database
              if (user_pin == user_confirm_pin) {
                this.setState({ isLoading: true })
                var pin = user_pin;
                this.RegisterUser(user_name, user_email_id, pin, login_status);
                console.log("Pin=" + pin);
              } else {
                //this.setState({isLoading: false})
                alert("Pin and Confirm Pin doesn't Match");
              }
            } else {
              //this.setState({isLoading: false})
              alert("Please Enter the Confirm Pin with four digits");
            }
          } else {
            //this.setState({isLoading: false})
            alert("Please Enter the pin with four digits");
          }
        } else {
          //this.setState({isLoading: false})
          alert("Please Enter the Valid Email Address");
          return false;
        }
      } else {
        //this.setState({isLoading: false})
        alert("Please Enter the Email Address");
      }
    } else {
      //this.setState({isLoading: false})
      alert("Please Enter the Name");
    }
  };

  // async RegisterUser(user_name, user_email_id, pin, login_status) {
  //   isUserInfoTablePresent = await UserInformationTable.isUserInfoTablePresent();
  //   if (isUserInfoTablePresent) {
  //     isEmailPresent = await UserInformationTable.fetchUserByMail(user_email_id);
  //     if (isEmailPresent == "") {
  //       UserInfoInsert = await UserInformationTable.insertUserProfile(user_name, user_email_id, pin, login_status);
  //       if (UserInfoInsert) {
  //         this.setState({ isLoading: false })
  //         //           Alert.alert("Registration Successful", "",
  //         //             [{ text: "OK", onPress: this.onRegisterBTN }],
  //         //             { cancelable: false });
  //         this.onRegisterBTN();
  //         // this.setState({isLoading: false});
  //         this.setState.isLoading = false;
  //         alert("Registration Successful", "",
  //           [{ text: "OK", onPress: this.onRegisterBTN() }],
  //           { cancelable: false });
  //       } else {
  //         this.setState({ isLoading: false });
  //         alert("Please try again!");
  //       }
  //     } else {
  //       this.setState({ isLoading: false });
  //       alert("User email already exists");
  //     }
  //   } else {
  //     createUserInfoTable = await UserInformationTable.createUserInfoTable();
  //     createUserStatusTrigger = await UserInformationTable.createUserStatusTrigger();
  //     UserInfoInsert = await UserInformationTable.insertUserProfile(user_name, user_email_id, pin, login_status);
  //     if (UserInfoInsert) {
  //       this.setState({ isLoading: false })
  //       this.onRegisterBTN();
  //       // Alert.alert(
  //       //   "Added Successfully", "",
  //       //   [{ text: "OK", onPress: this.onRegisterBTN }],
  //       //   { cancelable: false }
  //       // );

  //       // this.onRegisterBTN();
  //       alert(
  //         "Added Successfully", "",
  //         [{ text: "OK", onPress: this.onRegisterBTN() }],
  //         { cancelable: false }
  //       );
  //     } else {
  //       this.setState({ isLoading: false })
  //       alert("Please try again!");
  //     }
  //   }
  //   this.setState({ isLoading: false })
  // }

  onRegisterBTN = () => {
    //Redirect to Home Screen
    // this.props.navigation.state.params.RefreshList();
    this.setState({ isLoading: false });
    this.props.navigation.navigate("Login");

    // this.props.navigation.goBack(null);
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
                <TextInput style = {styles.inputText}
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
                <TextInput style = {styles.inputText}
                  placeholder="age"
                  onChangeText={user_email_id =>
                    this.setState({ user_email_id })
                  }
                  autoCapitalize="none"
                  returnKeyType={"next"}
                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    this.focusNextField("three");
                  }}
                  returnKeyType={"next"}
                  ref={input => {
                    this.inputs["two"] = input;
                  }}
                />
                <TextInput style = {styles.inputText}
                  placeholder="D O B"
                  keyboardType="number-pad"
                  onChangeText={user_pin => this.setState({ user_pin })}
                  maxLength={4}
                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    this.focusNextField("four");
                  }}
                  returnKeyType={"next"}
                  ref={input => {
                    this.inputs["three"] = input;
                  }}
                />
                <TextInput style = {styles.inputText}
                  placeholder="Locality"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  maxLength={4}
                  onChangeText={user_confirm_pin =>
                    this.setState({ user_confirm_pin })
                  }
                  blurOnSubmit={true}
                  returnKeyType={"next"}
                  ref={input => {
                    this.inputs["four"] = input;
                  }}
                />
                <TextInput style = {styles.inputText}
                  placeholder="No of guests"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  maxLength={4}
                  onChangeText={user_confirm_pin =>
                    this.setState({ user_confirm_pin })
                  }
                  blurOnSubmit={true}
                  returnKeyType={"next"}
                  ref={input => {
                    this.inputs["five"] = input;
                  }}
                />
                <TextInput style = {styles.inputText}
                  placeholder="Address"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  maxLength={4}
                  onChangeText={user_confirm_pin =>
                    this.setState({ user_confirm_pin })
                  }
                  blurOnSubmit={true}
                  returnKeyType={"done"}
                  ref={input => {
                    this.inputs["six"] = input;
                  }}
                />
              </View>

              {/* <TextInput
              style={styles.inputText}
              placeholder="Enter the UserName"
              onChangeText={user_name => this.setState({ user_name })}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Enter the Email-ID"
              onChangeText={user_email_id => this.setState({ user_email_id })}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Enter the Pin"
              autoCapitalize="none"
              keyboardType="number-pad"
              returnKeyType="done"
              onChangeText={user_pin => this.setState({ user_pin })}
              maxLength={4}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Enter the Confirm Pin"
              autoCapitalize="none"
              keyboardType="number-pad"
              returnKeyType="done"
              maxLength={4}
              onChangeText={user_confirm_pin =>
                this.setState({ user_confirm_pin })
              }
            /> */}


              {/* {
        this.state.isLoading ?  <ActivityIndicator style={{}}
        size="large" color="green" /> : null
      } */}

              <View style={styles.button_container}>
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
    padding : 20,
  },
  inputText: {
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    width:200,
    alignItems: "center",
    borderColor: "#808080",
    borderWidth: 2
  },
  image_container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  button_container: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    padding: 12,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  view_container: {
    margin: 5
  }
});
