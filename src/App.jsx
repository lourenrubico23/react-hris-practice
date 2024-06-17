import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Overview from "./components/pages/developer/overview/Overview"
import Attendance from "./components/pages/developer/attendance/Attendance"
import Leaves from "./components/pages/developer/leaves/Leaves"
import Overtime from "./components/pages/developer/overtime/Overtime"
import Task from "./components/pages/developer/task/Task"
import Navigation from "./components/pages/partials/Navigation"



function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/leaves" element={<Leaves/>}/>
        <Route path="/overtime" element={<Overtime/>}/>
        <Route path="/task" element={<Task/>}/>
      </Routes>
    </Router>

    
      
    </>
  )
}

export default App
