import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7ED957",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 60,
  },

  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 2,
  },

  subtitle: {
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
    letterSpacing: 1,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 10,
  },

  loadingText: {
    color: "#7ED957",
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },

  progressBar: {
    height: 12,
    backgroundColor: "#334155",
    borderRadius: 20,
    overflow: "hidden",
  },

  progress: {
    height: "100%",
    backgroundColor: "#7ED957",
    borderRadius: 20,
  },

  version: {
    position: "absolute",
    bottom: 40,
    color: "#94A3B8",
    fontSize: 12,
  },
});