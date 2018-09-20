import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,FlatList,Button,ImageBackground} from 'react-native';
import firebase from 'firebase';
import RepertorioItem from './RepertorioItem';
//import LinearGradient from 'react-native-linear-gradient';


export default class TelaEnvio extends Component{
	static navigationOptions = ({navigation}) => ({
        tabBarLabel:'Votar',
        tabBarIcon: ({tintColor, focused})=> {

                 return (
                   <Image source={require('../assets/images/btnVotar.png')} style={{width:26, height:26}}/>
                );
        }

});

  constructor(props){
    super(props);
    this.state = {
          flatMusicas:[
      {key:'1', codigo:'-LLvolBLeFc6iVGEpadN',nome:'My Way',                     m:'0', desabilitarBotao:false},
      {key:'2', codigo:'-LLvp5KLiptsu2_E-Amq',nome:'Qui nem Jiló',               m:'0', desabilitarBotao:false},
      {key:'3', codigo:'-LLvp91ugmAoqLNbTeM7',nome:'Aquarela do Brasil',         m:'0', desabilitarBotao:false},
      {key:'4', codigo:'-LLvpCUzYiOQa1vp2tef',nome:'Assim caminha a humanidade', m:'0', desabilitarBotao:false},
      {key:'5', codigo:'-LLvpITA-YV1VUt4A9pa',nome:'Happy',                      m:'0', desabilitarBotao:false},
      {key:'6', codigo:'-LLvpLXskg8_IqP7s83C',nome:'Carnaval de Venezza',        m:'0', desabilitarBotao:false},
      
      ], 

     

     
       
    }
        let config = {
          apiKey: "AIzaSyAryAYp9VV1P0Tv1iawaundYFR76AhRVQw",
          authDomain: "projeto-teste-3a4b8.firebaseapp.com",
          databaseURL: "https://projeto-teste-3a4b8.firebaseio.com",
          projectId: "projeto-teste-3a4b8",
          storageBucket: "projeto-teste-3a4b8.appspot.com",
          messagingSenderId: "208487722822"
        };
        firebase.initializeApp(config);               
         this.clicar = this.clicar.bind(this);      
        
  }   
  clicar(item){ 



                            if(this.state.flatMusicas[(item.key)-1].desabilitarBotao == false){
                                this.state.flatMusicas[(item.key)-1].desabilitarBotao = true;

                           firebase.database().ref('musicas/'+item.codigo+'/cliques').once('value').then((snapshot)=> {
                                  let state = this.state;
                                  state.flatMusicas[(item.key)-1].m = snapshot.val();
                                  // state.flatMusicas[(item.key)-1].m = Object.values(state.flatMusicas[(item.key)-1].m);
                                 
                                  
                                  this.setState(state);
                                 // alert(this.state.flatMusicas[(item.key)-1].m );

                            firebase.database().ref('musicas/'+item.codigo).set({
                                  cliques:parseInt(this.state.flatMusicas[(item.key)-1].m) + parseInt(1),
                                  nome:item.nome

                            });

                            alert('Agradecemos pela participação!')
               
                         });



                            }else{
                                alert('Voto já validado!')
                            }


                     
                            

                            
                       

    }

   
    
	render(){

		return(

          

           <ImageBackground  style={styles.container} source={require('../assets/images/image6.png')}>


              
              <Text style={styles.textRel}>Votar:</Text>
                    
             <FlatList data={this.state.flatMusicas}  renderItem={ ({item})=> <RepertorioItem data={item} 
                            onPress={ ()=>{ this.clicar(item) } }
                             disabledBtn={this.state.desabilitarBotao}
                            />
                          }
               />
         
           </ImageBackground>
          
           
		);
	}
}  

const styles = StyleSheet.create({
    containerInt:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },

    container:{
       flex:1,
              
    },
    textRel:{
       marginTop:20,
       // marginBottom:20,
       marginLeft:60,
       padding:5,
       width:300,
       height:60,
       fontSize:27,
       color:'#00009C',
       textAlign:'center',
       fontWeight:'bold',
       fontStyle:'italic',
       fontFamily:'serif',
       
       
      
       
     },
    textMusicas1:{
       fontSize:18,
       color:'black', 
       textAlign:'center',
       fontWeight:'bold',
     },

     buttonText: {
      textAlign: 'center',
      color: '#4C64FF',
      // padding: 5,
      marginLeft: 1,
      marginRight: 1,
      width: 198
}

});


