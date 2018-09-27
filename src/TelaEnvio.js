import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,FlatList,Button,ImageBackground} from 'react-native';
import firebase from 'firebase';
import RepertorioItem from './RepertorioItem';



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
      
      {key:'1', codigo:'-LNNMYUQllbgBEaylB8Q',nome:'Andanças',                   m:'0', desabilitarBotao:false},
      {key:'2', codigo:'-LNNMjKvHQvZuV2RW8Ah',nome:'As rosas nao falam',         m:'0', desabilitarBotao:false},
      {key:'3', codigo:'-LNNMrMvUdrFaZocV1ER',nome:'Azul da cor do Mar',         m:'0', desabilitarBotao:false},
      {key:'4',codigo:'-LNNMuFIVCgZGBXZZfO0',nome:'Besame Mucho',                m:'0', desabilitarBotao:false},
      {key:'5',codigo:'-LNNMyAQ35YlItfBGzQQ',nome:'Borbulhas de amor',           m:'0', desabilitarBotao:false},
      {key:'6',codigo:'-LNNN-uuijJ3Y5xSJ4O9',nome:'Canteiros',                   m:'0', desabilitarBotao:false},
      {key:'7',codigo:'-LNNNEv0bFFB7gDiz31g',nome:'Casinha de Sape',             m:'0', desabilitarBotao:false},
      {key:'8',codigo:'-LNNNH_gVxxcGBe9XWqu',nome:'Caso sério',                  m:'0', desabilitarBotao:false},
      {key:'9',codigo:'-LNNNMY3YLjiWlpe9m6T',nome:'Chao de Giz',                 m:'0', desabilitarBotao:false},
      {key:'10',codigo:'-LNNNR7g5W-gnfrY2U_G',nome:'Começo meio e fim',          m:'0', desabilitarBotao:false},
      {key:'11',codigo:'-LNNNUSPO7MXCa3aDWJq',nome:'Como vai voce',              m:'0', desabilitarBotao:false},
      {key:'12',codigo:'-LNNNWwk_hgJPyhP-MHS',nome:'Deslizes',                   m:'0', desabilitarBotao:false},
      {key:'13',codigo:'-LNNNZJTEODfVv24oqpC',nome:'Devolva-me',                 m:'0', desabilitarBotao:false},
      {key:'14',codigo:'-LNNNcIyQHGaQeRWnSom',nome:'Dia Branco',                 m:'0', desabilitarBotao:false},
      {key:'15',codigo:'-LNNNhnnaswgn5Y000Tp',nome:'Espanhola',                  m:'0', desabilitarBotao:false},
      {key:'16',codigo:'-LNNNkA2t9jWQqpRyiyB',nome:'Exagerado',                  m:'0', desabilitarBotao:false},
      {key:'17',codigo:'-LNNNm95Me81lK2kynqo',nome:'Flor de Liz',                m:'0', desabilitarBotao:false},
      {key:'18',codigo:'-LNNNqS_3wkrPQWrRXZg',nome:'Fogo e Paixao',              m:'0', desabilitarBotao:false},
      {key:'19',codigo:'-LNNNvncR12sh9oBjunD',nome:'Gatas Extraordinarias',      m:'0', desabilitarBotao:false},
      {key:'20',codigo:'-LNNO1LPPG9FOkUA6eSm',nome:'Hallelujah',                 m:'0', desabilitarBotao:false},
      {key:'21',codigo:'-LNNO38wak4gatTe3Cm2',nome:'La Bamba',                   m:'0', desabilitarBotao:false},
      {key:'22',codigo:'-LNNO4dUUS0nirh_CY6w',nome:'La Barca',                   m:'0', desabilitarBotao:false},
      {key:'23',codigo:'-LNNO7Vn_0C4IYJ4a4eG',nome:'Lua e Flor',                 m:'0', desabilitarBotao:false},
      {key:'24',codigo:'-LNNO9loV0enkGs-_nLq',nome:'Mal acostumado',             m:'0', desabilitarBotao:false},
      {key:'25',codigo:'-LNNOGIZJnsLUuM5xi9f',nome:'Malandragem',                m:'0', desabilitarBotao:false},
      {key:'26',codigo:'-LNNOI-BiEc2XwgvGqOS',nome:'Moça',                       m:'0', desabilitarBotao:false},
      {key:'27',codigo:'-LNNOM6sBSjbWDqJmga7',nome:'O Bebado e o Equilibrista',  m:'0', desabilitarBotao:false},
      {key:'28',codigo:'-LNNOOmy4Qp0kgMrhDPO',nome:'Olha',                       m:'0', desabilitarBotao:false},
      {key:'29',codigo:'-LNNORgrdmo0ejlX0dBL',nome:'Papel Marche',               m:'0', desabilitarBotao:false},
      {key:'30',codigo:'-LNNOUV-ZTeRPRHRRJM3',nome:'Planeta Agua',               m:'0', desabilitarBotao:false},
      {key:'31',codigo:'-LNNOYwfzJWEhOWg4cQK',nome:'Pro dia nascer Feliz',       m:'0', desabilitarBotao:false},
      {key:'32',codigo:'-LNNOdljkv-GxtBRKWOo',nome:'Quando te vi',               m:'0', desabilitarBotao:false},
      {key:'33',codigo:'-LNNNcIyQHGaQeRWnSom',nome:'Qui nem Jiló',               m:'0', desabilitarBotao:false},
      {key:'34',codigo:'-LNNOhfkMjcOaegx0VhC',nome:'Revelaçao',                  m:'0', desabilitarBotao:false},
      {key:'35',codigo:'-LNNOj9OkV-CY2Bf_yyV',nome:'Ronda',                      m:'0', desabilitarBotao:false},
      {key:'36',codigo:'-LNNOmJIgH3Tp4uBiYYL',nome:'Rua Ramalhete',              m:'0', desabilitarBotao:false},
      {key:'37',codigo:'-LNNOoUdJgfJA5sB59om',nome:'Saigon',                     m:'0', desabilitarBotao:false},
      {key:'38',codigo:'-LNNOq3LT362Eblmp3zq',nome:'Samurai',                    m:'0', desabilitarBotao:false},
      {key:'39',codigo:'-LNNOruT739-VkhXzgTK',nome:'Se',                         m:'0', desabilitarBotao:false},
      {key:'40',codigo:'-LNNOtoiXtiUYBo54boL',nome:'Talisma',                    m:'0', desabilitarBotao:false},
      {key:'41',codigo:'-LNNOwgbn8IWfj9Zzfle',nome:'Tarde em Itapua',            m:'0', desabilitarBotao:false},
      {key:'42',codigo:'-LNNOyuvwvJGFRndX12f',nome:'Tocando em frente',          m:'0', desabilitarBotao:false},
      {key:'43',codigo:'-LNNP1bX0xSbBxSBfAjF',nome:'Toda a forma de amor',       m:'0', desabilitarBotao:false},
      {key:'44',codigo:'-LNNP3zX6OSghEt9Bgow',nome:'Todo azul do Mar',           m:'0', desabilitarBotao:false},
      {key:'45',codigo:'-LNNP7S56hPDMeWYgkKG',nome:'Trem bala',                  m:'0', desabilitarBotao:false},
      {key:'46',codigo:'-LNNPC7ZFHAZS2qtOGx5',nome:'Um certo Alguém',            m:'0', desabilitarBotao:false},
      {key:'47',codigo:'-LNNPESmOd9yVSXgmRYy',nome:'Voce é linda',               m:'0', desabilitarBotao:false},
      {key:'48',codigo:'-LNNPKPpy49XU50KZJur',nome:'Whiski e agogo',             m:'0', desabilitarBotao:false},
      {key:'49',codigo:'-LNNPML5eXMN-hOpkQBl',nome:'Yolanda',                    m:'0', desabilitarBotao:false},
      {key:'50',codigo:'-LNNPQWzNIiyVvx2zn3y',nome:'Era uma vez',                m:'0', desabilitarBotao:false},
      {key:'51',codigo:'-LNNPd5322rJbocAk3GY',nome:'Lembra de Mim',              m:'0', desabilitarBotao:false},
      
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

          

           <ImageBackground  style={styles.container} source={require('../assets/images/image3.png')}>


              
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
       marginBottom:20,
       width:300,
       height:60,
       fontSize:35,
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


