'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '@/pages/store/action'

const ToDo = () => {

    // const [todo, settodo] = useState({ title: "", desc: "" })
    const dispatch = useDispatch();
    const useToDoState = useSelector(({ tasks }) => tasks) || []
    // console.log({useToDoState})
    let title;
    let description;

    const onHandleInputValue = (e) => {
        // dispatch(addTodo({ title: e.target.value }))
        // console.log(e.target.value)
        title = e.target.value
    }

    const onHandleInputCheck = (e) => {
        // dispatch(addTodo({ description: e.target.value }))
        description = e.target.value
    }



    // const onChange = (e) => {
    //     settodo({ ...todo, [e.target.name]: e.target.value })
    //     console.log(todo)
    // }

    const onAddtodo = () => {
        dispatch(addTodo(title, description))
        document.getElementById("title").value = "";
        const radioElements = document.getElementsByName("desc");
        radioElements.forEach((radio) => {
            radio.checked = false;
        });
        // console.log(todo);
        // if(todo.title !== '' && todo.desc !== ''){
        //     dispatch(addTodo(title,desc))
        //     settodo(todo.title = '' , todo.desc = '')
        // }
    }


    // const addTodo = () => {
    //     let todos = localStorage.getItem("todos")
    //     if (todos) {
    //         let todosJson = JSON.parse(todos)
    //         if (todosJson.filter(value => { return value.title == todo.title }).length > 0) {
    //             alert("Todo with this title already exists")
    //         }
    //         else {
    //             todosJson.push(todo)
    //             localStorage.setItem("todos", JSON.stringify(todosJson))
    //             alert("Todo has been added")
    //             settodo({ title: "", desc: "" })
    //         }
    //     }
    //     else {
    //         localStorage.setItem("todos", JSON.stringify([todo]))
    //     }
    // }

    // const onChange = (e) => {
    //     settodo({ ...todo, [e.target.name]: e.target.value })
    //     console.log(todo)
    // }

    let categories = ["Frontend", "Backend", "Database", "Deployment"]
    // console.log(todo);
    return (
        <div className='my-2 font-bold text-3xl'>
            <h1>Add a to-do</h1>
            <section className="text-gray-600 body-font">
                <div className="relative flex-grow w-full">
                    <label for="full-name" className="leading-7 text-sm text-gray-600">Task Name</label><br></br>
                    <input type="text" onChange={onHandleInputValue} id="title" name="title" className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-full">
                    <label for="email" className="leading-7 text-sm text-gray-600">Task Category</label> <br></br>
                    {
                        categories.map((item, index) => {
                            // console.log(item)
                            return (<div className="flex items-center" key={index}>
                                <input onChange={onHandleInputCheck} id="desc" type="radio" value={item} name="desc" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item}</label>
                            </div>)
                        }
                        )
                    }
                    {/* <div className="flex items-center">
                        <input id="default-radio-1" type="radio" value="frontend" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Frontend</label>
                    </div> */}
                    {/* <div className="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="backend" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Backend</label>
                    </div> */}
                    {/* <div className="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="database" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Database</label>
                    </div> */}
                    {/* <div className="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="deployment" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Deployment</label>
                    </> */}
                </div>
                <button onClick={onAddtodo} className="text-white mt-4 bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 rounded text-lg">Add</button>
            </section >
        </div >
    )
}

export default ToDo