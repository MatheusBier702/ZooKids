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
        "O urso polar vive nas regiões geladas do Ártico e é um excelente nadador.",
      //imagem: require("../../../assets/urso-polar.png"),
    },
    {
      id: "2",
      nome: "Onça Parda",
      descricao:
        "As focas passam boa parte da vida na água e conseguem suportar temperaturas muito baixas.",
      //imagem: require("../../../assets/foca.png"),
    },
    {
      id: "3",
      nome: "Jacaré",
      descricao:
        "A morsa possui grandes presas e utiliza seus bigodes para encontrar alimento.",
      //imagem: require("../../../assets/morsa.png"),
    },
    {
      id: "4",
      nome: "Elefante",
      descricao:
        "A coruja-das-neves possui penas brancas que ajudam na camuflagem.",
      //imagem: require("../../../assets/coruja-neve.png"),
    },
    {
      id: "6",
      nome: "Flamingo",
      descricao:
        "A coruja-das-neves possui penas brancas que ajudam na camuflagem.",
      //imagem: require("../../../assets/coruja-neve.png"),
    },
    {
      id: "7",
      nome: "Pequeno Felinos",
      descricao:
        "....",
      //imagem: require("../../../assets/coruja-neve.png"),
    },
    {
      id: "8",
      nome: "Quati",
      descricao:
        "....",
      //imagem: require("../../../assets/coruja-neve.png"),
    },
    {
      id: "9",
      nome: "Lobo Guará",
      descricao:
        "....",
      //imagem: require("../../../assets/coruja-neve.png"),
    },
    {
      id: "10",
      nome: "Iraras",
      descricao:
        "....",
      //imagem: require("../../../assets/coruja-neve.png"),
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
              resizeMode="cover"
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