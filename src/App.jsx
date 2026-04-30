import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const authData = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {

    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  }, [authData])


  const handleLogin = (email, pass) => {
    const employee = authData.employeeData.find((e) => email == e.email && pass == e.password)
    if (email == 'admin@me' && pass == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (employee) {

        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      
    }
    else {
      alert("Invalid Crediancials")
    }
  }

  return (
    <div className='bg-black text-white overflow-auto h-screen w-full'>
      {!user && <Login handleLogin={handleLogin} />}
      {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} />: null)}
    </div>
  )
}

export default App