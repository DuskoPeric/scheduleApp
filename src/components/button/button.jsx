import React from 'react';
import './button.scss'

const Button = ({children,additionalClasses,...opr}) => {
    return (
        <button className={`custom-btn ${additionalClasses}`} {...opr}>{children}</button>
    )
}

export default Button
