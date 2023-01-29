import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Favorite(props) {
    const { id} = props;

    const addFavorite = () => {
        console.log('add to favorite ', id);
    }
    return (
        <Ionicons
            name='heart-outline'
            color='#fff'
            size={20}
            onPress={() => addFavorite()}
        />
    )
}