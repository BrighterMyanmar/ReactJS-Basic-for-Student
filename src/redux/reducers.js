import { combineReducers } from 'redux';

// const getDbProduct = () => {
//    let dbData = localStorage.getItem('pros');
//    return dbData ? JSON.parse(dbData) : [];
// }

// const saveDbProduct = (products) => {
//    localStorage.setItem('pros', JSON.stringify(products));
// }

const productReducer = (state = [], { type, payload }) => {
   switch (type) {
      case "add":
         return state = payload;
      case "remove":
         return state.filter(p => p.id != payload);;
      default:
         return state;;
   }
}

const reducers = combineReducers({
   products: productReducer
});

export default reducers;

