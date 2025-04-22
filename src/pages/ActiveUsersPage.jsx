import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import DataTable from 'react-data-table-component'

const ActiveUsersPage = ( {url} ) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const fetchUsers = async () => {
      try{
        const res = await fetch(`${url}/users`);
        const data = await res.json();
        setUsers(data);
      }catch(error){
        console.log('Error detected: ', error)
      }finally{
        setLoading(false)
      }
    }
    fetchUsers();
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
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Photo",
      selector: (row) => row.photo,
    },
    
  ]

  return (
    <div>
      <section className='p-8 text-center'>
        <DataTable  
        title="Regular Site Users"
        columns={columns}
        data={users}
        progressPending={loading}
        progressComponent={<Spinner />}
        pagination
        
        />
      </section>
      
    </div>
  )
}

export default ActiveUsersPage
