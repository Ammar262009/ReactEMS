import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        const { employeeData, adminData } = getLocalStorage()
        setUserData({ employeeData, adminData })
    }, [])

    return (
        <div>
            <AuthContext value={userData}>
                {children}
            </AuthContext>
        </div>
    )
}

export default AuthProvider