import React from 'react'

// This is a functional component that renders out the user list we sent in as props and the color we send in as props.
export const UserComponent = ({myList, userColor}) => (
    
    <ul style={{color: userColor}}>
    {myList}
</ul>
)


    


