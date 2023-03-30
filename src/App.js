
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from './actions/index';




function App() {

  const myState = useSelector((store) => store.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className='container'>

      <h1>Increment/Decrement Counter</h1>
      <h4>using React and Redux</h4>

      <div className='quantity'>
        <a className='quantity_minus' title='Decrement' ><span onClick={() => dispatch(decNumber())}> - </span></a>
        <input name='quantity' type='text' className='quantity_input' value={myState} />
        <a className='quantity_plus' title='Increment' ><span onClick={() => dispatch(incNumber())}> + </span></a>
      </div>
      
    </div>
  );
}

export default App;
