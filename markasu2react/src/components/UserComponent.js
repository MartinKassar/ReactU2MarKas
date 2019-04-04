import React from 'react'
import { Route } from 'react-router-dom'
import { UserScreen } from '../screens/UserScreen';
import { NavLink } from 'react-router-dom'

// This is a functional component that renders out the user list we sent in as props and the color we send in as props.
export const UserComponent = ({myList, userColor}) => (
    <div>
    <ul style={{color: userColor}}>

        {myList}
    
</ul>

</div>
)


    


