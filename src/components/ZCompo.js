import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../stores/actionCrators';

export default function ZCompo() {
   const account = useSelector(state => state.account);
   const dispatch = useDispatch();
   const { add, remove } = bindActionCreators(actionCreators, dispatch);
   return (
      <div>
         <h1>ZCompo</h1>
         <h4>{account}</h4>
         <button onClick={() => add(50)}>Add</button>
         <button onClick={() => remove(50)}>Remove</button>
      </div>
   )
}
