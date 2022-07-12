import React from 'react'

const List=(props)=>
{
    {/* Change code below this line */}
    return (

    <p>{props.task.join(", ")}</p>

    )
};



export default function Todo() {
  return (
    <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>

        <List task = {["walk", "cook", "bake"]}/>

        <h2>Tomorrow</h2>

        <List task = {["study", "code", "eat"]}/>

    </div>
  )
}
