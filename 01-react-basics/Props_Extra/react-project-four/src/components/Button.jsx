import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.onCLick}>
        {props.text}
    </button>
    </div>
  );
};

export default Button;
 