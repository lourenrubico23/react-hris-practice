import React from 'react'
import Header from '../../Header'
import Navigation from '../../partials/Navigation'
import { MdDashboard } from 'react-icons/md'
import { FaCalendarCheck, FaCalendarAlt, FaBriefcase,  FaRegCalendarAlt, FaNewspaper } from 'react-icons/fa'
import { FaListCheck } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";

import { Link } from 'react-router-dom'

const Attendance = () => {
  return (
    <div>
      <Header/>
      <aside className='px-4 py-6 w-[250px] h-screen border-r border-line bg-primary text-white fixed'>
        <div className="container">
           <ul className='nav'>
           <li className='nav-link'><Link to="/overview" className='flex items-center gap-5'><MdDashboard />Overview</Link></li>
            <li className='nav-link active'><Link to="/attendance" className='flex items-center gap-5'><FaCalendarCheck />Attendance</Link></li>
            <li className='nav-link'><Link to="/leaves" className='flex items-center gap-5'><FaCalendarAlt />Leaves</Link></li>
            <li className='nav-link'><Link to="/overtime" className='flex items-center gap-5'><FaBriefcase />Overtime</Link></li>
            <li className='nav-link'><Link to="/task" className='flex items-center gap-5'><FaListCheck />Task</Link></li>
            <li className='nav-link'><Link to="/myinfo" className='flex items-center gap-5'><IoIosInformationCircle />My Info</Link></li>
            <li className='nav-link'><Link to="/evaluation" className='flex items-center gap-5'><FaNewspaper />Evaluation</Link></li>
        </ul> 
        </div>
    </aside>
      <main className='w-[800px] h-full translate-x-[300px]'>
        <h1 className='text-black'>Attendance</h1>
      </main>
    </div>
  )
}

export default Attendance
