import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Tema } from "../context/Tema";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
  more?: boolean;
}

export default function Button({
  title,
  onPress,
  isBlue,
  isGray,
  more,
}: ButtonProps) {
  const theme = useContext(Tema);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === "light"
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      {more ? (
        <Text style={[theme === "dark" ? Styles.moreDark : Styles.more]}>
          {title}
        </Text>
      ) : (
        <Text
          style={[
            isBlue || isGray
              ? Styles.smallTextLight
              : theme === "dark"
              ? Styles.smallTextLight
              : Styles.smallTextDark,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
