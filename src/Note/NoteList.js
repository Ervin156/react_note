import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './NoteItem';


const styles={
    ul:{
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
};

function NoteList(props){
    return(
        <ul style={styles.ul}>
            {props.notes.map((note, index)=>{
                return <TodoItem note={note} key={note.id} index={index} onChange={props.onToggle}/>
            })}
        </ul>
    )
}

NoteList.propTypes={
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
}
export default NoteList;