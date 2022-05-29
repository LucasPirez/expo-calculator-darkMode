import React, { useState } from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { colors } from "../styles/colors";

export default function Keyboard() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [resul, setResul] = useState("");
  const [visible, setVisible] = useState(false);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
      console.log("pres" + " " + firstNumber);
    }
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");

    setResul("0");
  };

  const handleOperationPress = (buttonValue: string) => {
    if (secondNumber !== "" && firstNumber !== "") {
      setOperation(buttonValue);
      function ase() {
        switch (operation) {
          case "+":
            clear();
            setResul(
              (
                (parseFloat(secondNumber) * 100 +
                  parseFloat(firstNumber) * 100) /
                100
              ).toString()
            );
            setOperation(operation);
            setSecondNumber(() =>
              (
                (parseFloat(secondNumber) * 100 +
                  parseFloat(firstNumber) * 100) /
                100
              ).toString()
            );
            break;
          case "-":
            clear();
            setResul(
              (
                (parseFloat(secondNumber) * 100 -
                  parseFloat(firstNumber) * 100) /
                100
              ).toString()
            );
            setOperation(operation);
            setSecondNumber(
              (
                (parseFloat(secondNumber) * 100 -
                  parseFloat(firstNumber) * 100) /
                100
              ).toString()
            );
            break;
          case "*":
            clear();
            setResul(
              (parseFloat(secondNumber) * parseFloat(firstNumber)).toString()
            );
            setOperation(operation);
            setSecondNumber(
              (parseFloat(secondNumber) * parseFloat(firstNumber)).toString()
            );
            break;
          case "/":
            clear();
            setResul(
              (parseFloat(secondNumber) / parseFloat(firstNumber)).toString()
            );
            setOperation(operation);
            setSecondNumber(
              (parseFloat(secondNumber) / parseFloat(firstNumber)).toString()
            );
            break;
          case "^":
            clear();
            setResul(
              Math.pow(
                parseFloat(secondNumber),
                parseFloat(firstNumber)
              ).toString()
            );
            setOperation(operation);
            setSecondNumber(
              Math.pow(
                parseFloat(secondNumber),
                parseFloat(firstNumber)
              ).toString()
            );

            break;
          default:
            clear();

            // setResul(0)
            break;
        }
      }
      ase();
    } else {
      setOperation(buttonValue);
      setSecondNumber(firstNumber);

      setFirstNumber("");

      console.log("handl" + " " + firstNumber);
    }
  };

  const firstNumberDisplay = () => {
    if (parseFloat(resul) !== 0) {
      return (
        <Text
          style={
            parseFloat(resul) < 99999
              ? [Styles.screenFirstNumber, { color: colors.btnGray }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: colors.btnGray },
                ]
          }
        >
          {resul?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };
  [];

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        console.log("primero " + resul);

        setResul(
          (
            (parseFloat(secondNumber) * 100 + parseFloat(firstNumber) * 100) /
            100
          ).toString()
        );
        console.log("segundo" + resul);
        setFirstNumber(() =>
          (
            (parseFloat(secondNumber) * 100 + parseFloat(firstNumber) * 100) /
            100
          ).toString()
        );
        console.log("tercero" + resul);
        console.log("operation" + firstNumber);
        break;
      case "-":
        clear();

        setResul(
          (
            (parseFloat(secondNumber) * 100 - parseFloat(firstNumber) * 100) /
            100
          ).toString()
        );
        setFirstNumber(
          (
            (parseFloat(secondNumber) * 100 - parseFloat(firstNumber) * 100) /
            100
          ).toString()
        );
        break;
      case "*":
        clear();
        setResul(
          (parseFloat(secondNumber) * parseFloat(firstNumber)).toString()
        );
        setFirstNumber(
          (parseFloat(secondNumber) * parseFloat(firstNumber)).toString()
        );
        break;
      case "/":
        clear();
        setResul(
          (parseFloat(secondNumber) / parseFloat(firstNumber)).toString()
        );
        setFirstNumber(
          (parseFloat(secondNumber) / parseFloat(firstNumber)).toString()
        );
        break;
      case "^":
        clear();
        setResul(
          Math.pow(parseFloat(secondNumber), parseFloat(firstNumber)).toString()
        );
        setFirstNumber(
          Math.pow(parseFloat(secondNumber), parseFloat(firstNumber)).toString()
        );

        break;
      default:
        clear();

        // setResul
        0;
        break;
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignSelf: "baseline",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text
            style={{
              color: "purple",
              fontSize: 50,
              fontWeight: "500",
            }}
          >
            {operation}
          </Text>
          {firstNumber}
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={() => clear()} />
        <Button title="％" isGray onPress={() => handleOperationPress("％")} />
        <Button title="^" isBlue onPress={() => handleOperationPress("^")} />
        <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button
          title="⌫"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}
