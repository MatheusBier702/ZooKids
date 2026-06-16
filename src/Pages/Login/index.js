import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Pressable } from "react-native";
import styles from "./styles";
import React from "react";

export default function Login({ navigation }) {
  const [nome, setNome] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [erro, setErro] = React.useState(null);

  function validateName(value) {
    if (value.length === 0) {
      setErro("Preencha um valor!");
      return false;
    } else if (
      !/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/.test(value)
    ) {
      setErro("Preencha um nome válido");
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function validateIdade(value) {
    if (value.length === 0) {
      setErro("Preencha um valor!");
      return false;
    } else if (
      !/^([1-9]|[1-9]\d|1[0-1]\d)$/.test(value)
    ) {
      setErro("Preencha uma idade válido");
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function handleBlurNome() {
    validateName(nome);
  }
  function handleBlurIdade() {
    validateIdade(nome);
  }

  function handleChangeNome(value) {
    setNome(value);
    if (erro) {
      validateName(value);
    }
  }
  function handleChangeIdade(value) {
    setIdade(value);
    if (erro) {
      validateIdade(value);
    }
  }

  function handleSubmit() {
    const isValidName = validateName(nome);
    const isValidIdade = validateIdade(idade);


    if (isValidName && isValidIdade) {
      navigation.navigate("Home");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zoo Kids</Text>

      <Text style={styles.subtitle}>
        Entre para começar a aventura
      </Text>

      <TextInput
        value={nome}
        style={styles.input}
        placeholder="Nome"
        onChangeText={handleChangeNome}
        onBlur={handleBlurNome}
      />
      <TextInput
        value={idade}
        style={styles.input}
        placeholder="Idade"
        onChangeText={handleChangeIdade}
        onBlur={handleBlurIdade}
      />

      {erro && <Text>{erro}</Text>}

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <StatusBar style="light" />
    </View>
  );
}