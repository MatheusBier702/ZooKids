import React, { useState } from "react";
import {View, Text, FlatList, Pressable, Modal, Image,} from "react-native";
import styles from "./styles";

export default function Territorio4() {
  const [animalSelecionado, setAnimalSelecionado] = useState(null);

  const animais = [
   {
  id: "1",
  nome: "Rinoceronte",
  descricao:
    "🌿 Alimentação: Herbívoro\n⚖️ Peso médio: 2.300 kg\n📏 Altura média: 1,8 m\n\n📚 Sobre:\nO rinoceronte é um dos maiores mamíferos terrestres do mundo. Seu chifre é feito da mesma substância das nossas unhas.\n\n✨ Curiosidade:\nMesmo sendo tão pesado, ele pode correr a mais de 50 km/h!",
  imagem: require("./img/rinoceronte.png"),
},

{
  id: "2",
  nome: "Zebra",
  descricao:
    "🌿 Alimentação: Herbívora\n⚖️ Peso médio: 350 kg\n📏 Altura média: 1,5 m\n\n📚 Sobre:\nAs zebras vivem em grupos e adoram pastar nas savanas africanas.\n\n✨ Curiosidade:\nCada zebra possui um padrão de listras único, como nossas impressões digitais!",
  imagem: require("./img/zebra.png"),
},

{
  id: "3",
  nome: "Girafa",
  descricao:
    "🌿 Alimentação: Herbívora\n⚖️ Peso médio: 1.200 kg\n📏 Altura média: 5,5 m\n\n📚 Sobre:\nA girafa é o animal mais alto do planeta. Seu pescoço comprido ajuda a alcançar folhas no topo das árvores.\n\n✨ Curiosidade:\nA língua da girafa pode medir até 50 centímetros!",
  imagem: require("./img/girafa.png"),
},

{
  id: "4",
  nome: "Suricato",
  descricao:
    "🍎 Alimentação: Insetos, frutas e pequenos animais\n⚖️ Peso médio: 1 kg\n📏 Altura média: 30 cm\n\n📚 Sobre:\nOs suricatos vivem em grupos e sempre deixam um deles vigiando enquanto os outros procuram comida.\n\n✨ Curiosidade:\nEles adoram ficar em pé para observar tudo ao redor!",
  imagem: require("./img/suricato.png"),
},

{
  id: "5",
  nome: "Dromedário",
  descricao:
    "🌿 Alimentação: Herbívoro\n⚖️ Peso médio: 500 kg\n📏 Altura média: 2 m\n\n📚 Sobre:\nO dromedário vive em regiões desérticas e possui apenas uma corcova.\n\n✨ Curiosidade:\nSua corcova armazena gordura, ajudando-o a sobreviver por muito tempo sem comida.",
  imagem: require("./img/dromedario.png"),
},

{
  id: "6",
  nome: "Família de Leões",
  descricao:
    "🍖 Alimentação: Carnívora\n⚖️ Peso médio: 190 kg (macho)\n📏 Altura média: 1,2 m\n\n📚 Sobre:\nOs leões vivem em grupos chamados alcateias. As leoas geralmente são as responsáveis pela caça.\n\n✨ Curiosidade:\nUm rugido de leão pode ser ouvido a até 8 quilômetros de distância!",
  imagem: require("./img/leao.png"),
},

{
  id: "7",
  nome: "Tigre",
  descricao:
    "🍖 Alimentação: Carnívora\n⚖️ Peso médio: 220 kg\n📏 Altura média: 1,1 m\n\n📚 Sobre:\nO tigre é o maior felino do mundo. Ele é um excelente nadador e gosta de água.\n\n✨ Curiosidade:\nAssim como as zebras, cada tigre possui listras únicas!",
  imagem: require("./img/tigre.png"),
},

{
  id: "8",
  nome: "Hipopótamo",
  descricao:
    "🌿 Alimentação: Herbívoro\n⚖️ Peso médio: 1.500 kg\n📏 Altura média: 1,5 m\n\n📚 Sobre:\nO hipopótamo passa grande parte do dia dentro da água para se refrescar do calor.\n\n✨ Curiosidade:\nApesar de parecer lento, ele consegue correr mais rápido que um ser humano!",
  imagem: require("./img/hipopotamo.png"),
},
    
  ];

  return (
     <View style={styles.container}>
       <Text style={styles.titulo}>Territorio 4</Text>
 
       <FlatList
         data={animais}
         keyExtractor={(item) => item.id}
         showsVerticalScrollIndicator={false}
         renderItem={({ item }) => (
           <Pressable
             style={styles.card}
             onPress={() => setAnimalSelecionado(item)}
           >
             <Image
               source={item.imagem}
               style={styles.imagem}
               resizeMode="contain"
             />
 
             <View style={styles.info}>
               <Text style={styles.nome}>{item.nome}</Text>
             </View>
           </Pressable>
         )}
       />
 
       <Modal
         visible={animalSelecionado !== null}
         transparent={true}
         animationType="slide"
       >
         <View style={styles.modalContainer}>
           <View style={styles.modal}>
             {animalSelecionado && (
               <>
                 <Image
                   source={animalSelecionado.imagem}
                   style={styles.modalImagem}
                   resizeMode="contain"
                 />
 
                 <Text style={styles.modalTitulo}>
                   {animalSelecionado.nome}
                 </Text>
 
                 <Text style={styles.modalTexto}>
                   {animalSelecionado.descricao}
                 </Text>
 
                 <Pressable
                   style={styles.botao}
                   onPress={() => setAnimalSelecionado(null)}
                 >
                   <Text style={styles.botaoTexto}>
                     Fechar
                   </Text>
                 </Pressable>
               </>
             )}
           </View>
         </View>
       </Modal>
     </View>
   );
}