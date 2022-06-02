import { useState, useEffect } from "react";

export default function useResult(a: string, b: string, indicator: string) {
  const [first, setFirst] = useState("0");

  useEffect(() => {
    switch (indicator) {
      case "+":
        // clear();
        setFirst(
          ((parseFloat(b) * 100 + parseFloat(a) * 100) / 100).toString()
        );

        break;
      case "-":
        // clear();

        setFirst(
          ((parseFloat(b) * 100 - parseFloat(a) * 100) / 100).toString()
        );

        break;
      case "*":
        // clear();
        setFirst((parseFloat(b) * parseFloat(a)).toString());

        break;
      case "/":
        // clear();
        setFirst((parseFloat(b) / parseFloat(a)).toString());

        break;
      case "^":
        // clear();
        setFirst(Math.pow(parseFloat(b), parseFloat(a)).toString());
        break;

      case "％":
        // clear();
        setFirst(((parseFloat(a) * parseFloat(b)) / 100).toString());

        break;
      case "√":
        setFirst(Math.sqrt(parseFloat(b)).toString());
        break;
      case "!":
        let num = 1;
        for (let i = 1; i <= Number(b); i++) {
          num *= i;
        }
        setFirst(num.toString());
        break;
      default:
        // clear();
        setFirst("0");
        break;
    }
  });

  return {
    first,
  };
}
