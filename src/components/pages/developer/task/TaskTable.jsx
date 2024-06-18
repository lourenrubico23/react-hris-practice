import React from 'react'
import { IoIosTrash } from 'react-icons/io'
import { IoCheckmarkCircleOutline, IoStopCircleOutline } from 'react-icons/io5'

const TaskTable = ({rows, deleteRow}) => {
  return (
    <div className='overflow-auto'>
      <table>
        <thead>
            <tr className='bg-table '>
                <th>#</th>
                <th className='min-w-[12rem]'>Client</th>
                <th className='min-w-[10rem]'>Task Name</th>
                <th className='min-w-[5rem]'>Goal</th>
                <th className='min-w-[5rem]'>Overtime</th>
                <th className='min-w-[5rem]'>Billable</th>
                <th className='min-w-[7rem]'>Time Spent</th>
                <th className='min-w-[8rem]'>Created</th>
                <th className='min-w-[5rem] text-center'>Status</th>
                <th className='!w-[10rem] text-center'>Actions</th>
            </tr>
        </thead>
        <tbody>
          {
            rows.map((row, key) => {
              return <tr key={key}>
                <td>{row.id}</td>
                <td>{row.client}</td>
                <td>{row.taskName}</td>
                <td>{row.goal}</td>
                <td>{row.overtime}</td>
                <td>{row.billable}</td>
                <td>{row.timeSpent}</td>
                <td>{row.created}</td>
                <td>{row.status}</td>
                <td>
                    <ul className='action flex gap-2 text-xl items-center justify-center'>
                        <li><button className={row.status === "Active" ? "block" : "hidden"}><IoStopCircleOutline className='text-red-500'/></button></li>
                        <li><button onClick={() => deleteRow(key)} className={row.status === "Inactive" ? "block" : "hidden"}><IoCheckmarkCircleOutline className='text-green-500' /></button></li>
                        <li><button onClick={() => deleteRow(key)} className={row.status === "Inactive" ? "block" : "hidden"}><IoIosTrash className='text-red-800' /></button></li>
                    </ul>
                </td>
              </tr>
              
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default TaskTable
