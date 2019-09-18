import React from 'react'
import './Style.css'

export default function About() {
    return (
        <div>
            <h1>About App</h1>
            <p className="p">You can perform following actions:</p>
            <ul>
                <li>- Add a new task</li>
                <li>- Delete an existing task</li>
                <li>- Mark or unmark task</li>
            </ul>
        </div>
    )
}
