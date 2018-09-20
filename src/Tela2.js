import React, {Component} from 'react';
import {View,Text ,StyleSheet,Image,Button} from 'react-native';

export default class Tela2 extends Component{
	static navigationOptions = ({navigation}) => ({
            title:'Tela 2',    
 });
    

    // Outra forma de chamar a funcão de abri a tela
    /* constructor(props){
        super(props);
        this.state = {};
        this.abrirTela = this.abrirTela.bind(this);
     }
     abrirTela(){
      this.props.navigation.navigate('Tela3');
     }   */
	
	render(){
		return(

           <View style={styles.container}>
             <Text style={{fontSize:40}}>Tela 2</Text>

             <Button title='Ir para tela 3' onPress={ ()=>this.props.navigation.navigate('Tela3') }/>
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