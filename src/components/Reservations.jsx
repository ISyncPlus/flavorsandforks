import React from 'react'

const Reservations = () => {
  return (
    <div className="p-3">
        <section className="max-w-4xl mx-auto bg-slate my-auto">
            <div className="border-1 rounded-lg shadow-xl mt-4 p-5 text-3xl">
                <form action="#" method="post">
                    <label htmlFor="Name" className="text-lg sm:text-3xl font-bold text-slate-700">Full Name
                    </label>
                    <input type="text" name="Name" id="name" className="block border-1 rounded-lg w-[70%]
                    mt-1 mb-5
                    "/>
                    
                    <label htmlFor="NumberOfPersons">Number Of Persons
                        <div className="block">
                        <input type="radio" name="NumberofPersons" id="persons" className='mr-2 '/>
                        2
                        <input type="radio" name="NumberofPersons" id="persons" className='mr-2 ml-2'/>
                        4
                        <input type="radio" name="NumberofPersons" id="persons" className='mr-2 ml-2'/>
                        6
                        </div>
                    
                    </label>
                    
                </form>
            </div>

        </section>
      
    </div>
  )
}

export default Reservations
