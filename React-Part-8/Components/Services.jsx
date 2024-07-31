import React, { useEffect } from 'react'

const Services = () => {
    useEffect(() => {
        console.log("Service component is created");
        return () => {
            console.log("Service component is deleted");
        }
    }) 


  return (
    <div>Services</div>
  )
}

export default Services