import React from 'react'
import './input.scss'

const Input = ({additionalClasses,...opr}) => {
    return (
        <div>
            <input className={`custom-input ${additionalClasses}`} {...opr} />
        </div>
    )
}

export default Input
