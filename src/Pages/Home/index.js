import { StatusBar } from 'expo-status-bar';
import { View, Text,  Pressable, ScrollView, ImageBackground,} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
const territorios = [
    {
      nome: "Floresta",
      imagem:"./assets/Floresta.webp",
      tela: "Floresta",
    },

    {
      nome: "Oceano",
      imagem: "./assets/Oceano.webp",
      tela: "Oceano",
    },

    {
      nome: "Deserto",
      imagem: "./assets/Deserto.webp",
      tela: "Deserto",
    },

    {
      nome: "Savana",
      imagem: "./assets/Savana.webp",
      tela: "Savana",
    },

    {
      nome: "Ártico",
      imagem: "./assets/Artico.webp",
      tela: "Artico",
    },

    {
      nome: "Jurassic",
      imagem: "./assets/Jurassic.webp",
      tela: "Jurassic",
    },
  ];

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>
        Zoo Kids
      </Text>

      <Text style={styles.subtitulo}>
        Escolha um território
      </Text>
{
  territorios.map((territorio, index) => (
    <Pressable key={index} style={styles.card}>
      <Text>
        {territorio.nome}
      </Text>
    </Pressable>
  ))
}
    </ScrollView>
  );
}
//Nao aguento mais :(