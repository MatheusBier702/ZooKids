import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, SafeAreaView, Image, Pressable, ScrollView, Modal, View, SafeAreaViewBase } from "react-native";
import React, { useState } from "react";
import styles from "../../../Artico/styles";

export default function Index() {
    const [escolhaAnimal, setEscolhaAnimal] = useState(0);
    const [visivel, setVisivel] = useState(false);

    const animais = [
        {
            //tubarao branco
        },
        {
            //golfinho
        },
        {
            //polvo gigante do pacifico
        },
        {
            //tartaruga verde
        },
        {
            //baleia azul
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
                <Text style={styles.nome}>tubarao branco</Text>
            </Pressable>

            <Pressable onPress={() => abrirAnimal(1)}>
                <Image source={require("")} style={styles.imagem}/>
                <Text style={styles.nome}>golfinho</Text>
            </Pressable>

            <Pressable onPress={() => abrirAnimal(2)}>
                <Image source={require("")} style={styles.imagem}/>
                <Text style={styles.nome}>polvo gigante do pacifico</Text>
            </Pressable>

            <Pressable onPress={() => abrirAnimal(3)}>
                <Image source={require("")} style={styles.imagem}/>
                <Text style={styles.nome}>tartaruga verde</Text>
            </Pressable>

            <Pressable onPress={() => abrirAnimal(4)}>
                <Image source={require("")} style={styles.imagem}/>
                <Text style={styles.nome}>baleia azul</Text>
            </Pressable>
            </ScrollView>

            <Modal visible={visivel} animationType="slide">

            //aq vai colocar as informaçoes que vai colocar no modal dos animais    
            
            </Modal>





        </SafeAreaView>




    )
}