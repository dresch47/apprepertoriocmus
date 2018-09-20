import React, {Component} from 'react';
import {View,Text ,StyleSheet,Image} from 'react-native';

export default class ConversationScreenChat extends Component{
	static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.nome,
        tabBarLabel:'CONVERSA',
        tabBarIcon: ({tintColor, focused})=> {
                 if(focused){

                  return (
                   <Image source={require('../assets/images/chat_on.png')} style={{width:26, height:26}}/>
                    );
                 }else{
                     return (
                   <Image source={require('../assets/images/chat_off.png')} style={{width:26, height:26}}/>
                    );
                 }

                 
        }

});

	
	render(){
		return(

           <View style={styles.container}>
             <Text >Tela de Conversa</Text>
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