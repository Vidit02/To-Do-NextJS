'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, Feagment, Fragment } from 'react'
import ToDo from '@/components/ToDo'
import { Provider } from 'react-redux'
import store from './store/store'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  // const [todo, setTodo] = useState({ name: "", category: "" })
  return (
    // <div className='my-2 font-bold text-3xl'>
    //   <h1>Add a to-do</h1>
    //   <section className="text-gray-600 body-font">
    //     <div className="relative flex-grow w-full">
    //       <label for="full-name" className="leading-7 text-sm text-gray-600">Task Name</label><br></br>
    //       <input type="text" id="full-name" name="full-name" className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    //     </div>
    //     <div className="relative flex-grow w-full">
    //       <label for="email" className="leading-7 text-sm text-gray-600">Task Category</label> <br></br>
    //       <div className="flex items-center">
    //         <input id="default-radio-1" type="radio" value="frontend" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    //         <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Frontend</label>
    //       </div>
    //       <div className="flex items-center">
    //         <input checked id="default-radio-2" type="radio" value="backend" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    //         <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Backend</label>
    //       </div>
    //       <div className="flex items-center">
    //         <input checked id="default-radio-2" type="radio" value="database" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    //         <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Database</label>
    //       </div>
    //       <div className="flex items-center">
    //         <input checked id="default-radio-2" type="radio" value="deployment" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    //         <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Deployment</label>
    //       </div>
    //     </div>
    //     <button className="text-white mt-4 bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 rounded text-lg">Button</button>
    //   </section>
    // </div>
    <Provider store={store}>
      <Fragment>
        <ToDo />
      </Fragment>
    </Provider>
  )
}
