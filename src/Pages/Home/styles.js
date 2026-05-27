import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b9fbc0",
    padding: 15,
  },

  titulo: {
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    color: "#14532d",
  },

  subtitulo: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 25,
    color: "#166534",
  },

  card: {
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 6,
  },

  imagem: {
    width: "100%",
    height: 180,
    justifyContent: "center",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },

  nome: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  cardPressionado: {
  transform: [{ scale: 0.97 }],
  opacity: 0.9,
},
});

export default styles;