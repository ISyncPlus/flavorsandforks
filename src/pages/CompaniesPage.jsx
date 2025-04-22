import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import DataTable from 'react-data-table-component'
const CompaniesPage = ({ url }) => {
  const [companies, setCompanies] = useState([]);
  const[loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch(`${url}/companies`);
        const data = await res.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);
    
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Company Name",
      selector: (row) => row.name,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Country",
      selector: (row) => row.country,
    },
    {
      name: "Number of Employees",
      selector: (row) => row.employeeCount,
    },
  ]
  return (
    <div>
      <section className='text-center p-8'>
        <DataTable 
        title="Companies"
        columns={columns}
        data={companies}
        progressPending={loading}
        progressComponent={<Spinner/>}
        pagination
        />

      </section>
    </div>
  )
}

export default CompaniesPage
