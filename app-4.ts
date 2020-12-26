import { contadorReducer } from "./contador/contador.reducer";
import { Store, createStore } from "redux";
import { incrementarAction } from "./contador/contador.action";

const store: Store = createStore(contadorReducer);

// Subscribirse  alos cambios
store.subscribe(() => {
  console.log("Subs:", store.getState());
});

store.dispatch(incrementarAction);
store.dispatch(incrementarAction);
store.dispatch(incrementarAction);
