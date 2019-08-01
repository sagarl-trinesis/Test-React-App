/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Modal
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import { tsConstructorType } from "@babel/types";
import { connect } from "react-redux";
import ForgotPasswordView from "./ForgotPasswordView";
import EmailAknowledgement from "./EmailAknowledgement";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Router, Scene, Actions } from "react-native-router-flux";

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      password: "",
      encodedPassword: "",
      forgetPasswordModalVisibleState: false,
      emailsend: false
    };
  }

  encodePassword = text => {
    var textlen = text.length;
    var passlen = this.state.password.length;
    if (text.length > passlen) {
      if (text.substring(text.length - 1, text.length) !== "*") {
        this.setState({
          password:
            this.state.password + text.substring(text.length - 1, text.length)
        });

        passlen++;
      } else {
        this.setState({
          password: this.state.password.substring(
            0,
            this.state.password.length - 1
          )
        });
        passlen--;
      }
    } else {
      this.setState({
        password: this.state.password.substring(0, textlen)
      });
    }

    if (textlen == passlen && passlen > 0) {
      this.setState({
        encodedPassword: this.state.encodedPassword + "*"
      });
    } else if (textlen < passlen && passlen > 0) {
      this.setState({
        encodedPassword: this.state.encodedPassword.substring(0, textlen)
      });
    }
    if (passlen == 0) {
      this.setState({
        encodedPassword: ""
      });
    }
  };

  // method for hide forgot password modal
  forgetPasswordModalVisibleStateHide = () => {
    this.setState({
      forgetPasswordModalVisibleState: false
    });
  };

  // method for show forgot password modal
  forgetPasswordModalVisibleStateShow = () => {
    this.setState({
      forgetPasswordModalVisibleState: true
    });
    this.emailSendStateHide();
  };

  emailSendStateShow = () => {
    this.setState({
      emailsend: true
    });
  };

  emailSendStateHide = () => {
    this.setState({
      emailsend: false
    });
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-start",
          backgroundColor: "rgba(51,54,72,0.5)"
        }}
      >
        <ImageBackground
          source={require("../../../assets/Images/Background/LoginBackground.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(46,46,67,0.55)"
            }}
          >
            {/* Keyboard Avoiding View position for show input text  */}
            <KeyboardAvoidingView behavior="position" enabled>
              {/* View for goodr logo align to right */}
              <View style={{ height: "10%", flexDirection: "row-reverse" }}>
                <Image
                  style={{
                    width: 100,
                    resizeMode: "contain",
                    marginTop: hp("1.5%"),
                    marginRight: wp("5%")
                  }}
                  source={require("../../../assets/Images/logos/Goodr_logo.png")}
                />
              </View>
              {/* End View for goodr logo align to right */}
              {/* View for logo and bold text */}
              <View style={{ marginLeft: wp("11%"), marginTop: hp("3%") }}>
                <Image
                  style={{
                    width: 57,
                    height: 65,
                    resizeMode: "contain",
                    margin: 0,
                    marginBottom: 0
                  }}
                  source={require("../../../assets/Images/logos/logo.png")}
                />
                <Text
                  style={{
                    fontFamily: "ProximaNova-Black",
                    fontSize: 43,
                    lineHeight: 42,
                    letterSpacing: 0,
                    fontWeight: "900",
                    color: "#ffffff",
                    marginTop: hp("0%")
                  }}
                >
                  WASTED{"\n"}FOOD{"\n"}IS WASTED{"\n"}MONEY.
                </Text>
              </View>
              {/* View for logo and bold text */}
              {/* End View for email and pass field with fortget password link */}
              <View
                style={{
                  marginLeft: wp("11%"),
                  marginRight: wp("10%"),
                  marginTop: hp("5%"),
                  backgroundColor: "transparent",
                  justifyContent: "space-around"
                }}
              >
                <Text
                  style={{
                    fontFamily: "ProximaNova-Extrabld",
                    fontSize: hp("1.5%"),
                    fontWeight: "700",
                    color: "#ffffff",
                    letterSpacing: 0.5
                  }}
                >
                  Email Address
                </Text>
                <TextInput style={styles.TextInputStyle} />
                <Text
                  style={{
                    fontFamily: "ProximaNova-Extrabld",
                    fontSize: hp("1.5%"),
                    fontWeight: "700",
                    color: "#ffffff",
                    marginTop: hp("5%"),
                    letterSpacing: 0.5
                  }}
                >
                  Password
                </Text>
                <TextInput
                  style={styles.TextInputStyle}
                  onChangeText={text => this.encodePassword(text)}
                  value={this.state.encodedPassword}
                />
                <Text
                  style={{
                    fontFamily: "ProximaNova-Extrabld",
                    fontSize: hp("1.5%"),
                    fontWeight: "bold",
                    color: "#75bd2a",
                    fontStyle: "italic",

                    letterSpacing: 0.5
                  }}
                  onPress={() => this.forgetPasswordModalVisibleStateShow()}
                >
                  Forgot Password?
                </Text>
              </View>
              {/* End View for email and pass field with fortget password link */}
              {/* View for get started button */}
              <View
                style={{
                  marginLeft: wp("10%"),
                  marginTop: hp("10%"),
                  backgroundColor: "transparent",
                  bottom: 0,
                  left: 0,
                  right: 0
                }}
              >
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#75bd2a",
                    padding: 12,
                    borderRadius: 20,
                    width: wp("80%")
                  }}
                  onPress={() => Actions.home()}
                >
                  <Text
                    style={{
                      fontFamily: "ProximaNova-Extrabld",
                      fontSize: 15,
                      fontWeight: "900",
                      color: "#ffffff",
                      letterSpacing: 1
                    }}
                  >
                    Get Started
                  </Text>
                </TouchableOpacity>
              </View>
              {/* End View for get started button */}
            </KeyboardAvoidingView>
            {/* End Keyboard Avoiding View position for show input text  */}
            <Modal
              visible={this.state.forgetPasswordModalVisibleState}
              animationType="slide"
              onRequestClose={() => this.forgetPasswordModalVisibleStateHide()}
              transparent={true}
            >
              {this.state.emailsend == false ? (
                <ForgotPasswordView
                  forgetPasswordModalVisibleStateHide={() =>
                    this.forgetPasswordModalVisibleStateHide()
                  }
                  emailSendStateShow={() => this.emailSendStateShow()}
                />
              ) : (
                <EmailAknowledgement
                  forgetPasswordModalVisibleStateHide={() =>
                    this.forgetPasswordModalVisibleStateHide()
                  }
                />
              )}
            </Modal>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return { counter: state.counter };
}
function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
    decreaseCounter: () => dispatch({ type: "DECREASE_COUNTER" })
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  TextInputStyle: {
    borderBottomWidth: 1,
    borderColor: "#dfdfdf",
    fontFamily: "ProximaNova-Black",
    fontWeight: "300",
    fontSize: hp("2.5%"),
    color: "#ffffff",
    padding: 5,
    paddingLeft: 0,
    marginTop: hp("1")
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
