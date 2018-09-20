import React, {Component} from 'react';
import {View,Text ,StyleSheet,Image,Button} from 'react-native';

export default class ConfigScreenApp extends Component{
	static navigationOptions = ({navigation}) => ({
        drawerLabel:'Config do App',

        tabBarLabel:'CONFIG',
        tabBarIcon: ({tintColor, focused})=> {

                 if(focused){

                  return (
                   <Image source={require('../assets/images/config_on.png')} style={{width:26, height:26}}/>
                    );
                 }else{
                     return (
                   <Image source={require('../assets/images/config_off.png')} style={{width:26, height:26}}/>
                    );
                 }

                 
        }

});

	
	render(){
		return(

           <View style={styles.container}>
             <Text >Tela de Configurações do App</Text>
             <Button title='Abrir Configurações' onPress={()=>this.props.navigation.navigate('DrawerToggle')  }/>
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