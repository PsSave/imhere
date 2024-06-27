import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participant, setParticipant] = useState<string>("");

  function handleAddParticipant() {
    if (participants.includes(participant)) {
      return Alert.alert(
        "Cuidado!",
        "Já existe um participante na lista com esse nome"
      );
    }

    if (participant.length === 0) {
      return Alert.alert(
        "Atenção!",
        "Você precisa digitar o nome do participante para adiciona-lo a lista."
      );
    }

    setParticipants((prevState) => [...prevState, participant]);
    setParticipant("");
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Atenção", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          Alert.alert("Participante deletado!");
          setParticipants(
            participants.filter((participant) => participant != name)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
          value={participant}
          onChangeText={setParticipant}
        />
        {/* TouchableOpacity é um componente que detecta toques do usuário */}
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants} // passa os dados da lista
        keyExtractor={(item) => item} // passa qual vai ser a chave estraida
        renderItem={(
          { item, index } // renderiza o item
        ) => (
          <Participant
            key={index}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false} // desativa a rolagem
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não há participantes? Adicione agora mesmo um novo participante a
            sua lista de presença
          </Text>
        )}
      />
    </View>
  );
}
