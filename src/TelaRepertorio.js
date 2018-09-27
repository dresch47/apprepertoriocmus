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
           
      {key:'1', nome:'Andanças',                   autor:'inserir'},
      {key:'2', nome:'As rosas nao falam',         autor:'inserir'},
      {key:'3', nome:'Azul da cor do Mar',         autor:'inserir'},
      {key:'4', nome:'Besame Mucho',               autor:'inserir'},
      {key:'5', nome:'Borbulhas de amor',          autor:'inserir'},
      {key:'6', nome:'Canteiros',                  autor:'inserir'},
      {key:'7', nome:'Casinha de Sape',            autor:'inserir'},
      {key:'8', nome:'Caso sério',                 autor:'inserir'},
      {key:'9', nome:'Chao de Giz',                autor:'inserir'},
      {key:'10', nome:'Começo meio e fim',         autor:'inserir'},
      {key:'11', nome:'Como vai voce',             autor:'inserir'},
      {key:'12', nome:'Deslizes',                  autor:'inserir'},
      {key:'13', nome:'Devolva-me',                autor:'inserir'},
      {key:'14', nome:'Dia Branco',                autor:'inserir'},
      {key:'15', nome:'Espanhola',                 autor:'inserir'},
      {key:'16', nome:'Exagerado',                 autor:'inserir'},
      {key:'17', nome:'Flor de Liz',               autor:'inserir'},
      {key:'18', nome:'Fogo e Paixao',             autor:'inserir'},
      {key:'19', nome:'Gatas Extraordinarias',     autor:'inserir'},
      {key:'20', nome:'Hallelujah',                autor:'inserir'},
      {key:'21', nome:'La Bamba',                  autor:'inserir'},
      {key:'22', nome:'La Barca',                  autor:'inserir'},
      {key:'23', nome:'Lua e Flor',                autor:'inserir'},
      {key:'24', nome:'Mal acostumado',            autor:'inserir'},
      {key:'25', nome:'Malandragem',               autor:'inserir'},
      {key:'26', nome:'Moça',                      autor:'inserir'},
      {key:'27', nome:'O Bebado e o Equilibrista', autor:'inserir'},
      {key:'28', nome:'Olha',                      autor:'inserir'},
      {key:'29', nome:'Papel Marche',              autor:'inserir'},
      {key:'30', nome:'Planeta Agua',              autor:'inserir'},
      {key:'31', nome:'Pro dia nascer Feliz',      autor:'inserir'},
      {key:'32', nome:'Quando te vi',              autor:'inserir'},
      {key:'33', nome:'Qui nem Jiló',              autor:'inserir'},
      {key:'34', nome:'Revelaçao',                 autor:'inserir'},
      {key:'35', nome:'Ronda',                     autor:'inserir'},
      {key:'36', nome:'Rua Ramalhete',             autor:'inserir'},
      {key:'37', nome:'Saigon',                    autor:'inserir'},
      {key:'38', nome:'Samurai',                   autor:'inserir'},
      {key:'39', nome:'Se',                        autor:'inserir'},
      {key:'40', nome:'Talisma',                   autor:'inserir'},
      {key:'41', nome:'Tarde em Itapua',           autor:'inserir'},
      {key:'42', nome:'Tocando em frente',         autor:'inserir'},
      {key:'43', nome:'Toda a forma de amor',      autor:'inserir'},
      {key:'44', nome:'Todo azul do Mar',          autor:'inserir'},
      {key:'45', nome:'Trem bala',                 autor:'inserir'},
      {key:'46', nome:'Um certo Alguém',           autor:'inserir'},
      {key:'47', nome:'Voce é linda',              autor:'inserir'},
      {key:'48', nome:'Whiski e agogo',            autor:'inserir'},
      {key:'49', nome:'Yolanda',                   autor:'inserir'},
      {key:'50', nome:'Era uma vez',               autor:'inserir'},
      {key:'51', nome:'Lembra de Mim',             autor:'inserir'},

     
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
           <ImageBackground blurRadius={5} style={styles.container} source={require('../assets/images/imagem4.png')}>
              
           	  <Text style={styles.textRel}>Relação das músicas:</Text>

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