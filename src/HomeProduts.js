import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

export default class HomeProduts extends Component{

  constructor(props){
    super(props);
    this.state ={
        list:props.navigation.state.params.products
    };
  }
   
   static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
   	    tabBarLabel:'Home',
   	    tabBarIcon:({focused, tintColor}) => {
            if(focused){
                return(
                    <Image source={require('../assets/images/home_azul.png')} style={styles.icone}/>
                );
            } else {
                return(
                    <Image source={require('../assets/images/home_preto.png')} style={styles.icone}/>
                );
            }
            	    	
   	    }
   });
        



	render(){
		return(
            <View style={styles.container}>
               <FlatList 
                  data={this.state.list}
                  renderItem={ ({item})=> <ProducItem data={item}/> }
               />
            </View>    
      
		);
	}
}
 
class ProducItem extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
         <View style={styles.productItem}>
              <Image resizeMode="contain" source={this.props.data.img} style={styles.productImagem}/>

              <Text style={styles.productName}>{this.props.data.name}</Text> 
         </View>
    );
  }
} 

const styles = StyleSheet.create({
	  icone:{
	  	width:26,
	  	height:26
	  },
    container:{
      flex:1,
      backgroundColor:'#CCCCCC'

    },
    productItem:{
      height:100,
      backgroundColor:'white',
      margin:10,
      padding:10,
      borderRadius:10,
      flex:1,
      flexDirection:'row',
      alignItems:'center'
    },
    productImagem:{
      width:80,
      height:80,
      marginRight:20
      
    },
    productName:{
      fontSize:27,
      fontWeight:'bold',
      fontFamily:'helvetica',
      fontStyle:'italic'
    }

});