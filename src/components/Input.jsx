import React from 'react';
import './Input.css';

const Input = () => {
    return (
        <div className='input'>
            <div className='title'>
                <div>
                    Title
                </div>
                <div>
                <input className='titleInputBox'/>
                </div>
                <div className='addButton'>
                    <button className='addEditButton'>
                        Add
                    </button>
                </div>
                <div className='editButton'>
                    <button className='addEditButton'>
                        Edit
                    </button>
                </div>
            </div>
            <div className='content'>
                <div>
                    Content
                </div>
                <div>
                <textarea className='contentInputBox'/>
                </div>
            </div>
        </div>
    );
};


export default Input;
