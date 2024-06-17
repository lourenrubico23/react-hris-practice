import React from 'react'
import { IoIosTrash } from 'react-icons/io'
import { IoCheckmarkCircleOutline, IoStopCircleOutline } from 'react-icons/io5'

const TaskTable = ({rows, deleteRow}) => {
  return (
    <div>
      <table>
        <thead>
            <tr className='bg-table '>
                <th>#</th>
                <th>Client</th>
                <th>Task Name</th>
                <th>Goal</th>
                <th>Overtime</th>
                <th>Billable</th>
                <th>Time Spent</th>
                <th>Created</th>
                <th>Status</th>
                <th>Actions</th>
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
                    <ul className='action flex gap-2 text-xl'>
                        <li><button><IoStopCircleOutline className='text-red-500'/></button></li>
                        <li><button><IoCheckmarkCircleOutline className='text-green-500' /></button></li>
                        <li><button onClick={() => deleteRow(key)}><IoIosTrash className='text-red-800' /></button></li>
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
