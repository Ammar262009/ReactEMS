import React, { createContext, useState } from 'react'

export const AuthDataContext = createContext()
const AuthContext = (props) => {
    const [verified, setVerified] = useState([])
    return (
        <div>{props.children}</div>
    )
}

export default AuthContext