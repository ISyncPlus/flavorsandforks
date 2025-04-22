import React from 'react'
import { useLocation } from 'react-router-dom'
const CompanyDetailsPage = () => {
    const { state } = useLocation();
    const title = state.company.name;
    const info = state.company;
  return (
    <div className="max-w-4xl mx-auto p-10">
        <h2 className='text-xl sm:text-2xl font-bold pb-2'>
            Company: {title}
        </h2>
        <section className='border rounded-lg'>
            <ul className="list-disc p-8">
                <li className='mb-2'>
                    Company ID: {info.id}
                </li>
                <li className='mb-2'>
                    CEO: {info.ceoName}
                </li>
                <li className='mb-2'>
                    Name: {info.name}
                </li>
                <li className='mb-2'>
                    Location: {info.address}
                </li>
                <li className='mb-2'>
                    Country: {info.country}
                </li>
                <li className='mb-2'>
                    Number of Employees: {info.employeeCount}
                </li>
                <li className='mb-2'>
                    Company Niche: {info.industry}
                </li>
                <li className='mb-2'>
                    Website: {info.domain}
                </li>
                <li className='mb-2'>
                    Logo: <img src={info.logo} alt="Company Logo" />
                </li>
            </ul>
            
            

        </section>
    </div>
  )
}

export default CompanyDetailsPage
