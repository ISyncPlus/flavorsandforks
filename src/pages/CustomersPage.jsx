import React from 'react'
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Spinner from '../components/Spinner';

const CustomersPage = ({ url }) => {

  const[loading, setLoading] = useState(true);
  const[perPage, setPerPage] = useState(10)
  const [customers, setCustomers] = useState([]);
  useEffect(()=>{
    const fetchCustomers = async()=> {
      try{
        const res = await fetch(`${url}/customers`);
        const data = await res.json();
        setCustomers(data);
      } catch(error){
        console.log('Error loading data', error)
      }finally{
        setLoading(false);
      }
    }
    fetchCustomers()
  }, []);

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
  },
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Username",
    selector: (row) => row.username,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
  },

]



  return (
    <div>
      <section className='text-center p-8'>
       
         <DataTable 
         title="Satisfied Customers"
         columns={columns}
         data={customers}
         progressPending={loading}
         progressComponent={<Spinner/>}
         pagination
         className='px-8'
         /> 


       
      </section>
    </div>
  )
}

export default CustomersPage
