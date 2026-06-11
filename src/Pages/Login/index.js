import { StatusBar } from 'expo-status-bar';

import {
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import React from 'react';



const types = {
  email: {
    name: 'email',
    regex: true, 
    message: "Email Inválido"
  }, 
  nome: {
    name: 'name',
    regex: true, 
    message: "Nome Inválido"
  }, 
  idade: {
    name: 'number',
    regex: true, 
    message: "Idade Inválido"
  }, 

}

export default function Login() {

  const navigation = useNavigation();
  const [validate, setValidate] = React.useState(false)
  const [value, setValue] = React.useState('')

  function handleValidate() {
    setValidate(true)
    if(validate) {
      return navigation.navigate('Home')
    }
  }

  console.log(value)
  // function handleClick() {
  //   console.log("entrou")
    
  //   handleValidate()
  // }

  return (
    <View style={styles.container}>

      {}

      <Text style={styles.title}>
        Zoo Kids
      </Text>

      <Text style={styles.subtitle}>
        Entre para começar a aventura
      </Text>

      <TextInput
        
        style={styles.input}
        placeholder="Nome"
        onChange={({target}) => setValue(target.value)}
      />
        
      <TextInput
        style={styles.input}

        placeholder="Idade"
      />

      <TextInput
        style={styles.input}
        keyboardType='email'
        placeholder="Email"
      />

  
      <Pressable
        style={styles.button}
        onPress={handleValidate}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </Pressable>

      <StatusBar style="light" />

    </View>
  );
}