import React, {Component} from 'react';
import {View,Text ,StyleSheet,Image} from 'react-native';

export default class ConfigScreenProfile extends Component{
	static navigationOptions = ({navigation}) => ({
              
        drawerLabel:'Config do Profile',

        tabBarLabel:'CONFIG',
        tabBarIcon: ({tintColor, focused})=> {
                 if(focused){

                  return (
                   <Image source={require('../assets/images/config_on.png')} style={{width:30, height:30}}/>
                    );
                 }else{
                     return (
                   <Image source={require('../assets/images/config_off.png')} style={{width:30, height:30}}/>
                    );
                 }

                 
        }

});

	
	render(){
		return(

           <View style={styles.container}>
             <Text >Tela de Configurações do Perfil</Text>
           </View>
		);
	}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});