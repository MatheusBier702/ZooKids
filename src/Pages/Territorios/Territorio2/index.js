import React, { useState } from "react";
import {View, Text, FlatList, Pressable, Modal, StyleSheet,} from "react-native";
import styles from "./styles";

export default function Territorio2() {
  const [animalSelecionado, setAnimalSelecionado] = useState(null);
  const animais = [
    {
      id: "1",
      nome: "Arara",
      descricao:
        "O urso polar vive nas regiões geladas do Ártico e é um excelente nadador.",
      //imagem: require("../../../assets/urso-polar.png"),
    },
    {
      id: "2",
      nome: "Papagaio",
      descricao:
        "As focas passam boa parte da vida na água e conseguem suportar temperaturas muito baixas.",
      //imagem: require("../../../assets/foca.png"),
    },
    {
      id: "3",
      nome: "Serpente",
      descricao:
        "A morsa possui grandes presas e utiliza seus bigodes para encontrar alimento.",
      //imagem: require("../../../assets/morsa.png"),
    },
    {
      id: "4",
      nome: "Mico",
      descricao:
        "A coruja-das-neves possui penas brancas que ajudam na camuflagem.",
      //imagem: require("../../../assets/coruja-neve.png"),
    },
    {
      id: "6",
      nome: "Anfibios",
      descricao:
        "A coruja-das-neves possui penas brancas que ajudam na camuflagem.",
      //imagem: require("../../../assets/coruja-neve.png"),
    },
    {
      id: "7",
      nome: "Formigueiro",
      descricao:
        "....",
      //imagem: require("../../../assets/coruja-neve.png"),
    },
    {
      id: "8",
      nome: "Invertebrados",
      descricao:
        "....",
      //imagem: require("../../../assets/coruja-neve.png"),
    },
    {
      id: "9",
      nome: "Coruja",
      descricao:
        "....",
      //imagem: require("../../../assets/coruja-neve.png"),
    },
    
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Territorio 2</Text>

      <FlatList
        data={animais}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => setAnimalSelecionado(item)}
          >
            <Text style={styles.nome}>{item.nome}</Text>
          </Pressable>
        )}
      />

      <Modal
        visible={animalSelecionado !== null}
        transparent
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitulo}>
              {animalSelecionado?.nome}
            </Text>

            <Text>
              {animalSelecionado?.descricao}
            </Text>

            <Pressable
              style={styles.botao}
              onPress={() => setAnimalSelecionado(null)}
            >
              <Text>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}