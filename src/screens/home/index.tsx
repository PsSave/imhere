import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";

export default function Home() {
  const participants = [
    "Pedro Samuel",
    "Milton",
    "Zé cadunga",
    "Oreia",
    "Ana",
    "Vitor",
    "Laura",
    "Hubsom",
    "Ednaldo Pereira",
    "Ruyter",
    "Ash",
  ];

  function handleAddParticipant() {
    console.log("Adicionar participante");
  }

  function handleRemoveParticipant(name: string) {
    console.log("Remover participante:", name);
  }

  return (
    // View é um container que permite agrupar elementos e estilizá-los juntos (como uma div no HTML)
    <View style={styles.container}>
      {/* Text é um componente para exibir texto */}
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.subtitle}>Terça-feira, 19 de Outubro</Text>
      {/* TextInput é um componente para entrada de texto */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do participante"
          placeholderTextColor="#6b6b6b"
          keyboardType="default"
        />
        {/* TouchableOpacity é um componente que detecta toques do usuário */}
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant, index) => (
          <Participant
            key={index}
            name={participant}
            onRemove={() => handleRemoveParticipant(participant)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
