import React from 'react'
import { useState } from 'react'

export default function Mycomponent() {

    const [message] = useState("Welcome to Techmojo!")

  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}
