import React from 'react'
import ModalWrapper from '../../modals/ModalWrapper'
import { FaTimesCircle } from 'react-icons/fa'

const ModalAddTask = () => {
  return (
    <ModalWrapper>
        <div className='modal'>
            <div className="modal__header">
                <h3>Create Task</h3>
                <button><FaTimesCircle /></button>
            </div>

        </div>
    </ModalWrapper>
  )
}

export default ModalAddTask
