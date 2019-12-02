import React from 'react';

//made this its own component so we can reuse it elsewhere...maybe we want to display phoneList on the actual account profile or bio
//this is FUNCTION Component because it only takes info in and displays it
export const PhoneList = props => <>
    <ul className = "list-group">
        <li className = "list-group-item bg-info">Phone Numbers</li>
        {
            props.phoneNumbers.map((x, i) => 
        <li className = "list-group-item" key={i}>
            {x.number}
            <span className = "badge badge-info float-right">{x.type}</span>
        </li>)
    }
    </ul>
</>;