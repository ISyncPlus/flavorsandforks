import React from 'react'
import { useState } from 'react';

const Reservations = () => {
    const [time, setTime] = useState('00:00');
    const changeTime = (e) =>{
        setTime(e.target.value)

    }
  return (
    <div className="p-7">
        <section className="max-w-3xl mx-auto bg-slate my-auto">
            <div className="border-1 rounded-lg shadow-xl mt-4 p-6 text-4xl">
                
                <form action="#" method="post">
                    <h2 className='text-center text-slate-700 font-cinzel font-bold'>Reserve</h2>

                    {/* Name */}
                    <div>
                    <label htmlFor="Name" className="text-lg sm:text-xl font-bold text-slate-700">Full Name
                    </label>

                    <input type="text" name="Name" id="name" placeholder='Enter here...' className="block border-1 rounded-lg mt-2 py-2 px-3 text-lg w-full shadow-sm
                    "/>
                    </div>
                    

                    <div className='mt-3'>
                        <label htmlFor="email" className='text-lg sm:text-xl font-bold text-slate-700'>Email Address</label>
                        <input type="email" placeholder='example@gmail.com' className='block border-1 rounded-lg w-full py-2 px-3 text-lg mt-2 shadow-sm' required/>
                    </div>

                    <div className='mt-3'>
                        <label htmlFor="phone" className='text-lg sm:text-xl font-bold text-slate-700'>Phone Number</label>
                        <input type="tel" name="phone" placeholder='(+123)-111-222-5555' className='block border-1 rounded-lg w-full py-2 px-3 text-lg mt-2 shadow-sm'/>
                    </div>

                    {/* Date */}
                    <div className='mt-3'>
                    <label htmlFor="phone" className='text-lg sm:text-xl font-bold text-slate-700'>Date of Reservation</label>
                    <input type="date" name="date" id="date" required className='block text-[0.5em] sm:text-xl border rounded-lg p-2 mt-2 shadow-sm' />
                    </div>

                    {/* Time */}
                    <div className='mt-3'>
                    <label htmlFor="time" className='text-lg sm:text-xl font-bold text-slate-700'>Time of Reservation</label>
                    <input type="time" name="time" value={time} id="timeInput" onChange={changeTime}  required className='block text-[0.5em] sm:text-xl border rounded-lg p-2 mt-2 shadow-sm' />
                    </div>

                    {/* Number of Persons */}
                    <div>
                        <label htmlFor="number" className="text-lg sm:text-xl text-slate-700 font-bold block mt-5 mb-2">Number Of Guests
                        </label>
                    
                        <section className='text-xl sm:text-2xl'>

                            <label className="inline mt-3">
                            <input type="radio" name="number" value="2" required/> 2
                            </label>

                            <label className="inline mt-3 ml-3">
                            <input type="radio" name="number" value="2"/> 4
                            </label>

                            <label className="inline mt-3 ml-3">
                            <input type="radio" name="number" value="2"/> 6
                            </label>
                        </section>
                    </div>

                    {/* Special Requests */}
                    <div>
                        <label htmlFor="request" className="text-lg sm:text-xl text-slate-700 font-bold block mt-5 mb-2">Special Requests (Optional)</label>

                        <section className='text-xl sm:text-2xl'>
                            <textarea name="request" id="requestInput" rows="4" placeholder="What do you have in mind?" className='border rounded-lg w-full p-4 text-lg sm:text-xl shadow-sm'></textarea>
                        </section>
                    </div>
                    
                    <div>
                    <button type="submit" onSubmit={''} className='text-lg w-full mx-auto border px-3 py-2 rounded-lg shadow-lg bg-amber-500 text-white border-transparent mt-3 cursor-pointer hover:bg-amber-600 '>Submit</button>
                    </div>
                </form>

            </div>

        </section>
      
    </div>
  )
}

export default Reservations
