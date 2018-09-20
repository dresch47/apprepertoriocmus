import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation'


import TelaInicial from './src/TelaInicial';
import TelaRepertorio from './src/TelaRepertorio';
import TelaEnvio from './src/TelaEnvio';
import TelaVotos from  './src/TelaVotos';

const Navegador = TabNavigator({
  Home: {
    screen:TelaInicial
  },
  Repertório:{
    screen:TelaRepertorio
  },
  Envio:{
    screen:TelaEnvio
  },
  TelaVotos:{
    screen:TelaVotos
  }


}, {
  tabBarOptions:{
        showIcon:true,

        indicatorStyle:{
        backgroundColor:'#FF6600',
        
       },

       tabStyle:{
               
       },
       labelStyle:{
        fontSize:15,
        fontStyle:'italic',
        color:'yellow',
        fontWeight:'bold',

       }

 }
});
export default Navegador;


console.disableYellowBox = true;