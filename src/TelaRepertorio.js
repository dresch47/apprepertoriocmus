 import React, {Component} from 'react';
import {View,Text ,StyleSheet,Image,Button,FlatList,ImageBackground} from 'react-native';

export default class TelaRepertorio extends Component{
	static navigationOptions = ({navigation}) => ({
        tabBarLabel:'Músicas',
        tabBarIcon: ({tintColor, focused})=> {
                 return (
                   <Image source={require('../assets/images/notaMusic2.png')} style={{width:26, height:26}}/>
                );
        }

});

	constructor(props){
    super(props);
    this.state = {
          flatMusicas:[
      {key:'1', nome:'My Way',                     autor:'Frank Sinatra', type:'fotos'},
      {key:'2', nome:'Qui nem Jiló',                autor:'Gonzaguinha'},
      {key:'3', nome:'Aquarela do Brasil',         autor:'Ari Barroso'},
      {key:'4', nome:'Assim caminha a humanidade', autor:'Lulu Santos'},
      {key:'5', nome:'Happy',                      autor:'Pharrel Wilians'},
      {key:'6', nome:'My Way',                     autor:'Frank Sinatra', type:'fotos'},
      {key:'7', nome:'Qui nem Jiló',                autor:'Gonzaguinha'},
      {key:'8', nome:'Aquarela do Brasil',         autor:'Ari Barroso'},
      {key:'9', nome:'Assim caminha a humanidade', autor:'Lulu Santos'},
      {key:'10', nome:'Happy',                      autor:'Pharrel Wilians'},
      {key:'11', nome:'My Way',                     autor:'Frank Sinatra', type:'fotos'},
      {key:'12', nome:'Qui nem Jiló',                autor:'Gonzaguinha'},
      {key:'13', nome:'Aquarela do Brasil',         autor:'Ari Barroso'},
      {key:'14', nome:'Assim caminha a humanidade', autor:'Lulu Santos'},
      {key:'15', nome:'Happy',                      autor:'Pharrel Wilians'},
      {key:'16', nome:'My Way',                     autor:'Frank Sinatra', type:'fotos'},
      {key:'17', nome:'Qui nem Jiló',                autor:'Gonzaguinha'},
      {key:'18', nome:'Aquarela do Brasil',         autor:'Ari Barroso'},
      {key:'19', nome:'Assim caminha a humanidade', autor:'Lulu Santos'},
      {key:'20', nome:'Happy',                      autor:'Pharrel Wilians'},

      {key:'13', nome:'Aquarela do Brasil',         autor:'Ari Barroso'},
      {key:'14', nome:'Assim caminha a humanidade', autor:'Lulu Santos'},
      {key:'15', nome:'Happy',                      autor:'Pharrel Wilians'},
      {key:'16', nome:'My Way',                     autor:'Frank Sinatra', type:'fotos'},
      {key:'17', nome:'Qui nem Jiló',                autor:'Gonzaguinha'},
      {key:'18', nome:'Aquarela do Brasil',         autor:'Ari Barroso'},
      {key:'19', nome:'Assim caminha a humanidade', autor:'Lulu Santos'},
      {key:'20', nome:'Happy',                      autor:'Pharrel Wilians'},



     
      ]
    }; 
    
     this.repertorio = this.repertorio.bind(this);
  }

repertorio(item){
      return(
            <View style={styles.containerInt}>
               <Text style={styles.textMusicas1}>{item.key} - {item.nome} / </Text>
               <Text style={styles.textMusicas2}>{item.autor}</Text>
            </View>   
      );
    }
     


	render(){
  
   
		return(
           <ImageBackground blurRadius={5} style={styles.container} source={require('../assets/images/image6.png')}>
              
           	  <Text source={require('../assets/images/image2.png')} style={styles.textRel}>Relação das músicas:</Text>


           	 <FlatList data={this.state.flatMusicas} renderItem={ ({item})=>this.repertorio(item) } />
              
           </ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
    containerInt:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        margin:5
    },

    container:{
       flex:1,
       
    },
    textRel:{
       marginTop:20,
       paddingBottom:20,
       fontSize:27,
       color:'#00009C',
       textAlign:'center',
       fontWeight:'bold',
       fontStyle:'italic',
      
       // backgroundColor:'#66ccff'    
       
     },
    textMusicas1:{
       fontSize:18,
       color:'black', 
       textAlign:'center',
       fontWeight:'bold',
       
      

     },
     textMusicas2:{
       fontSize:12,
       color:'black', 
       textAlign:'center',
       fontWeight:'bold',
       textDecorationLine:'underline'
       
      

     }
},{

});