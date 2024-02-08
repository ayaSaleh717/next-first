"use client"

import { useEffect, useState } from "react"

export default function Todo() {

    const [todo, setTodo] = useState({})
    // useEffect(
    //    async ()=>{
          
    //         // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         // const result = await response.json()
    //         // setTodo(result)
    //         // console.log(todo)

            

    //     }
    // )
  return (
    <>
    <h1>Lets stat</h1>
        {/* <h1>{todo.title}</h1> */}
    </>
  )
}

 