import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    return (
        <div id='taskList' className='h-[55%] w-full mt-10 flex flex-nowrap items-center justify-center gap-5 py-5 overflow-x-auto rounded-xl'>
            {data.tasks.map((e,idx)=>{
                if(e.NewTask == true){
                    return(<NewTask key={idx} date={e.date} title={e.title} description={e.description} category={e.category} />)
                }
                if(e.active == true){
                    return(<AcceptTask key={idx} date={e.date} title={e.title} description={e.description} category={e.category} />)
                }
                if(e.failed == true){
                    return(<FailedTask key={idx} date={e.date} title={e.title} description={e.description} category={e.category} />)
                }
                if(e.completed == true){
                    return(<CompleteTask key={idx} date={e.date} title={e.title} description={e.description} category={e.category} />)
                }
            })}
            {/* <AcceptTask />
            <NewTask />
            <CompleteTask />
            <FailedTask/> */}
        </div>
    )
}

export default TaskList