# IMHERE

![Badge](https://img.shields.io/badge/React%20Native-0.63-blue)
![Badge](https://img.shields.io/badge/Node.js-v18.17.1-green)
![Badge](https://img.shields.io/badge/npm-v9.6.7-red)

## Sobre o Projeto

IMHERE é um aplicativo de eventos criado com React Native. Ele permite que os usuários criem eventos e registrem pessoas nesses eventos. Este projeto está em sua fase inicial e está aberto para contribuições.

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
  
## Como Começar

### Pré-requisitos

- É necessário ter um ambiente Node.js no seu computador para rodar este projeto. Se você não tem, pode baixar [aqui](https://nodejs.org/en/).
- Você também precisará do npm, que já vem junto com o Node.js, ou do yarn, que pode ser baixado [aqui](https://yarnpkg.com/).
- Finalmente, é necessário ter o React Native CLI instalado globalmente em sua máquina. Para instalar, execute o seguinte comando no terminal:

```bash
npm install -g react-native-cli
# ou
yarn global add react-native-cli
````

## Componentes

### Participant

Este componente é responsável por exibir o nome do participante e um botão para removê-lo. Ele é gerado cada vez que um novo participante é adicionado ao evento.

Aqui está um exemplo de como o componente é estruturado:

```jsx
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./styles";

type ParticipantProps = {
  name: string;
  onRemove: () => void;
};

export default function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Participant;
```

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para me alcançar:

- [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pedrosviki1265@gmail.com)
- [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/0000001save/?hl=pt-br)
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/me/)

Ou você pode abrir uma issue diretamente no GitHub.
