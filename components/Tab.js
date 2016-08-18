import React, { Component, PropTypes } from 'react';
import classnames from 'classnames'
import style from './Tabs.css'

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            newName: this.props.name
        };
    }

    // if double click current tab, edit name
    handleDoubleCLick = () => {
        if (this.props.active) {
            this.setState({ editing: true });
        }
    };

    handleSave = e => {
        const newName = e.target.value.trim()
        if (newName.length !== 0) {
            this.props.onEditTab(newName)
        }
        this.setState({ editing: false })
    };

    render() {
        let element;
        if (this.state.editing) {
            element = (
                <input type='text'
                       autoFocus='true'
                       value={this.state.newName}
                       onBlur={this.handleSave}
                       onChange={e => {
                           this.setState({ newName: e.target.value })
                       }}
                       onKeyDown={e => {
                            console.log(e.which)
                           if (e.which === 13) {
                               this.handleSave(e)
                           } 
                       }}
                />
            );
        } else {
            element = (
                <div 
                    onDoubleClick={this.handleDoubleCLick}
                    onClick={this.props.onTabClick}
                >
                    {this.props.name}
                </div>
            )
        }

        return (
            <li className={classnames({
                [style.current]: this.props.active
            })}>
                {element}
            </li>
        )
    }
}

Tab.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    active: PropTypes.bool.isRequired,
    onTabClick: PropTypes.func.isRequired,
    onEditTab: PropTypes.func.isRequired
}
