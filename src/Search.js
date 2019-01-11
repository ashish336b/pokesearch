// Import necessary components from packages
import React, { Component } from 'react';
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { Header, Button, Icon, Item, Input, } from 'native-base';
// Import files for src
import PokeLoader from './Pokeloader';
import Searchbody from './Searchbody';

class Search extends React.Component {
    state = {
        pokeSearch: "",
        onCall:true
    }
    searchPoke = ()=>{
        alert("search");
    }
    renderBody = ()=>{
        if(this.state.onCall){
            return(
                <PokeLoader/>
            )
        }else{
            return(
                <Searchbody/>
            )
        }
    }
    render() {
        return (
            <View>
                <Header
                    searchBar
                    rounded
                >
                <Item>
                    <Icon name="search" onPress={this.searchPoke}/>
                    <Input
                    value={this.state.pokeSearch}
                    placeholder="search Pokemon"
                    onChangeText={(pokeSearch)=>this.setState({pokeSearch})}
                />
                </Item>
                </Header>
                {this.renderBody()}
            </View>
        );
    }
}
export default Search;