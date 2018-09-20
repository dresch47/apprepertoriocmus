import React, {Component} from 'react';
import {View,Text,TouchableHighlight , StyleSheet,Image } from 'react-native';

export default class ListItem extends Component{
	constructor(props){
		super(props);
		this.state = {msg:props.data.msg};

        this.click =  this.click.bind(this); 
	}

	click(){
		/*if(this.props.data.key == '3'){
        alert(this.props.data.msg);
		} */
       
	}
	render(){
		return(
	     <TouchableHighlight  onPress={this.click} underlayColor="#B22222">
              <View style={styles.item}>
              	  <Image source={{uri:this.props.data.img}} style={styles.image} />
              	  <View style={styles.info}>
              	  	 <Text numberOfLines={1} style={styles.nome}>{this.props.data.nome}</Text>
              	  	 <Text numberOfLines={1} style={styles.msg}> {this.state.msg}</Text>
              	  </View>
              </View>
	     </TouchableHighlight>		
	  );
	}
}

const styles = StyleSheet.create({
       item:{
			height:60,
			marginLeft:10,
			marginRight:10,
			borderBottomWidth:1,
			borderColor:"#cccccc",
			flex:1,
			flexDirection:"row",


       },
       image:{
	       	width:40,
	       	height:40,
	       	marginTop:10,
	       	borderRadius:20
       },
       info:{
	       	flex:1,
	       	flexDirection:'column',
	       	justifyContent:'flex-start',

       },
       nome:{
	       	fontSize:18,
	       	color:'black',
	       	fontWeight:'bold'
       },
       msg:{
	       	fontSize:20,
	       	color:'black',
	       	fontWeight:'bold'
       }   
});