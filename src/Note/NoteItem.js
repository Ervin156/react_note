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

function NoteItem({ note, index, onChange }) {
  const { removeNote } = useContext(Context);
  const classesNote = [];
  const classesLi = [];

  if (note.completed) {
    classesNote.push("completeNote");
    classesLi.push("completeLi");
  }

  return (
    <li style={styles.li} className={classesLi.join(" ")}>
      <span className={classesNote.join(" ")}>
        <input
          type="checkbox"
          // checked={note.completed}
          style={styles.input}
          onChange={() => {
            console.log(note);

            onChange(note.id);
          }}
        />
        <strong>{index + 1 + "\t"}</strong>
        {note.title}
      </span>
      <button
        className="rm"
        onClick={() => {
          removeNote(note.id);
        }}
      >
        &times;
      </button>
    </li>
  );
}

NoteItem.protoType = {
  note: ProtoType.object.isRequired,
  index: ProtoType.number,
  onChange: ProtoType.func.isRequired
};

export default NoteItem;
