import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, SearchBar } from 'react-native-elements'
import Landing from './src/Landing';
import Search from './src/Search';
var myBackground = require("./assets/icons/landing.jpg");
export default class App extends React.Component {
  state = {
    currentscreen: "Search"
  }
  switchScreen = (currentscreen)=>{
      this.setState({currentscreen})
  }
  renderScreen = () => {
    if(this.state.currentscreen === "Landing"){
      return(
        <Landing />
      )
    }else if(this.state.currentscreen === "Search"){
      return(
        <Search />
      )
    }
  }
  render() {
    return (
      <View style>
        {this.renderScreen()}
      </View>
    );
  }
}
