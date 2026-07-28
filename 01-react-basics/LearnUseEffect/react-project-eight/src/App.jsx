import './App.css';
import { useEffect , useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [total , setTotal] = useState(1);  
  //first -> side-effect functioneEEe
  //second -> clean-up function
  //third -> comma separated dependency list

  //variation1 
  //runs on every render //the useEffect hook runs before rendering each time
 // useEffect(() => {
 //   alert("I will run on each render")
 // })

 //variation 2
 //that runs on only first render
 //useEffect(() => {
 // alert("I will run on only the first render");
 //}, [])

 //variation 3 
 //that runs everytime when the something is updated
 //useEffect(() => {
 // alert("I will run every time when the count is updated");
 //}, [count])

 //variation 4 
 //mutiple dependencies (execution will be dependent on diff. functions)
 //useEffect(() => {
 // alert("I will run every time when count/total is updated");
 //}, [count, total])

 //variation 5
 //is baar let's add a cleanup function which will run everytime when the count is updated
 useEffect(() => {
  alert("Count is updated");
  return () => {
    alert("count is unmounted from UI");
  }
 }, [count])


  function handleClick() {
    setCount(count+1);
  }
  
  function handleClickTotal() {
    setTotal(total+1);
  }
 
  return (
    <div>
      <button onClick={handleClick}>
        Update count
      </button>
      <br/>
      Count is:{count}

      <br/>
       <button onClick={handleClickTotal}>
        update total
      </button>
      <br/>
      Total is:{total}
    </div>
  )
}

export default App
