import React from 'react';
const colorstatus =(props) =>{
    const { color, weight, size, children } = props;
    const text_style = {
        color: color,
        fontWeight: weight,
        fontSize: size,
    };
    return (
        <span style={text_style}>{children}</span>
    );
}
export default colorstatus;