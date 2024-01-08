import React, { useEffect, useState } from 'react'

const index = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let todo = JSON.parse(localStorage.getItem("todos"))?.filter(({ desc }) => desc.toLowerCase().includes('database'))
    setTodos(todo)
  }, [])
  return (
    <div className='mx-auto'>
      <table className="table-fixed mx-auto">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Task Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((item,index) => {
              return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.desc}</td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default index