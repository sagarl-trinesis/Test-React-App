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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class ForgotPasswordView extends Component {
  constructor(props) {
    super();
    this.state = {
      retrievePasswordButtonState: true,
      email: ""
    };
  }

  changeText = text => {
    this.setState({
      email: text
    });
    if (text.length > 0) {
      this.setState({
        retrievePasswordButtonState: false
      });
    }
  };

  render() {
    return (
      //   <Modal
      //     visible={this.state.forgetPasswordModalVisibleState}
      //     animationType="slide"
      //     onRequestClose={() => this.forgetPasswordModalVisibleStateHide()}
      //     transparent={true}
      //   >
      // {/* View for Modal container */}
      <View
        style={{
          backgroundColor: "#ededed",
          width: wp("95%"),
          height: hp("57.5%"),
          marginLeft: wp("2.5%"),
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        {/* View for close icon */}
        <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              width: 25,
              height: 25,
              marginTop: hp("4.3%"),
              marginRight: wp("4.4%")
            }}
            onPress={() => this.props.forgetPasswordModalVisibleStateHide()}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain"
              }}
              source={require("../../../assets/Icons/closeIcon.png")}
            />
          </TouchableOpacity>
        </View>
        {/* End View for close icon */}
        {/* View for container form */}
        <View style={{ marginLeft: wp("8%"), justifyContent: "space-evenly" }}>
          <Text
            style={{
              fontFamily: "ProximaNova-Black",
              fontSize: 38,
              lineHeight: 38,
              letterSpacing: 0,
              fontWeight: "900",
              color: "#434756",
              marginTop: hp("3%")
            }}
          >
            Forgot{"\n"}Password
          </Text>
          <Text
            style={{
              fontFamily: "ProximaNova-Extrabld",
              fontSize: 13,
              lineHeight: 38,
              letterSpacing: 0,
              fontWeight: "900",
              color: "#434756",
              marginTop: hp("3%")
            }}
          >
            Enter your email address below
          </Text>
          <TextInput
            style={[
              styles.TextInputStyle,
              { borderColor: "#434756", width: "80%", color: "#434756" }
            ]}
            onChangeText={text => this.changeText(text)}
            value={this.state.email}
          />

          {/* View for Retrieve Password button */}
          <View style={{ marginTop: hp("10%"), backgroundColor: "transparent" }}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#75bd2a",
                padding: 10,
                borderRadius: 20,
                width: "60%"
              }}
              onPress={() => this.props.emailSendStateShow()}
              disabled={this.state.retrievePasswordButtonState}
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
                Retrieve Password
              </Text>
            </TouchableOpacity>
          </View>
          {/* End View for Retrieve Password button */}
        </View>
        {/* End View for container form */}
      </View>
      // {/* End View for Modal container */}
      //   {/* </Modal> */}
    );
  }
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
    fontSize: 18,
    color: "#ffffff",
    padding: 5,
    paddingLeft: 0
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

export default ForgotPasswordView;
