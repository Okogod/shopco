// React Hooks
import { useState } from 'react';


// Css
import './actionbutton.css';





type ActionButtonProps = {
    func: () => void,
    value: string
}


const ActionButton = ({func, value}: ActionButtonProps) => {


    return (
        <button onClick={func}>
            {value}
        </button>
    )
}

export default ActionButton;