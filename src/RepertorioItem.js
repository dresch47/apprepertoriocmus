import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableHighlight} from 'react-native';


export default class RepertorioItem extends Component{
    constructor(props){
    	super(props);
    	this.state = {
           
        }
       
        
    }

    render(){
		return(
               <TouchableHighlight underlayColor='#CCCCCC' onPress={this.props.onPress} disabled={this.props.disabledBtn} >
                 <View style={styles.area}>
               	    <Text style={styles.text}>{this.props.data.nome}</Text>
               	 </View> 
               </TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
    area:{
    	flex:1,
    	flexDirection:'column',
    	justifyContent:'center',
    	alignItems:'center',
    	margin:7,
        
        // borderWidth:1,
        // borderColor:'#5f9ea0',
        borderRadius:8,


    },
    text:{
       	fontSize:27,
    	fontWeight:'bold',
    	color:'#00008b',
        fontStyle:'italic'
    },

    
});