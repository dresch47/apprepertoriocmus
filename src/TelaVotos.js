import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,Button,FlatList,ImageBackground  } from 'react-native';
import firebase from 'firebase';


export default class TelaVotos extends Component{
	static navigationOptions = ({navigation}) => ({
           tabBarLabel:'Ranking',
           tabBarIcon: ({tintColor, focused})=> {
              

                    return (
                   <Image source={require('../assets/images/ranking.png')} style={{width:26, height:26}}/>
                );
              
                
        }
	});

	constructor(props){
		super(props);
		this.state = {
			lista:[]
			
		}


		    firebase.database().ref('musicas').on('value', (snapshot)=>{
                  let state = this.state;
                  state.lista = [];
                   
                   snapshot.forEach( (childItem)=>{
                      state.lista.push({
                      	key:childItem.key,
                      	nome:childItem.val().nome,
                      	cliques:childItem.val().cliques
                      });
                   });

                   state.lista.sort(function(a,b){
                             if(a.cliques < b.cliques){
                         return 1;
                             }
                             if(a.cliques > b.cliques){
                         return -1;
                             }
                             return 0;
                   } );

                  this.setState(state);
                  
                  
		});


	}
	
	render(){
		return(

			<ImageBackground style={styles.container} source={require('../assets/images/image5.png')}>
				<Text style={styles.titulo}>Mais votadas:</Text>
				
                <FlatList 
                   data={this.state.lista} renderItem={ ({item})=>
                        <View style={styles.lista}>

                        	<Text style={styles.textList1}>{ (item.cliques == 0 )? '': item.nome  }</Text>
                          <Text style={styles.textList2}>{ (item.cliques == 0 )? '' : (item.cliques == 1)? item.cliques + ' Voto': item.cliques + ' Votos' } </Text>
                        	
                        </View>
               }
                />

                     
			</ImageBackground>

		);
	}
}

const styles = StyleSheet.create({
      container:{
        flex:1
      },
      titulo:{
      	fontSize:27,
      	fontWeight:'bold',
      	fontStyle:'italic',
      	color:'#00009C',
      	textAlign:'center',
        marginTop:20,
        paddingBottom:20
      },
      lista:{
        margin:10
      },
      textList1:{
      	fontSize:27,
      	fontWeight:'bold',
      	fontStyle:'italic',
      	color:'#00008b',
      	textAlign:'center'
      },
      textList2:{
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'#00008b',
        textAlign:'center'
      }  
});