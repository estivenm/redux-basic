/**
 * Acciones
 *
 * @interface Action
 */
interface Action {
  type: string;
  payload?: any;
}

/**
 *
 * @param state estado  actual
 * @param action  accion que se desea ejecutar
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
    default:
      break;
  }
  if (action.type === "INCREMENTAR") state++;
  return state;
}

const incrementarAction: Action = {
  type: "INCREMENTAR"
};

const decrementarAction: Action = {
  type: "DECREMENTAR",
  payload: 2
};

const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 2
};

const dividirAction: Action = {
  type: "DIVIDIR",
  payload: 2
};

console.log(reducer(2, incrementarAction)); // 3
console.log(reducer(1, decrementarAction)); // 0
console.log(reducer(2, multiplicarAction)); // 4
console.log(reducer(2, dividirAction)); // 1
