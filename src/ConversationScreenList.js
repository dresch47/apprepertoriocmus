import React, {Component} from 'react';
import {View,Text ,StyleSheet,Image,Button} from 'react-native';

export default class ConversationScreenList extends Component{
	static navigationOptions = ({navigation}) => ({
        
        tabBarLabel:'Conversas',
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
             <Text style={{fontSize:40,color:'blue'}}>Tela de Chat</Text>

             <Button  title="Carlos" onPress={()=>this.props.navigation.navigate('ConversationScreenChat', {nome:'Carlos'})  } />
             <Button  title="Ediana" onPress={()=>this.props.navigation.navigate('ConversationScreenChat', {nome:'Ediana'})  } />
           </View>
		);
	}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  }
});