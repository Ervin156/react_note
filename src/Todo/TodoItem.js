import React, { useContext } from "react";
import ProtoType from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginBottom: "10px"
  },
  input: {
    marginRight: "10px",
    cursor: "pointer"
  }
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          //   checked={todo.completed}
          style={styles.input}
          onChange={() => {
            console.log(todo);

            onChange(todo.id);
          }}
        />
        <strong>{index + 1 + "\t"}</strong>
        {todo.title}
      </span>
      <button className="rm" onClick={()=>{removeTodo(todo.id)}}>
        &times;
      </button>
    </li>
  );
}

TodoItem.protoType = {
  todo: ProtoType.object.isRequired,
  index: ProtoType.number,
  onChange: ProtoType.func.isRequired
};

export default TodoItem;
