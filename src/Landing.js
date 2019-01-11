import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements'
var myBackground = require('../assets/icons/landing.jpg');
class Landing extends React.Component {
    render() {
        return (
            <ImageBackground source={myBackground} style={{ width: '100%', height: '100%' }} >
                <View style = {styles.viewStyle}>
                    <Text style={styles.titleStyle}>Welcome to poke search</Text>
                    <Button
                        small
                        icon={{ name: 'search', type: 'font-awesome' }}
                        title='Search Pokemon'
                        backgroundColor = '#4264bf'
                        onPress={() => {
                            alert("you are good");
                        }}
                    />
                </View>
            </ImageBackground>
        );
    }
}
const styles = {
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 25,
    },
    titleStyle: {
        fontSize: 30,
        color: 'blue',
        flexDirection: 'column',
    }
}
export default Landing;