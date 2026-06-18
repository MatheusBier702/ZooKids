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

export default function Territorio1() {
  const [animalSelecionado, setAnimalSelecionado] = useState(null);

  const animais = [
    {
  id: "1",
  nome: "Onça Pintada",
  descricao:
    "🍖 Alimentação: Carnívora\n⚖️ Peso médio: 100 kg\n📏 Comprimento médio: 1,8 m\n\n📚 Sobre:\nA onça-pintada é o maior felino das Américas e vive em florestas, rios e áreas de mata.\n\n✨ Curiosidade:\nEla possui uma das mordidas mais fortes entre todos os felinos do mundo!",
  imagem: require("./img/onça.png"),
},

{
  id: "2",
  nome: "Onça Parda",
  descricao:
    "🍖 Alimentação: Carnívora\n⚖️ Peso médio: 60 kg\n📏 Comprimento médio: 1,5 m\n\n📚 Sobre:\nA onça-parda é um felino muito ágil e pode viver em diversos ambientes, desde florestas até montanhas.\n\n✨ Curiosidade:\nEla consegue dar saltos de até 6 metros de distância!",
  imagem: require("./img/oncaParda.png"),
},

{
  id: "3",
  nome: "Jacaré",
  descricao:
    "🍖 Alimentação: Carnívoro\n⚖️ Peso médio: 200 kg\n📏 Comprimento médio: 3 m\n\n📚 Sobre:\nOs jacarés vivem próximos a rios, lagoas e áreas alagadas. São excelentes nadadores.\n\n✨ Curiosidade:\nEles conseguem ficar vários minutos embaixo da água sem respirar!",
  imagem: require("./img/jacare.png"),
},

{
  id: "4",
  nome: "Elefante",
  descricao:
    "🌿 Alimentação: Herbívoro\n⚖️ Peso médio: 5.000 kg\n📏 Altura média: 3 m\n\n📚 Sobre:\nO elefante é o maior animal terrestre do planeta e utiliza sua tromba para pegar alimentos e beber água.\n\n✨ Curiosidade:\nA tromba de um elefante possui mais de 40 mil músculos!",
  imagem: require("./img/elefante.png"),
},

{
  id: "5",
  nome: "Flamingo",
  descricao:
    "🦐 Alimentação: Pequenos crustáceos e algas\n⚖️ Peso médio: 3 kg\n📏 Altura média: 1,4 m\n\n📚 Sobre:\nOs flamingos vivem em grupos e são conhecidos por suas penas rosadas.\n\n✨ Curiosidade:\nEles costumam dormir apoiados em apenas uma perna!",
  imagem: require("./img/flamingo.png"),
},

{
  id: "6",
  nome: "Pequenos Felinos",
  descricao:
    "🍖 Alimentação: Carnívora\n⚖️ Peso médio: Varia conforme a espécie\n📏 Tamanho médio: 40 cm a 1 m\n\n📚 Sobre:\nOs pequenos felinos incluem gatos-do-mato, jaguatiricas e outras espécies ágeis e silenciosas.\n\n✨ Curiosidade:\nMuitos deles conseguem enxergar muito melhor do que nós durante a noite!",
  imagem: require("./img/pequeno.png"),
},

{
  id: "7",
  nome: "Quati",
  descricao:
    "🍎 Alimentação: Frutas, insetos e pequenos animais\n⚖️ Peso médio: 5 kg\n📏 Comprimento médio: 1 m com a cauda\n\n📚 Sobre:\nO quati é um mamífero muito curioso e inteligente que vive em grupos.\n\n✨ Curiosidade:\nSua longa cauda ajuda a manter o equilíbrio quando sobe em árvores!",
  imagem: require("./img/quati.png"),
},

{
  id: "8",
  nome: "Lobo-Guará",
  descricao:
    "🍎 Alimentação: Frutas, insetos e pequenos animais\n⚖️ Peso médio: 25 kg\n📏 Altura média: 90 cm\n\n📚 Sobre:\nO lobo-guará é o maior canídeo da América do Sul e vive principalmente no Cerrado brasileiro.\n\n✨ Curiosidade:\nEle adora comer a fruta lobeira, conhecida como 'fruta do lobo'!",
  imagem: require("./img/Lobo.png"),
},

{
  id: "9",
  nome: "Iraras",
  descricao:
    "🍖 Alimentação: Frutas, ovos, insetos e pequenos animais\n⚖️ Peso médio: 5 kg\n📏 Comprimento médio: 70 cm\n\n📚 Sobre:\nA irara é um mamífero muito ágil que vive em florestas da América Central e do Sul.\n\n✨ Curiosidade:\nEla é uma excelente escaladora e passa boa parte do tempo nas árvores!",
  imagem: require("./img/iraras.png"),
},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Territorio 1</Text>

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