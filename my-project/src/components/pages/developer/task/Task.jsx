import React from 'react'
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

const Task = () => {
    const [itemEdit, setItemEdit ] = React.useState(null);

  return (
    <div>
      <Header/>
      <aside className='px-4 py-6 w-[250px] h-screen border-r border-line bg-primary text-white fixed'>
        <div className="container">
           <ul className='nav'>
           <li className='nav-link'><Link to="/overview" className='flex items-center gap-5'><MdDashboard />Overview</Link></li>
            <li className='nav-link'><Link to="/attendance" className='flex items-center gap-5'><FaCalendarCheck />Attendance</Link></li>
            <li className='nav-link'><Link to="/leaves" className='flex items-center gap-5'><FaCalendarAlt />Leaves</Link></li>
            <li className='nav-link'><Link to="/overtime" className='flex items-center gap-5'><FaBriefcase />Overtime</Link></li>
            <li className='nav-link active'><Link to="/task" className='flex items-center gap-5'><FaListCheck />Task</Link></li>
            <li className='nav-link'><Link to="/myinfo" className='flex items-center gap-5'><IoIosInformationCircle />My Info</Link></li>
            <li className='nav-link'><Link to="/evaluation" className='flex items-center gap-5'><FaNewspaper />Evaluation</Link></li>
        </ul> 
        </div>
    </aside>
      <main className='w-[1250px] h-full translate-x-[300px]'>
        <div className="top-nav mt-[50px] flex justify-between border-b border-black border-opacity-20">
            <div className='flex gap-3 items-center mb-4'>
                <Link to="#" className='text-primary'>Task</Link>
                <GoChevronRight />
                <h4>List</h4>
            </div>
            <div className='mb-4'>
                <button className='btn flex items-center gap-2'><IoAddCircle />Add</button>
            </div>
            
        </div>
       
      </main>
     {/*  <ModalAddTask itemEdit={itemEdit}/> */}
    </div>
  )
}

export default Task
