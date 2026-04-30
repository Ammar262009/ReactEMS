import React from 'react'

const AllTaskCard = (props) => {
    const randomColor = () => {
        const hex = Math.floor(Math.random() * 0xffffff).toString(16)
        return "#" + hex.padStart(6, "0")
    }
    const toUserdashBoard = (e) => {
        console.log(e);
    }

    return (
        <div onClick={()=>{toUserdashBoard(props.id)}} style={{ backgroundColor: randomColor() }} className={` rounded py-2 px-4 flex justify-between mb-2`}>
            <h2>{props.firstName}</h2>
            <h3>{props.email}</h3>
            <h5>{props.taskCount.length}</h5>
        </div>
    )
}

export default AllTaskCard