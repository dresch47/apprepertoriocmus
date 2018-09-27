import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

export default class TelaSobre extends Component{

  static navigationOptions = ({navigation})=>({
    tabBarLabel:'Sobre',
    tabBarIcon:({tintColor, focused})=>{
                      return (
                   <Image source={require('../assets/images/sobre_preto.png')} style={{width:26, height:26}}/>
                );
    }
  });

  render(){
    return(
          <View style={styles.body}>
            <Text>Tela Sobre!</Text>
          </View>
  );
  }
}

const styles = StyleSheet.create({
    body:{
      fontSize:27,
      textAlign:'center'
    }
       

});
