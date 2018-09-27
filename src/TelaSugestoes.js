import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

export default class TelaSugestoes extends Component{

	static navigationOptions = ({navigation})=>({
		tabBarLabel:'Sugestoes',
		tabBarIcon:({tintColor, focused})=>{
                      return (
                   <Image source={require('../assets/images/megafone.png')} style={{width:26, height:26}}/>
                );
		}
	});

	render(){
		return(
          <View>
          	<Text>Olá Mundo Véio sem Porteira!</Text>
          </View>
	);
	}
}

const styles = StyleSheet.create({
    containerInt:{
    }
       

});
