// Import necessary components from packages
import React, { Component } from 'react';
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { Header, Button, Icon, Item, Input, } from 'native-base';
import axios from 'axios';
// Import files for src
import PokeLoader from './Pokeloader';
import Searchbody from './Searchbody';

class Search extends React.Component {
    state = {
        pokeSearch: "",
        onCall: true,
        data: {}
    }
    searchPoke = () => {
        this.setState({ onCall: true });
        var self = this;
        axios.defaults.headers = {
            'Content-Type': 'application/json',
        }
        axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase()+"/")
            .then(function (response) {
                console.log(response.data);
                self.setState({ data: response.data });
                self.setState({ onCall: false });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    renderBody = () => {
        if (this.state.onCall) {
            return (
                <PokeLoader />
            )
        } else {
            return (
                <Searchbody data={this.state.data} />
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
                        <Icon name="search" onPress={this.searchPoke} />
                        <Input
                            value={this.state.pokeSearch}
                            placeholder="search Pokemon"
                            onChangeText={(pokeSearch) => this.setState({ pokeSearch })}
                        />
                    </Item>
                </Header>
                {this.renderBody()}
            </View>
        );
    }
}
export default Search;