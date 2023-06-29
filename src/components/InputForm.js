import React, { useRef } from 'react';
import classes from './InputForm.module.css';

function InputForm() {
  const inputRef = useRef(null);
  const openingTextRef = useRef(null);
  const releaseDateRef = useRef(null);

  const SubmitHandler = () => {
    const input = inputRef.current.value;
    const openingText = openingTextRef.current.value;
    const releaseDate = releaseDateRef.current.value;

    // Store the values in an array  
    const inputsObj = {
        Title : input, 
        Opening_Text : openingText, 
        Relasing_Date : releaseDate 
    };
    console.log(inputsObj);

    inputRef.current.value = "";
    openingTextRef.current.value = "";
    releaseDateRef.current.value = "";
  };

  return (
    <div className={classes.main}>
      <label>Title</label>
      <br/>
      <input type="text" className={classes.input_text} ref={inputRef} />
      
      <br/>
      <label>Opening Text</label>
      <br/>
      <input type="text" className={classes.input} ref={openingTextRef} />
      
      <br/>
      <label>Release Date</label>
      <br/>
      <input type="date" className={classes.input_text} ref={releaseDateRef} />
      
      <br/>
      <button type="submit" onClick={SubmitHandler} className={classes.btn}>Add</button>
    </div>
  );
}

export default InputForm;
