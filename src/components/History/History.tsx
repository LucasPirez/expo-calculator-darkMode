import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Tema } from "../../context/Tema";
import { getHitory } from "../apiHistory";

import { AnimatedHistory } from "./AnimateHistory";
import { colors } from "../../styles/colors";

import React, { useState, useEffect, useContext } from "react";

interface Props {
  setShow?: any;
  setFirstNumber?: any;
  setHistory?: any;
}

export default function History({
  setFirstNumber,
  setShow,
  setHistory,
}: Props) {
  const theme = useContext(Tema);
  const [render, setRender] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getHitory();
      console.log(response);

      setRender(response.reverse());
    })();
  }, []);

  const closeHistory = () => {
    setShow(false);
  };

  const pressHistory = (a: string) => {
    setFirstNumber(a);
    setHistory({ calculo: a, result: "" });
    setShow(false);
  };

  return (
    <AnimatedHistory>
      <ScrollView style={styles.container}>
        <>
          <TouchableOpacity onPress={closeHistory} style={styles.close}>
            <Text style={styles.textClose}>Close</Text>
          </TouchableOpacity>

          {render &&
            render.map((u) => (
              <View key={Math.random()}>
                <TouchableOpacity
                  onPress={() => pressHistory(u["result"])}
                  style={[
                    theme === "dark"
                      ? styles.containerHistoryDark
                      : styles.containerHistory,
                  ]}
                >
                  <Text
                    style={[theme === "dark" ? styles.textDark : styles.text]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {u["calculo"]}
                  </Text>
                  <Text
                    style={[theme === "dark" ? styles.textDark : styles.text]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {u["result"]}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </>

        <TouchableOpacity onPress={() => setShow(false)} style={styles.close}>
          <Text style={styles.textClose}>Close</Text>
        </TouchableOpacity>
      </ScrollView>
    </AnimatedHistory>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    backgroundColor: colors.light,
    borderRadius: 8,
    width: 230,
    maxHeight: 350,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    marginVertical: 2,
  },
  textDark: {
    fontSize: 18,
    marginLeft: 10,
    marginVertical: 2,
    color: colors.light,
  },
  close: {
    height: 28,
    backgroundColor: "#be5b59",
    borderRadius: 8,
  },
  textClose: {
    position: "absolute",
    right: 5,
    top: 3,
    color: "#fff",
    fontWeight: "bold",
  },
  containerHistory: {
    marginTop: 2,
    borderRadius: 5,
    borderWidth: 0.5,
    backgroundColor: colors.light,
    borderColor: "#818080",
  },
  containerHistoryDark: {
    marginTop: 2,
    borderRadius: 5,
    borderWidth: 0.5,
    backgroundColor: colors.lightDark,
    borderColor: "#818080",
  },
});
