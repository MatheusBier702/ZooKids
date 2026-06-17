import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Animated,
} from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

<MaterialCommunityIcons
  name="paw"
  size={90}
  color="#7ED957"
/>

export default function Loading({ navigation }) {

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.timing(progress, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>

        <Animated.Text
          style={[
            styles.logo,
            { transform: [{ scale: scaleAnim }] }
          ]}
        >
          ZooKids
        </Animated.Text>

        <Text style={styles.subtitle}>
          Aprender Brincando
        </Text>

      </View>

      <View style={styles.card}>
        <Text style={styles.loadingText}>
          Carregando aplicação...
        </Text>

        <View style={styles.progressBar}>
          <Animated.View
            style={[
              styles.progress,
              { width: widthInterpolated }
            ]}
          />
        </View>
      </View>

      <Text style={styles.version}>
        Versão 1.0
      </Text>

    </View>
  );
}   