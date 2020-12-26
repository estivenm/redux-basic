import { Action } from "./ngrx-fake/ngrx";
import { resetAction } from './contador/contador.action';
import {
  incrementarAction,
  decrementarAction,
  multiplicarAction,
  dividirAction
} from "./contador/contador.action";

/**
 * Realiar una operadcion de acuerdo con la accion ingresada
 * @param state  estado actual
 * @param action nombre de la accion que se desea realizar
 */
function reducer(state = 1, action: Action) {
  switch (action.type) {

    case "INCREMENTAR":
      return (state += 1);

    case "DECREMENTAR":
      return (state -= 1);

    case "MULTIPLICAR":
      return state * action.payload;

    case "DIVIDIR":
      return state != 0
        ? state / action.payload
        : "no se puede realizar la operacion";

    case "RESET":
      return (state = 0);

    default:
      return state;
  }
}
console.log(reducer(10, incrementarAction)); // 11
console.log(reducer(1, decrementarAction)); // 0
console.log(reducer(2, multiplicarAction)); // 4
console.log(reducer(2, dividirAction)); // 1
console.log(reducer(0, resetAction)); // 0
