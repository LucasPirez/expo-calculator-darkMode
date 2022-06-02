import React, { useState, useEffect } from "react";
import Button from "./Button";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { colors } from "../styles/colors";
import useResult from "./useResult";

export default function Keyboard() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");

  const [visible, setVisible] = useState(false);
  const { first } = useResult(firstNumber, secondNumber, operation);

  console.log(first.length);
  console.log("fir " + firstNumber);
  console.log("second " + secondNumber);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
  };

  const equal = () => {
    setFirstNumber(first);
    setSecondNumber("");
    setOperation("");
  };

  const handleOperationPress = (buttonValue: string) => {
    if (buttonValue === "-" && secondNumber === "" && firstNumber === "") {
      setFirstNumber("-");
    } else {
      if (firstNumber !== "") {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
        if (secondNumber !== "") {
          setOperation(buttonValue);
          setSecondNumber(first);
          setFirstNumber("");
        }
      }
    }
  };

  const firstNumberDisplay = () => {
    if (first !== "NaN") {
      return (
        <Text
          style={
            first.length < 8
              ? [Styles.screenFirstNumber, { color: colors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 40, color: colors.result },
                ]
          }
        >
          {first?.toString()}
        </Text>
      );
    }

    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "space-around",
          height: 130,
          width: "90%",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text
            style={{
              color: "purple",
              position: "absolute",
              fontSize: 40,
              fontWeight: "500",
            }}
          >
            {operation}
          </Text>
          {firstNumber}
        </Text>
        <View style={{ height: 100 }}>{firstNumberDisplay()}</View>
      </View>
      <View style={Styles.row}>
        <TouchableOpacity style={styles.delete} onPress={() => clear()}>
          <Text style={styles.text}> C </Text>
        </TouchableOpacity>

        <Button title="More" more onPress={() => setVisible(!visible)} />
        {visible ? (
          <Button title="^" isBlue onPress={() => handleOperationPress("^")} />
        ) : (
          <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
        )}
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        {visible ? (
          <Button
            title="％"
            isBlue
            onPress={() => handleOperationPress("％")}
          />
        ) : (
          <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
        )}
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        {visible ? (
          <Button title="√" isBlue onPress={() => handleOperationPress("√")} />
        ) : (
          <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
        )}
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        {visible ? (
          <Button title="!" isBlue onPress={() => handleOperationPress("!")} />
        ) : (
          <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
        )}
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button
          title="⌫"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title="=" isBlue onPress={() => equal()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  delete: {
    flex: 1,
    margin: 8,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b52e2b",

    borderRadius: 24,
  },
  text: {
    fontSize: 50,
    color: "#fff",
  },
});
