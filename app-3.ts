import { Reducer, Action } from './ngrx-fake/ngrx';
import { contadorReducer } from "./contador/contador.reducer";
import { incrementarAction } from './contador/contador.action';

/**
 *
 *
 * @class Store
 * @template T
 */
class Store<T> {
  constructor(private reducer: Reducer<T>, private state: T) {}

  /**
   *
   *
   * @returns
   * @memberof Store
   */
  getState() {
    return this.state;
  }

  /**
   * Ejecuta las acciones y obtiene un nuevo state  
   * @param action 
   */
  dispasch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(contadorReducer, 10);
store.dispasch(incrementarAction)
console.log(store.getState());

store.dispasch(incrementarAction)
console.log(store.getState());
