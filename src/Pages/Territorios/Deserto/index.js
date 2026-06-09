<<<<<<< HEAD
import React, { useState } from "react";
import {View, Text, FlatList, Pressable, Modal, StyleSheet,} from "react-native";
import styles from "./styles";

export default function Floresta() {
  const [animalSelecionado, setAnimalSelecionado] = useState(null);

  const animais = [
    {
      id: "1",
      nome: "Camelo",
      descricao: "...",
    },
     {
    id: "2",
    nome: "Escorpião",
    descricao: "...",
  },
  {
    id: "3",
    nome: "Cobra-do-deserto",
    descricao: "...",
  },
  {
    id: "4",
    nome: "Raposa-do-deserto",
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
=======
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, SafeAreaView, Image, Pressable, ScrollView, Modal, View, SafeAreaViewBase } from "react-native";
import React, { useState } from "react";
import styles from "../../../Artico/styles";

export default function Index() {
    const [escolhaAnimal, setEscolhaAnimal] = useState(0);
    const [visivel, setVisivel] = useState(false);

    const animais = [
        {
            //camelo   
        },
        {
            //feneco
        },
        {
            //escorpiao do deserto
        },
        {
            //cascavel
        },
        {
            //largato de chifres
        }
    ];

    const animal = animais[escolhaAnimal];

    function abrirAnimal(animal){
        setEscolhaAnimal(animal);
        setVisivel(true);
    }
    return(
        <SafeAreaView>
            <ScrollView>
            <Pressable onPress={() => abrirAnimal(0)}>
                <Image source={require("")} style={styles.imagem}/>
                <Text style={styles.nome}>camelo</Text>
            </Pressable>

            <Pressable onPress={() => abrirAnimal(1)}>
                <Image source={require("")} style={styles.imagem}/>
                <Text style={styles.nome}>feneco</Text>
            </Pressable>

            <Pressable onPress={() => abrirAnimal(2)}>
                <Image source={require("")} style={styles.imagem}/>
                <Text style={styles.nome}>escorpiao do deserto</Text>
            </Pressable>

            <Pressable onPress={() => abrirAnimal(3)}>
                <Image source={require("")} style={styles.imagem}/>
                <Text style={styles.nome}>cascavel</Text>
            </Pressable>

            <Pressable onPress={() => abrirAnimal(4)}>
                <Image source={require("")} style={styles.imagem}/>
                <Text style={styles.nome}>largato de chifres</Text>
            </Pressable>
            </ScrollView>

            <Modal visible={visivel} animationType="slide">

            //aq vai colocar as informaçoes que vai colocar no modal dos animais    
            
            </Modal>





        </SafeAreaView>




    )
>>>>>>> 6cc7a83b688ff5e81a8477cee4c3a0c4e55ad226
}