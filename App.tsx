import { useState } from "react";
import { SafeAreaView, StyleSheet, Switch } from "react-native";
import { colors } from "./src/styles/colors";
import { Tema } from "./src/context/Tema";
import Keyboard from "./src/components/Keyboard";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Tema.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }]
        }
      >
        <Switch
          value={theme === "dark"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <Keyboard />
      </SafeAreaView>
    </Tema.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
});
