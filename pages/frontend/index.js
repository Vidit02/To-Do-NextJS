import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../store/action';
const index = () => {


  const dispatch = useDispatch();
  // let todos;
  // let todos = useSelector((state)=>state.tasks)
  // todos = todos?.filter(({description}) => description?.toLowerCase().includes('frontend'))
  // useEffect(() => {

  let todos = useSelector((state) => state.tasks) || []
  todos = todos?.filter(({ description }) => description?.toLowerCase().includes('frontend'))
  useEffect(() => {
  }, [todos])
  
  // }, [])

  const taskcomplete = (id) => {
    dispatch(removeTodo(id))
  };
  // useEffect(() => {
  //   const todos = useSelector((state)=>state.tasks)
  //   const tasks = todos?.filter(({description}) => description?.toLowerCase().includes('frontend'))
  // }, [])
  // const taskcomplete = (taskTitle) => {
  //   setTodos((prevTodos) => {
  //     const updatedTodos = prevTodos.filter((todos)=>todos.title!= taskTitle)
  //     localStorage.setItem('todos', JSON.stringify(updatedTodos));
  //     return updatedTodos
  //   });

  // }

  return (
    <div className='mx-auto'>
      <table className="table-fixed mx-auto">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {
            todos?.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.desc}</td>
                  <td><button onClick={() => taskcomplete(item.id)} className="text-white mt-4 bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-900 rounded text-lg">Completed</button></td>
                </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default index