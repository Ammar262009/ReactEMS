import React from 'react'

const header = ({ data }) => {
    let username;
    if (data) {
        username = data
    }
    else {
        username = 'Admin'
    }

    const logOut = () => {
        localStorage.setItem('loggedInUser','')
        window.location.reload()
    }

    return (
        <div className='flex justify-between items-end text-white'>
            <h1 className='font-medium text-2xl'>Hello <br /> <span className='text-3xl font-semibold'>{username}👋</span> </h1>
            <button onClick={logOut } className='bg-red-500 cursor-pointer text-white py-2 px-4 rounded text-lg font-medium'>Log out</button>
        </div>
    )
}

export default header