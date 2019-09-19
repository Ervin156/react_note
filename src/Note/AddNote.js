import React, { useState } from "react";
import PropTypes from "prop-types";

const styles = {
  input: {
    margin: "16px 16px 16px 0",
    coursor: "pointer",
    background: "#eae9e9",
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

function AddNote({ onCreate }) {
  const [value, setValue] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    // trim() - удаляет лишние пробелы
    if (value) {
      onCreate(value);
      setValue('');
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        style={styles.input}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button type="submit" style={styles.button}>
        Add Note
      </button>
    </form>
  );
}

AddNote.propTypes = {
  onCreate: PropTypes.func.isRequired
};
export default AddNote;
