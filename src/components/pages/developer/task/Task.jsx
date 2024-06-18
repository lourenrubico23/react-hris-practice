import React, { useState } from 'react'
import Header from '../../Header'
import Navigation from '../../partials/Navigation'
import { MdDashboard } from 'react-icons/md'
import { FaCalendarCheck, FaCalendarAlt, FaBriefcase,  FaRegCalendarAlt, FaNewspaper } from 'react-icons/fa'
import { FaListCheck } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { GoChevronRight } from "react-icons/go";
import { IoAddCircle } from "react-icons/io5";

import { Link } from 'react-router-dom'
import ModalAddTask from './ModalAddTask'
import TaskTable from './TaskTable'

const Task = () => {
    const [modalOpen, setModalOpen ] = React.useState(false);

    const [rows, setRows] = useState ( [ 
      { id: "1", client: "fbs", taskName: "n/a", goal: "2hr", overtime: "1hr", billable:"true", timeSpent: "3hrs", created: "2/4/2024", status: "Active"},
      { id: "2", client: "fbs", taskName: "n/a", goal: "2hr", overtime: "1hr", billable:"true", timeSpent: "3hrs", created: "2/4/2024", status: "Active"},
      { id: "3", client: "sdsdsdasasasasasasd", taskName: "n/a", goal: "2hr", overtime: "1hr", billable:"true", timeSpent: "3hrs", created: "2/4/2024", status: "Inactive"},
    ]);

    const handleDelete = (targetIndex) => {
      setRows(rows.filter((_, key) => key !== targetIndex))
    }

    const handleSave = (newRow) => {
      setRows([...rows, newRow])
    }
    
  return (
    <>
    <div>
      <Header/>
      <aside className='aside-bar '>
        
           <ul className='nav'>
           <li className='nav-link'><Link to="/overview" className='flex items-center gap-5'><MdDashboard />Overview</Link></li>
            <li className='nav-link'><Link to="/attendance" className='flex items-center gap-5'><FaCalendarCheck />Attendance</Link></li>
            <li className='nav-link'><Link to="/leaves" className='flex items-center gap-5'><FaCalendarAlt />Leaves</Link></li>
            <li className='nav-link'><Link to="/overtime" className='flex items-center gap-5'><FaBriefcase />Overtime</Link></li>
            <li className='nav-link active'><Link to="/task" className='flex items-center gap-5'><FaListCheck />Task</Link></li>
            <li className='nav-link'><Link to="/myinfo" className='flex items-center gap-5'><IoIosInformationCircle />My Info</Link></li>
            <li className='nav-link'><Link to="/evaluation" className='flex items-center gap-5'><FaNewspaper />Evaluation</Link></li>
        </ul> 
        
    </aside>
      <main className='main'>
        <div className="top-nav flex justify-between border-b border-black border-opacity-20 mb-3">
            <div className='flex gap-3 items-center mb-4'>
                <Link to="#" className='text-primary'>Task</Link>
                <GoChevronRight />
                <h4>List</h4>
            </div>
            <div className='mb-4'>
                <button className='btn flex items-center gap-2' onClick={() => setModalOpen(true)}><IoAddCircle />Add</button>
            </div>
            
        </div>
       <TaskTable rows={rows} deleteRow={handleDelete}/>
      </main>
      
    </div>
    {modalOpen && <ModalAddTask closeModal={() => { setModalOpen(false)}} onSubmit={handleSave} rows={rows}/>}
    </>
  )
}

export default Task
