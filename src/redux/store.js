import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialData = {
   products: [
      { name: "MG Mg" }, 
      { name: "Aug Aug" },
      {name:"Tun Tun"}
   ]
}
export const store = createStore(reducers, initialData, applyMiddleware(thunk));