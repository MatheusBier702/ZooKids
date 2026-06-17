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
    marginBottom: 20,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    elevation: 6,
  },

  imagem: {
    width: "100%",
    height: 200,
  },

  info: {
    padding: 15,
    alignItems: "center",
  },

  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#14532D",
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modal: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,

    elevation: 10,
  },

  modalImagem: {
    width: 250,
    height: 250,
    marginBottom: 15,
  },

  modalTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#14532D",
    marginBottom: 10,
    textAlign: "center",
  },

  modalTexto: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#7ED957",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 15,
  },

  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});