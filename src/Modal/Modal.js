import React from 'react';
import './Modal.css';

const styles = {
    button: {
        background: "#ff9665",
        border: "none",
        borderRadius: "3px",
        // height: "24px",
        padding: '8px',
    }
};

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment >
                <button style={styles.button} onClick={() => this.setState({ isOpen: true })}>Open Modal</button>
                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h1>Modal window</h1>
                            <p>bugaga</p>
                            <button style={styles.button} onClick={() => this.setState({ isOpen: false })}>Close Modal</button>
                        </div>
                    </div>)}
            </React.Fragment>
        )
    }
}