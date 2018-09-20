import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';

export default class MsgItem extends Component{
    constructor(props){
    	super(props);

    	this.estilo = styles.balaoEsquerda; 
         if(this.props.data.m){
           this.estilo = styles.balaoDireita;
         }

    }
	render(){
		return(
            <View style={[styles.balao, this.estilo]}>
                <Text style={styles.text1}>{this.props.data.nome}</Text>
                <Text style={styles.text2}>{this.props.data.msg}</Text>
            </View>
		);
	}
}

const styles = StyleSheet.create({
      balao:{
         backgroundColor:'red',
         margin:10,
         padding:10,
         borderRadius:10
      },
      balaoEsquerda:{
         backgroundColor:'white',
         alignSelf:'flex-start',
         marginRight:80
      },
      balaoDireita:{
         backgroundColor:'#00ff00',
         alignSelf:'flex-end',
         marginLeft:80
      },
      text1:{
      	fontSize:15,
      	fontWeight:'bold'
      }

});