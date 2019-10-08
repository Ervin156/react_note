import React, { useState } from "react";
import PropTypes from "prop-types";

const styles = {
  input: {
    margin: "16px 16px 16px 0",
    coursor: "pointer",
    border: "none",
    height: "24px",
    width: "300px"
  },
  button: {
    background: "#ff9665",
    border: "none",
    borderRadius: "3px",
    height: "24px"
  }
};

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);
  return{
    bind: {
      value,
      onChange: event => setValue(event.target.value) 
    },
    clear: () => setValue(''),
    value: () => value

  }
}

function AddNote({ onCreate }) {
  const input = useInputValue('');
  
  function submitHandler(event) {
    event.preventDefault();
    // trim() - удаляет лишние пробелы
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input style={styles.input} {...input.bind}/>
      <button type="submit" style={styles.button}> Add Note</button>
    </form>
  );
}

AddNote.propTypes = {
  onCreate: PropTypes.func.isRequired
};
export default AddNote;
