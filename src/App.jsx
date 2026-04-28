import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/LocalStorage'

const App = () => {

  // useEffect(() => {
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null)

  const handleLogin = (email, pass) => {
    if (email == 'admin@me' && pass == '123'){
      setUser('admin')
    }
    else if(email == 'user@me' && pass == '123'){
      setUser('employee')
    }
    else{
      alert("Invalid Crediancials")
    }
  }

  return (
    <div className='bg-black text-white overflow-auto h-screen w-full'>
      {!user && <Login handleLogin={handleLogin} /> }
      {user === 'admin' && <AdminDashboard/>}
      {user === 'employee' && <EmployeeDashboard/>}
    </div>
  )
}

export default App