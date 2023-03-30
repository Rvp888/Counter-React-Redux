
import './App.css';

function App() {
  return (
    <div className='container'>

      <h1>Increment/Decrement Counter</h1>
      <h4>using React and Redux</h4>

      <div className='quantity'>
        <a className='quantity_minus' title='Decrement' ><span>-</span></a>
        <a className='quantity_plus' title='Increment' ><span>+</span></a>
      </div>
      
    </div>
  );
}

export default App;
