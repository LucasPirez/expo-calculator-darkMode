import { View, StyleSheet, TouchableOpacity, Button } from "react-native";
import History from "./History";
import { getHitory } from "../apiHistory";
import React, { useState, useEffect } from "react";

interface Props {
  setFirstNumber?: any;
  setHistory?: any;
}

export default function ShowHistory({ setFirstNumber, setHistory }: Props) {
  const [show, setShow] = useState(false);
  const [renderHistory, setRenderHistory] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getHitory();

      setRenderHistory(response);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {renderHistory.length > 0 &&
        (!show ? (
          <Button
            title="History"
            color="#2d5a74"
            onPress={() => setShow(true)}
          />
        ) : (
          <>
            <TouchableOpacity
              onPress={() => setShow(false)}
              style={styles.backContainer}
            ></TouchableOpacity>
            <History
              setFirstNumber={setFirstNumber}
              setShow={setShow}
              setHistory={setHistory}
            />
          </>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  backContainer: {
    position: "absolute",
    marginLeft: -300,
    width: 600,
    height: 800,
    backgroundColor: "#000",
    opacity: 0.1,
  },
  container: {
    position: "absolute",
    zIndex: 9,
    top: 12,
    right: 8,
  },
});
