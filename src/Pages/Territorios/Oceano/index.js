import React, { useState } from "react";
import {View, Text, FlatList, Pressable, Modal, StyleSheet,} from "react-native";
import styles from "./styles";

export default function Floresta() {
  const [animalSelecionado, setAnimalSelecionado] = useState(null);

  const animais = [
    {
      id: "1",
      nome: "Tubarão",
      descricao: "...",
    },
     {
    id: "2",
    nome: "Golfinho",
    descricao: "...",
  },
  {
    id: "3",
    nome: "Baleia",
    descricao: "...",
  },
  {
    id: "4",
    nome: "Polvo",
    descricao: "...",
  }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Floresta</Text>

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