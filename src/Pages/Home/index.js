import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🐾 ZooKids</Text>

      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("Floresta")}
      >
        <Text style={styles.texto}>🌳 Floresta</Text>
      </Pressable>

      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("Oceano")}
      >
        <Text style={styles.texto}>🌊 Oceano</Text>
      </Pressable>

      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("Deserto")}
      >
        <Text style={styles.texto}>🏜️ Deserto</Text>
      </Pressable>

      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("Savana")}
      >
        <Text style={styles.texto}>🦁 Savana</Text>
      </Pressable>

      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("Artico")}
      >
        <Text style={styles.texto}>❄️ Ártico</Text>
      </Pressable>

      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("Jurassic")}
      >
        <Text style={styles.texto}>🦖 Jurassic</Text>
      </Pressable>
    </View>
  );
}