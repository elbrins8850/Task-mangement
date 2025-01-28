import React from 'react'
import Button from './Button'

const Headre = ({title, addTask,showAdd}) => {
   
    return (
        <header className='header'>
            
                <h1>{title}</h1>
                <Button text={showAdd ? "Close" : "Add"} color={showAdd? 'red': 'green'} onclick={addTask}/>
        </header>
    )
}

export default Headre
