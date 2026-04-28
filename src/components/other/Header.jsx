import React from 'react'

const header = () => {
    return (
        <div className='flex justify-between items-end text-white'>
            <h1 className='font-medium text-2xl'>Hello <br/> <span className='text-3xl font-semibold'>Ammar 👋</span> </h1>
            <button className='bg-red-500 text-white py-2 px-4 rounded text-lg font-medium'>Log out</button>
        </div>
    )
}

export default header