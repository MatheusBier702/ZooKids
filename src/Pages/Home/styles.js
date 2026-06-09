import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#2E7D32",
  },

  card: {
    backgroundColor: "#4CAF50",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,

    elevation: 5,
  },

  texto: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;