import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131313",
    padding: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f5f5f5",
    marginTop: 24,
  },

  subtitle: {
    fontSize: 18,
    color: "#c4c4c4",
  },

  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
    marginTop: 24,
    paddingBottom: 28,
    marginBottom: 24,
    borderBottomColor: "#999999",
    borderBottomWidth: 1,
  },

  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    color: "#f5f5f5",
    fontSize: 18,
    borderRadius: 5,
    padding: 12,
  },

  button: {
    backgroundColor: "#31cf67",
    borderRadius: 5,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#f5f5f5",
    fontWeight: "bold",
    fontSize: 24,
  },
});
