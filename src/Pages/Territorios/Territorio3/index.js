import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
  Image,
} from "react-native";
import styles from "./styles";

export default function Territorio3() {
  const [animalSelecionado, setAnimalSelecionado] = useState(null);

  const animais = [
   {
  id: "1",
  nome: "Axolote",
  descricao:
    "🍖 Alimentação: Pequenos peixes, insetos e vermes\n⚖️ Peso médio: 60 a 200 g\n📏 Tamanho médio: 15 a 30 cm\n\n📚 Sobre:\nO axolote é um animal aquático muito especial que vive no México. Ele mantém características de filhote durante toda a vida.\n\n✨ Curiosidade:\nO axolote consegue regenerar partes do corpo, como patas e até partes do coração!",
  imagem: require("./img/axolote.png"),
},

{
  id: "2",
  nome: "Raposinha do Campo",
  descricao:
    "🍎 Alimentação: Frutas, insetos e pequenos animais\n⚖️ Peso médio: 3 a 4 kg\n📏 Tamanho médio: 60 cm\n\n📚 Sobre:\nA raposinha-do-campo é uma das menores raposas da América do Sul e vive em áreas abertas e campos.\n\n✨ Curiosidade:\nSuas orelhas grandes ajudam a ouvir sons bem distantes!",
  imagem: require("./img/raposa.png"),
},

{
  id: "3",
  nome: "Cachorro-do-Mato",
  descricao:
    "🍎 Alimentação: Frutas, insetos, aves e pequenos animais\n⚖️ Peso médio: 5 a 10 kg\n📏 Tamanho médio: 70 cm\n\n📚 Sobre:\nO cachorro-do-mato vive em diversas regiões do Brasil e costuma ser mais ativo durante a noite.\n\n✨ Curiosidade:\nApesar do nome, ele não é um cachorro doméstico e vive livre na natureza.",
  imagem: require("./img/cachorro.png"),
},

{
  id: "4",
  nome: "Tamanduá-Bandeira",
  descricao:
    "🐜 Alimentação: Formigas e cupins\n⚖️ Peso médio: 30 a 40 kg\n📏 Tamanho médio: 2 m (com a cauda)\n\n📚 Sobre:\nO tamanduá-bandeira possui um focinho comprido e uma língua enorme para capturar insetos.\n\n✨ Curiosidade:\nSua língua pode chegar a 60 centímetros de comprimento!",
  imagem: require("./img/tamandua.png"),
},

{
  id: "5",
  nome: "Urso-de-Óculos",
  descricao:
    "🍎 Alimentação: Frutas, plantas e pequenos animais\n⚖️ Peso médio: 80 a 140 kg\n📏 Altura média: 1,8 m em pé\n\n📚 Sobre:\nO urso-de-óculos vive nas montanhas da América do Sul. Seu nome vem das manchas claras ao redor dos olhos.\n\n✨ Curiosidade:\nCada urso possui marcas diferentes, como se fossem impressões digitais!",
  imagem: require("./img/urso.png"),
},

{
  id: "6",
  nome: "Mundo Dino",
  descricao:
    "🦖 Alimentação: Variada\n⚖️ Peso: Dependia da espécie\n📏 Tamanho: De poucos centímetros a mais de 30 metros\n\n📚 Sobre:\nOs dinossauros viveram na Terra há milhões de anos, muito antes dos seres humanos aparecerem.\n\n✨ Curiosidade:\nNem todos os dinossauros eram gigantes. Alguns tinham o tamanho de uma galinha!\n\n🌟 Missão:\nExplore o Mundo Dino e descubra diferentes espécies que habitaram nosso planeta!",
  imagem: require("./img/dino.png"),
},
    
  ];

  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Territorio 3</Text>
  
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