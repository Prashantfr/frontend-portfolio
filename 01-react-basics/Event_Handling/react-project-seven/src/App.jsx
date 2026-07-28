
import './App.css'

function App() {

  function handleClick(){
    alert("I am clicked");
  }

  function handleMouseOver(){
    alert("Para ke upar mouse leke aye ho")
  }

  function handleInputChange(e){
    console.log("Value till now:",e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    //I am writing my custom behaviour down
    alert("Form submit kardu kya ");
  }
  
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form>

      {/*<p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
        I am a para
      </p>

    <button onClick={handleClick}>
      Click me
    </button>*/}

   </div>
  )
}

export default App
