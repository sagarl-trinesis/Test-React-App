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

class Home extends Component {
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
          backgroundColor: "rgba(38,42,56,1)"
        }}
      >
        {/* View for homeTop */}
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            flex: 1
          }}
        >
          <ImageBackground
            source={require("../../../assets/Images/HomeBackground/MobileTop.png")}
            style={{
              width: "122%",
              height: "107%",
              marginTop: hp("-6%"),
              marginLeft: wp("-6%"),
              resizeMethod: "auto"
            }}
          >
            <View
              style={{
                flex: 0.2,
                width: wp("100%"),
                backgroundColor: "rgba(38,42,56,0.5)",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: wp("6%"),
                marginTop: hp("6%")
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "transparent",
                  justifyContent: "center",
                  marginLeft: wp("6%"),
                  width: wp("5%"),
                  height: hp("5%")
                }}
                onPress={() => Actions.drawerOpen()}
              >
                <Image
                  style={{
                    width: wp("7%"),
                    resizeMode: "contain"
                  }}
                  source={require("../../../assets/Icons/menu.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "transparent",
                  justifyContent: "center",
                  marginRight: wp("5%")
                }}
                disabled
              >
                <Image
                  style={{
                    width: wp("12%"),
                    height: hp("6%"),
                    resizeMode: "contain"
                  }}
                  source={require("../../../assets/Images/logos/logo.png")}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.8,
                width: wp("100%"),
                backgroundColor: "rgba(38,42,56,0.5)",
                marginLeft: wp("8%"),

                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: "ProximaNova-Black",
                  fontSize: 30,
                  lineHeight: 35,
                  letterSpacing: 0,
                  fontWeight: "900",
                  color: "#75bd2a",
                  marginTop: hp("-2%"),
                  marginLeft: wp("14%")
                }}
              >
                Horace,{"\n"}
                <Text style={{ color: "#c0c0c0" }}>
                  You have no{"\n"}pending pickups{"\n"}at this time.
                </Text>
              </Text>
            </View>
          </ImageBackground>
        </View>
        {/* End View for homeTop */}
        {/* View for homeBottom */}
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(38,42,56,1)",
            flex: 1
          }}
        >
          <ImageBackground
            source={require("../../../assets/Images/HomeBackground/MobileBottom.png")}
            style={{
              width: "120%",
              height: "110%",
              resizeMode: "cover",
              marginLeft: wp("-13%")

              // paddingRight: wp("-20%")
            }}
          >
            <View
              style={{
                flex: 1,
                marginLeft: wp("13%"),
                backgroundColor: "rgba(38, 45, 65,0.4)",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: "ProximaNova-Black",
                  fontSize: 30,
                  lineHeight: 35,
                  letterSpacing: 0,

                  color: "#c0c0c0",
                  marginLeft: wp("16%")
                }}
              >
                No Available{"\n"}Pickups
              </Text>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 17,
                  lineHeight: 24,

                  fontFamily: "ProximaNova-Semibold",
                  marginLeft: wp("16%")
                }}
              >
                There are currently{" "}
                <Text style={{ color: "#75bd2a" }}>0 pickups</Text>
                {"\n"}available for acceptance.
              </Text>
            </View>
          </ImageBackground>
        </View>
        {/* End View for homeBottom */}
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
)(Home);
