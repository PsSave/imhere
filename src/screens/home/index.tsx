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
    if (participants.includes("Laura")) {
      return Alert.alert(
        "Atenção!",
        "Já existe um participante na lista com esse nome"
      );
    }
    console.log("Adicionar participante");
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Atenção", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Participante deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
