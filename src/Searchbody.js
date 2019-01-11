import React from 'react';
import { View, Text, Image } from 'react-native';
class Searchbody extends React.Component {
    render() {
        return (
            <View>
                <Image
                    style={{ width: 400, height: 400,justifyContent:'center',alignItems:'center' }}
                    source={require('../assets/icons/Pikacu.gif')}
                />
            </View>
        )
    }
}

export default Searchbody;