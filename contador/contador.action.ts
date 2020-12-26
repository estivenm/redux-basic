import { Action } from '../ngrx-fake/ngrx';

export const incrementarAction: Action = {
  type: "INCREMENTAR"
};

export const decrementarAction: Action = {
  type: "DECREMENTAR",
  payload: 2
};

export const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 2
};

export const dividirAction: Action = {
  type: "DIVIDIR",
  payload: 2
};

export const resetAction: Action = {
  type: "RESET"
};