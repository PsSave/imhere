import { StatusBar } from "react-native";
import Home from "./src/screens/home";

export default function App() {
  return (
    <>
      <StatusBar // ela ajusta a barra de navegação superior do celular (barStyle mudar a cor, background pra definiar a cor dos icones)
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      ></StatusBar>
      <Home />
    </>
  );
}
