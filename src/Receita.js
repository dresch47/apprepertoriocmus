import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default class Receita extends Component {
       
       static navigationOptions = {
       	    title:'Receita'
       };
	

	constructor(props) {
		super(props);
		this.state = {}

	}

	render() {
		return (
			 <View style={styles.container}>
			 	
			 </View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1
	}
});

console.disableYellowBox = true;




