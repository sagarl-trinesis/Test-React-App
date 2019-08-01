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
  TouchableOpacity
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import { tsConstructorType } from "@babel/types";

import { createStore, bindActionCreators } from "redux";
import { Provider } from "react-redux";
import Login from "./component/Auth/Login";
import Home from "./component/Client/Home";
import ClientHome from "./component/Client/ClientHome";
import ModalScreen from "./component/Client/ModalScreen";
import {
  Router,
  Scene,
  Drawer,
  SideMenu,
  ProfileScreen,
  CarsListScreen,
  CarViewScreen
} from "react-native-router-flux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return { counter: state.counter + 1 };
    case "DECREASE_COUNTER":
      return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="login" component={Login} hideNavBar={true} initial />
            <Drawer
              hideNavBar={true}
              hideTabBar={true}
              key="home"
              contentComponent={SideMenu}
              drawerWidth={wp("80%")}
              drawerPosition="left"
            >
              <Scene
                key="clienthome"
                component={ClientHome}
                hideNavBar={true}
              />
              <Scene key="home1" component={Home} hideNavBar={true} />
              <Scene key="login" component={Login} hideNavBar={true} />
            </Drawer>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default App;
