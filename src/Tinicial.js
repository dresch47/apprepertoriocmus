import React, {Component} from 'react';
import {View,Text ,StyleSheet,Image,Button} from 'react-native';

export default class Tinicial extends Component{
  static navigationOptions = ({navigation}) => ({
        tabBarLabel:'INICAL',
        tabBarIcon: ({tintColor, focused})=> {
                 if(focused){

                  return (
                   <Image source={require('../assets/images/home_on.png')} style={{width:26, height:26}}/>
                    );
                 }else{
                     return (
                   <Image source={require('../assets/images/home_off.png')} style={{width:26, height:26}}/>
                    );
                 }

                 
        }

});

  
  render(){
    return(

           <View style={styles.container}>
             <Text style={styles.text}>Tela Incial</Text>
           </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:40,
    color:'blue'
  }
});