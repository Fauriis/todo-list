import React from 'react'
import {CiEdit} from 'react-icons/ci'
import {MdDelete} from 'react-icons/md'

export const Todo = ({task}) => {
  return (
    <div className='flex flex-row gap-3 mt-6 items-center justify-center'>
        <p>{task.task}</p>
        
     
           <CiEdit size={20}></CiEdit>
           <MdDelete size={20}></MdDelete>

    </div>
  )
}
