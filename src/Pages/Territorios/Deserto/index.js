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
}