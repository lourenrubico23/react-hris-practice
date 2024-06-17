import React, { useState } from 'react'
import ModalWrapper from '../../modals/ModalWrapper'
import { FaTimesCircle } from 'react-icons/fa'
import { Form, Formik } from 'formik'
import { InputSelect, InputText, InputTextArea } from '../../../helpers/Forminputs'
import Header from '../../Header'
import * as Yup from 'yup'


const ModalAddTask = ({closeModal, onSubmit}) => {
  const [item, setItem] = React.useState({
    id: "",
    client: "",
    taskName: "",
    goal: "",
    billable: "",
    timeSpent: "",
  });

  const [formError, setFormError] = React.useState({});

  const validateForm = (values) => { // to validate is the form has content
    let errors = {};

    if (!values.taskName) {
      errors.taskName = 'Required';
    }else{
      return errors;
    }
  }

  const handleChange = (e) => {
    setItem ({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    setFormError(validateForm(item)); 

    onSubmit(item)
    closeModal();
  }

  


  return (
    <>
    <ModalWrapper>
        <div className='modal w-[340px]  mx-auto '>
            <div className="modal__body bg-white rounded-[1rem] h-[calc(100vh-190px)]">
                <div className="px-4 py-2 bg-darkred flex justify-between items-center rounded-t-[1rem]">
                  <h3 className='text-white font-semibold'>Create Task</h3>
                  <button className='text-white' onClick={closeModal}><FaTimesCircle /></button>
                </div>
              <Formik>
                <Form className='flex flex-col p-4 pt-10'>
                  <div className="input-wrap">
                    {formError.client && (
                          <p className="text-red-500 text-xs mt-1">{formError.client}</p>
                        )}
                    <InputSelect 
                    label="Client"
                    name="client"
                    value={item.client}
                    onChange={handleChange}
                      >
                        
                        <option value = "" disabled className='font-semibold'>Client</option>
                        <option value = "Frontline Business Solutions" >Frontline Business Solutions</option>
                        <option value = "Client 2">Client 2</option>
                        <option value = "Client 3">Client 3</option>
                    </InputSelect>
                  </div>

                  <div className="input-wrap">
                  {formError.taskName && (
                          <p className="text-red-500 text-xs mt-1">{formError.taskName}</p>
                        )}
                    <InputText
                      label="Task Name"
                      type="text"
                      name="taskName"
                      value={item.taskName}
                      onChange={handleChange}
                      />
                  </div>

                  <div className="input-wrap">
                    <InputTextArea
                      label="Description"
                      type="text"
                      name="goal"
                      value={item.goal}
                      onChange={handleChange}
                      className='h-[100px]'
                      />
                  </div>

                  <div className="flex items-center gap-3">
                    <input type="checkbox" className='check'/>
                    <span className='text-darkred'>Mark check if <strong>indefinite</strong> time limit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className='check' name='billable' value={item.billable}/>
                    <span className='text-darkred'>Mark check if <strong>billable</strong></span>
                  </div>

                  <h4 className='text-darkred font-semibold py-4'>Time Goal</h4>
                  <div className='flex gap-2'>
                      <div className="input-wrap">
                      <InputText
                      label='Hours'
                      type='text'
                      name='timeSpent'
                      value={item.timeSpent}
                      onChange={handleChange}
                      />
                    </div>
                    <div className="input-wrap">
                      <InputText
                      label='Minutes'
                      type='text'
                      name='minutes'
                      />
                    </div>
                  </div>

                  <div className='flex gap-1 mt-5'>
                    <button className='btn py-[6px] px-[58px]' onClick={handleSave}>Save</button>
                    <button className='btn-transparent py-[6px] px-[51px]' onClick={closeModal}>Cancel</button>
                  </div>

                  
                  
                </Form>
              </Formik>
              
            </div>

        </div>
        </ModalWrapper>
    </>
  )
}

export default ModalAddTask
