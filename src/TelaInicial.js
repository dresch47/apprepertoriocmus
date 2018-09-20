import React, {Component} from 'react';
import {View,Text,Button,StyleSheet,Image, ImageBackground} from 'react-native';


export default class TelaInicial extends Component{
	static navigationOptions = ({navigation}) => ({
        tabBarLabel:'INICIAL',
        tabBarIcon: ({tintColor, focused})=> {
              

                    return (
                   <Image source={require('../assets/images/claveSol.png')} style={{width:26, height:26}}/>
                );
              
                
        }

});
	render(){

        var logo = {uri:'./assets/images/logo.jpg'};
		return(
            
            <ImageBackground blurRadius={0} style={styles.body} source={require('../assets/images/image6.png')} >
                
                	  

    		            <Text style={styles.textRepert} >Seja Bem Vindo ao App de Repertório do Corpo Musical da PMES</Text>
                         <Text style={styles.textRepert}>Concerto Popular</Text>
                         <Text style={styles.textRepert}>Navegue no Menu acima para ver o Repertório do dia e votar quais as músicas que voce prefere que sejam executadas</Text>

                        <Image blurRadius={1} source={require('../assets/images/brasaoCMus.jpg')} style={styles.img} />
    		            <Text style={styles.subTextRepert}>Guarapari - 19 de Dezembro de 2018</Text>
    		            
                      
		           	
            </ImageBackground>
	   );
	}
}

const styles = StyleSheet.create({
      body:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'

    },
    
      textRepert:{
        
        fontSize:22,
        color:'#00009C',
        textAlign:'center',
        fontWeight:'bold',
        fontStyle:'italic',
        
        
    },
      textRepert2:{
        fontSize:22,
        color:'#00009C',
        textAlign:'center',
        fontWeight:'bold',
        fontStyle:'italic',
      },

      subTextRepert:{
        fontSize:30,
        color:'#00009C',
        textAlign:'center',
        fontWeight:'bold',
        
    },
    img:{
        width:200,
        height:200,
        borderRadius:25
        
    }

},{
    tabBarOption:{
        showIcon:true
  }
});