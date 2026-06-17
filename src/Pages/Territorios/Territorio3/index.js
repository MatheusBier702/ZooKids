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
        "O urso polar vive nas regiões geladas do Ártico e é um excelente nadador.",
      //imagem: require("../../../assets/urso-polar.png"),
    },
    {
      id: "2",
      nome: "Raposinha Do Campo",
      descricao:
        "As focas passam boa parte da vida na água e conseguem suportar temperaturas muito baixas.",
      //imagem: require("../../../assets/foca.png"),
    },
    {
      id: "3",
      nome: "Cachorro Do Mato",
      descricao:
        "A morsa possui grandes presas e utiliza seus bigodes para encontrar alimento.",
      //imagem: require("../../../assets/morsa.png"),
    },
    {
      id: "4",
      nome: "Tamanduá Bandeira",
      descricao:
        "A coruja-das-neves possui penas brancas que ajudam na camuflagem.",
      //imagem: require("../../../assets/coruja-neve.png"),
    },
    {
      id: "6",
      nome: "Urso De Oculos",
      descricao:
        "A coruja-das-neves possui penas brancas que ajudam na camuflagem.",
      //imagem: require("../../../assets/coruja-neve.png"),
    },
    {
      id: "7",
      nome: "Mundo Dino",
      descricao:
        "....",
      //imagem: require("../../../assets/coruja-neve.png"),
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
              source={animais.imagem}
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
        transparent
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