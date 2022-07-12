import React from 'react'

const CurrentDate=(props)=>{
    return(
    <div>
      
        <p>The current date is: {props.date}</p>
      
    </div>
    );
  };

export default function Calendardate() {
  return (
    <div>
        <h3>What date is it?</h3>

        <CurrentDate date={Date()} />
    </div>
  )
}
