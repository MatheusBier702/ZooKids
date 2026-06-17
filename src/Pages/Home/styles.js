import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3FFF0",
    padding: 16,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#14532D",
    marginVertical: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 18,
    overflow: "hidden",

    elevation: 6,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },

  imagem: {
    width: "100%",
    height: 180,
  },

  info: {
    padding: 15,
    alignItems: "center",
  },

  texto: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#14532D",
  },
});