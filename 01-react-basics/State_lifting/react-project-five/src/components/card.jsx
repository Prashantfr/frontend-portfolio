import React from 'react'

const card = (props) => {
  return (
    <div>
      <input type='text' 
      onChange={(e)=>props.setName(e.target.value)} />  //sending the new value back to the parent
      <p>Name state variable ki value inside card : {props.name}</p>
       {/*props.title} instead of card if printing more than one card's input*/}
    </div>
  )
}

export default card
