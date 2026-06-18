import React, { useState } from "react";
import {View, Text, FlatList, Pressable, Modal, Image,} from "react-native";
import styles from "./styles";

export default function Territorio5() {
  const [animalSelecionado, setAnimalSelecionado] = useState(null);

  const animais = [
  {
    id: "1",
    nome: "Águias",
    descricao:
      "🍖 Alimentação: Carnívora\n⚖️ Peso médio: 3 a 7 kg\n📏 Envergadura: Até 2,5 m\n\n📚 Sobre:\nAs águias são aves muito fortes e possuem uma visão incrível para encontrar suas presas de longe.\n\n✨ Curiosidade:\nUma águia consegue enxergar até 5 vezes melhor que um ser humano!",
    imagem: require("./img/aguias.png"),
  },

  {
    id: "2",
    nome: "Gaviões",
    descricao:
      "🍖 Alimentação: Carnívora\n⚖️ Peso médio: 500 g a 2 kg\n📏 Envergadura: Até 1,5 m\n\n📚 Sobre:\nOs gaviões são caçadores rápidos e habilidosos. Eles voam alto procurando pequenos animais para se alimentar.\n\n✨ Curiosidade:\nAlguns gaviões conseguem mergulhar em alta velocidade para capturar suas presas.",
    imagem: require("./img/gavioes.png"),
  },

  {
    id: "3",
    nome: "Harpia",
    descricao:
      "🍖 Alimentação: Carnívora\n⚖️ Peso médio: 6 a 9 kg\n📏 Envergadura: Até 2 m\n\n📚 Sobre:\nA harpia é uma das maiores e mais poderosas aves de rapina do mundo. Ela vive nas florestas da América do Sul.\n\n✨ Curiosidade:\nSuas garras podem ser maiores que as de um urso!",
    imagem: require("./img/harpia.png"),
  },

  {
    id: "4",
    nome: "Condor",
    descricao:
      "🍖 Alimentação: Carnívora\n⚖️ Peso médio: 10 a 15 kg\n📏 Envergadura: Até 3,3 m\n\n📚 Sobre:\nO condor é uma das maiores aves voadoras do planeta. Ele usa correntes de ar para voar por longas distâncias sem bater as asas.\n\n✨ Curiosidade:\nSeu voo pode alcançar milhares de metros de altura!",
    imagem: require("./img/condor.png"),
  },

  {
    id: "6",
    nome: "Urubu-Rei",
    descricao:
      "🍖 Alimentação: Carnívora\n⚖️ Peso médio: 3 a 5 kg\n📏 Envergadura: Até 2 m\n\n📚 Sobre:\nO urubu-rei é uma ave brasileira muito importante para a natureza, ajudando a manter o ambiente limpo.\n\n✨ Curiosidade:\nSeu nome vem das cores vivas presentes em sua cabeça, que lembram uma coroa real.",
    imagem: require("./img/urubuRei.png"),
  },
];

  return (
     <View style={styles.container}>
       <Text style={styles.titulo}>Territorio 5</Text>
 
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