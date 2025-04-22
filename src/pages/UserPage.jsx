import React from 'react'
import { useLocation } from 'react-router-dom'
const UserPage = () => {
    const { state } = useLocation();
    const info = state.users;
    const title = state.users.name;
  return (
    <div className="max-w-4xlmx-auto p-10">
        <section className=" w-5/6 sm:w-1/2 mx-auto">
        <h2 className='text-xl sm:text-2xl font-bold pb-3'>
            User Info Card — {title}
        </h2>
        <section className='border rounded-lg'>
            <figure className='p-3'>
            <img src={info.photo} alt="Company Logo" className='rounded-full w-1/3 h-1/3 sm:sm:w-1/5 h-1/5 mx-auto'/>
            </figure>
        
            <ul className="list-none p-8 text-center">
                <li className='mb-2'>
                    User ID: {info.id}
                </li>
                <li className='mb-2'>
                    Username: {info.username}
                </li>
                <li className='mb-2'>
                    Name: {info.name}
                </li>
                <li className='mb-2'>
                    Email Address: {info.email}
                </li>
                <li className='mb-2'>
                    Address: {info.address}
                </li>
                <li className='mb-2'>
                    State: {info.state}
                </li>
                <li className='mb-2'>
                    Country: {info.country}
                </li>
                <li className='mb-2'>
                    Phone Number: {info.phone}
                </li>
            </ul>
        </section>
        </section>
        
    </div>
  )
}

export default UserPage
