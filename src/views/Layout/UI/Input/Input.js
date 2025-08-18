import React from 'react';

import classes from './Input.css';

const input = ( props ) => {
    let inputElement = null;

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = 
                <input
                className="form-control"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            ;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className="form-control"
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className="form-group">
            <label className="form-label">{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;