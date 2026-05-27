import { StatusBar } from 'expo-status-bar';

import {
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Zoo Kids
      </Text>

      <Text style={styles.subtitle}>
        Entre para começar a aventura
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
      />

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </Pressable>

      <StatusBar style="light" />

    </View>
  );
}