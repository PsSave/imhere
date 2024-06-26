import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./styles";

type ParticipantProps = {
  key: number;
  name: string;
  onRemove: () => void;
};

export default function Participant({ key, name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container} key={key}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
