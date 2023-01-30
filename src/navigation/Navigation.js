import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

//Custom Stack NAV
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

//Screens
import FavoriteScreen from '../screens/Favorite';
import PokedexScreen from '../screens/Pokedex';
import AccountScreen from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function Navigation() {

  return (

    <Tab.Navigator initialRouteName='PokedexTab'
      screenOptions={({ route }) => ({
        headerShown: false
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === 'Favorite') {
      //       iconName = focused
      //         ? 'heart'
      //         : 'heart-outline';
      //     } else if (route.name === 'Account') {
      //       iconName = focused ? 'person-circle' : 'person-circle-outline';
      //     }

      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      //   tabBarActiveTintColor: '#507AF8',
      //   tabBarInactiveTintColor: '#000',
      })}
      >
      <Tab.Screen name="FavoriteTab" component={FavoriteNavigation}
        options={
          {
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({color,size}) => {
              return <Ionicons name="heart" size={size} color={color} />;
            },
            headerTitle: 'Favoritos'
          }}
      />
      <Tab.Screen name="PokedexTab" component={PokedexNavigation}
        options={
          {
            tabBarLabel: '',
            tabBarIcon: () => renderPokeball(),
            headerTitle: 'Pokedex'
          }}

      />
      <Tab.Screen name="AccountTab" component={AccountNavigation}
        options={
          {
            tabBarLabel: 'Mi Cuenta',
            tabBarIcon: ({color,size}) => {
              return <Ionicons name="person-circle" size={size} color={color} />;
            },
            headerTitle: 'Mi cuenta'
            
          }}

      />
    </Tab.Navigator>

  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../../assets/poke.png")}
      style={{ width:75, height:75, top: -15}}
    />
  )
}
