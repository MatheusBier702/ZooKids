import React from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import styles from "./styles";

const territorios = [
  {
    id: "1",
    nome: "Territorio 1",
    tela: "Territorio 1",
    imagem: require("../../../assets/t1.png"),
  },
  {
    id: "2",
    nome: "Territorio 2",
    tela: "Territorio 2",
    imagem: require("../../../assets/t2.png"),
  },
  {
    id: "3",
    nome: "Territorio 3",
    tela: "Territorio 3",
    imagem: require("../../../assets/t3.png"),
  },
  {
    id: "4",
    nome: "Territorio 4",
    tela: "Territorio 4",
    imagem: require("../../../assets/t4.png"),
  },
  {
    id: "5",
    nome: "Territorio 5",
    tela: "Territorio 5",
    imagem: require("../../../assets/t5.png"),
  },
  {
    id: "6",
    nome: "Territorio 6",
    tela: "Territorio 6",
    imagem: require("../../../assets/t6.png"),
  },
];


export default function Home({ navigation }) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo}>ZooKids</Text>

      <FlatList
        data={territorios}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.card,
              pressed && { opacity: 0.9 }
            ]}
            onPress={() => navigation.navigate(item.tela)}
          >
            <Image
              source={item.imagem}
              style={styles.imagem}
            />

            <View style={styles.info}>
              <Text style={styles.texto}>
                {item.nome}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}