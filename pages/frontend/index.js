import React, { useEffect, useState } from 'react'
const index = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"))?.filter(({ desc }) => desc?.toLowerCase().includes('frontend'))
    setTodos(todo)
  }, [])

  const taskcomplete = (taskTitle) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todos)=>todos.title!= taskTitle)
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos
    });

  }

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
                  <td><button onClick={() => taskcomplete(item.title)} className="text-white mt-4 bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-900 rounded text-lg">Completed</button></td>
                </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default index