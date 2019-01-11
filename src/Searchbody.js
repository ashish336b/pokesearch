import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
class Searchbody extends React.Component {
    render() {
        var pokemon = this.props.data;
        if(!pokemon){
            return<View/>
        }
        return (
            <ScrollView style={{flex:1}}>
                <Text style={styles.header}>
                    #{pokemon.id} - {pokemon.name}
                </Text>
            </ScrollView>
        )
    }
}
const styles = {
    header: {
        fontSize: 30,
        color: 'red',
        flex: 1,
        textAlign: 'center'
    }
}
export default Searchbody;