import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(`Email is ${email} and Password is ${password}`)
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form onSubmit={(e)=>{
                        submitHandler(e)
                    }} className='flex flex-col items-center justify-center'>
                    
                    <input
                    value={email}
                     onChange={(e)=>{
                        setEmail(e.target.value)
                     }} 
                     required 
                     className='border-2 border-emerald-600 py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-300 rounded-full' 
                     type="email" 
                     placeholder='Enter Your Email' />

                    <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                     }} 
                    required 
                    className='border-2 border-emerald-600 py-3 px-5 mt-3 text-xl text-white outline-none bg-transparent placeholder:text-gray-300 rounded-full' 
                    type="password" 
                    placeholder='Enter Your Password' />

                    <button 
                    className='border-none bg-emerald-600 py-3 px-5 mt-5 text-xl text-white outline-none placeholder:text-white rounded-full'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login