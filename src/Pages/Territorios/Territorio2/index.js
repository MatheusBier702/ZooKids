import React, { useState } from "react";
import {View, Text, FlatList, Pressable, Modal, Image,} from "react-native";
import styles from "./styles";

export default function Territorio2() {
  const [animalSelecionado, setAnimalSelecionado] = useState(null);
  const animais = [
  {
  id: "1",
  nome: "Arara",
  descricao:
    "🌰 Alimentação: Frutas, sementes e castanhas\n⚖️ Peso médio: 1 kg\n📏 Tamanho médio: 90 cm\n\n📚 Sobre:\nAs araras são aves muito coloridas que vivem em florestas tropicais da América do Sul.\n\n✨ Curiosidade:\nElas conseguem quebrar castanhas muito duras com seus bicos poderosos!",
  imagem: require("./img/arara.png"),
},

{
  id: "2",
  nome: "Papagaio",
  descricao:
    "🌰 Alimentação: Frutas, sementes e flores\n⚖️ Peso médio: 400 g\n📏 Tamanho médio: 35 cm\n\n📚 Sobre:\nOs papagaios são aves inteligentes e sociáveis que vivem em grupos.\n\n✨ Curiosidade:\nAlguns papagaios conseguem imitar sons e até palavras humanas!",
  imagem: require("./img/papagaio.png"),
},

{
  id: "3",
  nome: "Serpente",
  descricao:
    "🍖 Alimentação: Pequenos animais\n⚖️ Peso médio: Varia conforme a espécie\n📏 Tamanho médio: De 30 cm a mais de 5 m\n\n📚 Sobre:\nAs serpentes são répteis que não possuem patas e utilizam seu corpo para se locomover.\n\n✨ Curiosidade:\nElas conseguem sentir vibrações do chão para perceber o que acontece ao redor!",
  imagem: require("./img/serpente.png"),
},

{
  id: "4",
  nome: "Mico",
  descricao:
    "🍎 Alimentação: Frutas, insetos e néctar\n⚖️ Peso médio: 300 a 700 g\n📏 Tamanho médio: 20 cm\n\n📚 Sobre:\nOs micos são pequenos primatas muito ágeis que vivem nas árvores.\n\n✨ Curiosidade:\nEles conseguem dar grandes saltos entre galhos sem cair!",
  imagem: require("./img/mico.png"),
},

{
  id: "5",
  nome: "Anfíbios",
  descricao:
    "🦗 Alimentação: Insetos e pequenos animais\n⚖️ Peso médio: Varia conforme a espécie\n📏 Tamanho médio: De poucos centímetros até 30 cm\n\n📚 Sobre:\nOs anfíbios, como sapos e salamandras, vivem parte da vida na água e parte em terra firme.\n\n✨ Curiosidade:\nMuitos anfíbios respiram também através da pele!",
  imagem: require("./img/anfibios.png"),
},

{
  id: "6",
  nome: "Formigueiro",
  descricao:
    "🌱 Alimentação: Folhas, sementes e fungos\n⚖️ Peso médio: Menos de 1 g por formiga\n📏 Tamanho médio: 2 a 15 mm\n\n📚 Sobre:\nUm formigueiro é uma grande comunidade onde cada formiga possui uma tarefa importante.\n\n✨ Curiosidade:\nAlguns formigueiros podem ter milhões de formigas trabalhando juntas!",
  imagem: require("./img/formigueiro.png"),
},

{
  id: "7",
  nome: "Invertebrados",
  descricao:
    "🍎 Alimentação: Muito variada\n⚖️ Peso médio: Varia conforme a espécie\n📏 Tamanho médio: De milímetros a vários metros\n\n📚 Sobre:\nOs invertebrados são animais que não possuem coluna vertebral, como borboletas, aranhas e polvos.\n\n✨ Curiosidade:\nMais de 95% das espécies animais do planeta são invertebrados!",
  imagem: require("./img/invertebrados.png"),
},

{
  id: "8",
  nome: "Coruja",
  descricao:
    "🍖 Alimentação: Pequenos animais e insetos\n⚖️ Peso médio: 500 g a 2 kg\n📏 Tamanho médio: 30 a 70 cm\n\n📚 Sobre:\nAs corujas são aves conhecidas por sua excelente visão e audição, principalmente durante a noite.\n\n✨ Curiosidade:\nUma coruja consegue girar a cabeça em até 270 graus!",
  imagem: require("./img/coruja.png"),
},
    
  ];

  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Territorio 2</Text>
  
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