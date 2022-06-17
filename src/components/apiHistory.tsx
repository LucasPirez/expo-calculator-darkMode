import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getHitory() {
  // AsyncStorage.removeItem("history");
  try {
    const history = await AsyncStorage.getItem("history");
    if (!history) return [];
    // console.log(history[0].length);

    return JSON.parse(history);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addHistory(calculo: string, result: string) {
  const re = /[+-/*^!√％]/g;

  try {
    const history = await getHitory();
    if (!history) throw "Error al obtener el carrito";
    if (
      result !== "NaN" &&
      result !== "" &&
      calculo !== "" &&
      calculo.match(re) !== null
    ) {
      if (history.length > 10) {
        history.shift();
        history.push({
          calculo,
          result,
        });
      } else {
        history.push({
          calculo,
          result,
        });
      }
    }

    await AsyncStorage.setItem("history", JSON.stringify(history));
    true;
  } catch (error) {
    console.log(error);

    return false;
  }
}
