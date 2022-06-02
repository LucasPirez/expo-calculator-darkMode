import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const Styles = StyleSheet.create({
  // Button
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: colors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: colors.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: colors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: colors.black,
  },
  // Keyboard
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewBottom: {
    position: "absolute",
    bottom: 10,
  },
  screenFirstNumber: {
    fontSize: 70,
    color: colors.gray,
    fontWeight: "200",

    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: colors.gray,
    fontWeight: "200",
    marginRight: 40,

    alignSelf: "flex-end",
  },
  more: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
