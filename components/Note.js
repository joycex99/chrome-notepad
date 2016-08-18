import React, { Component, PropTypes } from 'react';
import Input from './Input'
import classnames from 'classnames'
import style from './NotePanel.css'

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    handleDoubleCLick = () => {
        this.setState({ editing: true });
    };

    handleSave = (text, tabId) => {
        if (text.length === 0) {
            this.props.deleteNote()
        } else {
            this.props.editNote(text)
        }
        this.setState({ editing: false })
    };

    render() {
        let element; 
        if (this.state.editing) {
            element = (
                <Input 
                    text={this.props.text}
                    tabId={this.props.tabId}
                    editing={this.state.editing}
                    onSave={this.handleSave}
                />
            );
        } else {
            element = (
                <div>
                    <label onDoubleClick={this.handleDoubleCLick}>
                        {this.props.text}
                    </label>
                    <a href='#'
                       className={style.destroy}
                       onClick={e => {
                            e.preventDefault()
                            this.props.deleteNote()
                        }}
                    ></a>
                </div>
            )
        }

        return (
            <li className={classnames({
                [style.display]: !this.state.editing,
                [style.editing]: this.state.editing
            })}>
                {element}
            </li>
        )
    }
}

Note.propTypes = {
    text: PropTypes.string.isRequired,
    tabId: PropTypes.number.isRequired,
    editNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired
}
