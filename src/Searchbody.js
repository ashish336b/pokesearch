import React from 'react';
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { ListItem, List } from 'native-base';
var myBackground = require('../assets/icons/lamoeo.jpg');
class Searchbody extends React.Component {
    render() {
        var pokemon = this.props.data;
        if (!pokemon) {
            return <View />
        }
        return (
            <ImageBackground source={myBackground} style={{ width: '100%', height: '100%' }} >
                <ScrollView style={{ flex: 0 }}>
                    <Text style={{ fontSize: 30, color: 'red' }}>
                        #{pokemon.id}-{pokemon.name.toUpperCase()}
                    </Text>
                    <View style={styles.viewStyle}>
                        <Image
                            style={styles.img}
                        source={{ uri: pokemon.sprites.front_default }}
                        />
                    </View>
                    <View style={styles.info}>
                        <ListItem itemDivider>
                            <Text style={{ fontWeight: 'bold' }}>Size</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Weight-  {pokemon.weight/10}kg</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Height-  {pokemon.height/10}m</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={{ fontWeight: 'bold' }}>Abilities</Text>
                        </ListItem>
                        <List
                            dataArray={pokemon.abilities}
                            renderRow={(item) =>
                                <ListItem>
                                    <Text>{item.ability.name.toUpperCase()}</Text>
                                </ListItem>
                            }
                        >
                            {/* this is optional remove after api start to work */}
                            {/* <ListItem>
                                <Text>This is good</Text>
                            </ListItem>
                            <ListItem>
                                <Text>this is good</Text>
                            </ListItem> */}
                            {/* remove up to here */}
                        </List>

                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}
const styles = {
    viewStyle: {
        fontSize: 30,
        flex: 1,
        textAlign: 'center'
    },
    img: {
        marginLeft: 50,
        width: 200,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.8,
    }
}
export default Searchbody;