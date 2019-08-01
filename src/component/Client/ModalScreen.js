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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Actions } from "react-native-router-flux";

class ModalScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      password: "",
      encodedPassword: "",
      forgetPasswordModalVisibleState: false,
      emailsend: false
    };
  }

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
            <KeyboardAvoidingView behavior="position" enabled>
              <Text onPress={() => Actions.home()}>Home</Text>
              <Text onPress={() => Actions.login()}>Login</Text>
            </KeyboardAvoidingView>
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
)(ModalScreen);
