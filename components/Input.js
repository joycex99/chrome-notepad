import React, { Component, PropTypes } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text || ''
        };
    }

    // if focus moves from input & in editNote mode, save
    handleBlur = e => {
        if (this.props.editing) {
            this.props.onSave(e.target.value, this.props.currentTab);
        }
    };

    // if key is 'Enter', save note
    // if new note (i.e. not edit mode), clear input value
    handleSubmit = e => {
        if (e.which === 13) {
            const text = e.target.value.trim()
            this.props.onSave(text, this.props.currentTab);
            if (!this.props.editing) {
                this.setState({ text: '' });
            }
        }   
    };

    render() {
        return (
            <input type='text'
                   autoFocus='true'
                   value={this.state.text}
                   onBlur={this.handleBlur}
                   onChange={e => {
                       this.setState({ text: e.target.value })
                   }}
                   onKeyDown={this.handleSubmit}
            />
        )
    }
}

Input.propTypes = {
    text: PropTypes.string,
    currentTab: PropTypes.number.isRequired,
    editing: PropTypes.bool.isRequired,
    onSave: PropTypes.func.isRequired
}
