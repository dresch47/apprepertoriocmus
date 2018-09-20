import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeList from './HomeList';
import HomeProduts from './HomeProduts';

const Navegador = StackNavigator({
      HomeList:{
        screen:HomeList
      },
      HomeProduts:{
        screen:HomeProduts
      }
},{
   //tabBarPosition:'bottom', //Posiciona a tabBar na parte de baixo do smartphone
   tabBarOptions:{
         showIcon:true
      }
});

export default Navegador;