import { Action } from "../ngrx-fake/ngrx";

/**
 * Realizar una operadcion de acuerdo con la accion ingresada
 * @param state  estado actual
 * @param action nombre de la accion que se desea realizar
 */
export function contadorReducer(state = 1, action: Action) {
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