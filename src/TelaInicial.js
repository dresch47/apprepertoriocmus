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

    constructor(props){
        super(props);
        this.state = {};

        this.clicar = this.clicar.bind(this);
    }

    clicar(){
     alert('clicou no botao');

    }

	render(){

        var logo = {uri:'./assets/images/logo.jpg'};
		return(
            
            <ImageBackground blurRadius={0} style={styles.body} source={require('../assets/images/image2.png')} >
              
                <Image style={styles.img} source={require('../assets/images/logoTitulo.png')}/>
                <Text style={styles.textRepert}>Concerto Popular</Text>
                <Text style={styles.subTextRepert}>Guarapari - 19 de Dezembro de 2018</Text> 
                <Image resizeMode="contain" style={styles.imgTbn}source={require('../assets/images/trombone.png')}/>
                <Button title="Deixe aqui sua Sugestão" onPress={this.clicar}/>
                

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
        
        fontSize:30,
        color:'#00009C',
        textAlign:'center',
        fontWeight:'bold',
        fontStyle:'italic',
        
        
    },
      subTextRepert:{
        fontSize:20,
        color:'#00009C',
        textAlign:'center',
        fontWeight:'bold',
        
    },
    img:{
        width:400,
        height:200,
        borderRadius:25
        
    },
    imgTbn:{
        height:200
    }

},{
    tabBarOption:{
        showIcon:true
  }
});