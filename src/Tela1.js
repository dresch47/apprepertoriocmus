import React, {Component} from 'react';
import {View,Text ,StyleSheet,Button} from 'react-native';

export default class Tela1 extends Component{
	static navigationOptions = ({navigation}) => ({
            title:'Tela 1',    
        

});

	
	render(){
		return(

           <View style={styles.container}>
             <Text style={{fontSize:40}}>Tela 1</Text>

             <Button title='Ir para tela 2' onPress={ ()=>this.props.navigation.navigate('Tela2') }/>
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