import "./textInput.css";
import { useState } from "react";

const TextInput = (props) => {
  const placeholder = `${props.placeholder} ...`
  
  const onListening = (e) => {
    props.setValor(e.target.value)
  }
  return (
    <div className="input">
      <label>{props.label.toUpperCase()}</label>
      <input type={props.type} 
      placeholder={placeholder} 
      required={props.required}
      value={props.valor}
      onChange={onListening} />
    </div>
  );
};
export default TextInput;
