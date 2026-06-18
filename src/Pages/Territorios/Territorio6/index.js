import React, { useState } from "react";
import {View, Text, FlatList, Pressable, Modal, Image,} from "react-native";
import styles from "./styles";

export default function Territorio6() {
  const [animalSelecionado, setAnimalSelecionado] = useState(null);

 const animais = [
  {
    id: "1",
    nome: "Chimpanzé",
    descricao:
      "🍎 Alimentação: Onívoro\n⚖️ Peso médio: 40 a 60 kg\n📏 Altura média: 1,2 m\n\n📚 Sobre:\nOs chimpanzés são muito inteligentes e vivem em grupos. Eles usam galhos e pedras como ferramentas para conseguir alimento.\n\n✨ Curiosidade:\nCompartilham cerca de 98% do DNA com os seres humanos!",
    imagem: require("./img/chimpanze.png"),
  },

  {
    id: "2",
    nome: "Orangotango",
    descricao:
      "🍎 Alimentação: Frutas, folhas e insetos\n⚖️ Peso médio: 50 a 100 kg\n📏 Altura média: 1,5 m\n\n📚 Sobre:\nO orangotango vive nas florestas da Ásia e passa grande parte da vida nas árvores.\n\n✨ Curiosidade:\nSeu nome significa 'homem da floresta' na língua malaia.",
    imagem: require("./img/orangotango.png"),
  },

  {
    id: "3",
    nome: "Primatas Brasileiros",
    descricao:
      "🍎 Alimentação: Frutas, sementes, folhas e insetos\n⚖️ Peso médio: Varia conforme a espécie\n📏 Altura média: De 20 cm a 1 m\n\n📚 Sobre:\nO Brasil possui diversas espécies de macacos, como o mico-leão-dourado e o bugio. Eles ajudam a espalhar sementes pelas florestas.\n\n✨ Curiosidade:\nMuitos primatas brasileiros vivem apenas em nosso país!",
    imagem: require("./img/primata.png"),
  },

  {
    id: "4",
    nome: "Muriqui do Sul",
    descricao:
      "🍎 Alimentação: Frutas, folhas e flores\n⚖️ Peso médio: 10 a 15 kg\n📏 Altura média: 50 cm\n\n📚 Sobre:\nO muriqui-do-sul é o maior macaco das Américas e vive na Mata Atlântica.\n\n✨ Curiosidade:\nÉ conhecido como 'macaco-prego-gigante' e é muito pacífico com os outros membros do grupo.",
    imagem: require("./img/muriqui.png"),
  },
];

  return (
     <View style={styles.container}>
       <Text style={styles.titulo}>Territorio 6</Text>
 
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