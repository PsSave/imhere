import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.subtitle}>Terça-feira, 19 de Outubro</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do evento"
        placeholderTextColor="#6b6b6b"
        keyboardType="default"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
