import React, {Component} from 'react';
import {View,Text ,StyleSheet,Image,Button} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';

export default class Tela3 extends Component{
	static navigationOptions = ({navigation}) => ({
            title:'TELA 3',    
        

});

  // Outra forma de chamar a funcão de abri a tela
     constructor(props){
        super(props);
        this.state = {};
        this.voltarTela = this.voltarTela.bind(this);
     }
     voltarTela(){
     // this.props.navigation.goBack(); // volta para tela anterior
        this.props.navigation.dispatch(StackActions.reset({
          index:0,
          actions:[
              NavigationActions.navigate({routeName:'Tela1'}) // reseta a navegação e volta tela 1
          ]
        }));
     }  
	
	render(){
		return(

           <View style={styles.container}>
             <Text style={{fontSize:40}}>Tela 3</Text>

             <Button title='Voltar Início' onPress={this.voltarTela}/>
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