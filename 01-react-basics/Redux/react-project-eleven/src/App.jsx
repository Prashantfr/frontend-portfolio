import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {decrement , increment , reset } from './features/counter/counterSlice';

function App() {

  const [amount , setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementCLick(  ){
    dispatch(decrement());
  }
  
  function handleResetCLick(){
    dispatch(reset());
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount));
  }

  return (
   <div className='container'>
    <button onClick={handleIncrementClick}> + </button>
    <p>Count:{count}</p>
    <button onCLick={handleDecrementCLick}> - </button>
    <br/>
    <br/>  
    <button onCLick={handleResetCLick}> Reset </button>
    <br/>
    <br/>
    <input 
     type='Number'
     value={amount}
     placeholder='Enter Amount'
     onChange={(e) => setAmount(e.target.value)}
    />
    <br/>
    <br/>
    <button onCLick={handleIncAmountClick}>Inc by amount </button>
    
   </div>
  )
}

export default App
