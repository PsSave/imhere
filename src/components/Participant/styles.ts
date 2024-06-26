import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F1E25",
    paddingVertical: 12,
    paddingHorizontal: 16,

    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  name: {
    flex: 1,
    color: "#f5f5f5",
    fontSize: 18,
  },

  button: {
    backgroundColor: "#E23C44",
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
