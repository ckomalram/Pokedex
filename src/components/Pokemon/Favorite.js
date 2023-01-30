import React , {useEffect , useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { addPokemonFavoriteApi , isPokemonFavoriteApi , removePokemonFavoriteApi } from "../../api/Favorite";

export default function Favorite(props) {
    const { id} = props;

    const [isFavorite, setIsFavorite] = useState(undefined);
    const [reloadCheck, setReloadCheck] = useState(false);

    const Icon = isFavorite ? 'heart' : 'heart-outline';

    useEffect(() => {
        (async () => {
          try {
            const response = await isPokemonFavoriteApi(id);
            setIsFavorite(response);
          } catch (error) {
            setIsFavorite(false);
          }
        })();
      }, [id,reloadCheck]);
    
      const onReloadCheckFavorite = () => {
        setReloadCheck((prev) => !prev);
      };



    const addFavorite = async () => {
        console.log('Agregando favorito');
        await addPokemonFavoriteApi(id);
        onReloadCheckFavorite();

      };

      const removeFavorite = async () => {
        try {
            console.log('Removiendo...');
          await removePokemonFavoriteApi(id);
          onReloadCheckFavorite();
        } catch (error) {
          console.log(error);
        }
      };


    return (
        <Ionicons
            name={Icon}
            color='#fff'
            size={20}
            onPress={isFavorite ? removeFavorite : addFavorite}
        />
    )
}