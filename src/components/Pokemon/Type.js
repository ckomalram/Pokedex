import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { map, capitalize } from "lodash";
import getColorByPokemonTye from "../../utils/getColorByPokemonTye";



export default function Type(props) {
    const { types } = props;
    // console.log(props)
    // console.log(types)

    return (
        <View style={styles.content}>
            {map(types, (item, index) =>( 
                <View key={index} style={{...styles.pill, backgroundColor: getColorByPokemonTye(item.type.name)}}>
                    <Text>
                        {capitalize(item.type.name)}
                    </Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pill:{
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: "#baba"
    }
});