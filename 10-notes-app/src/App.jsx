import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {

  const [notes, setNotes] = useState('') 

  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({notes, details})
    setTask(copyTask)
    setNotes('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-orange-400 text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>

        <h1 className='text-xl font-bold'>Notes App</h1>

        {/* FIRST INPUT FOR HEADING */}
          <input type="text" placeholder="Enter a note..." className='px-5 w-full font-medium py-8 border-2 rounded'
          value={notes} 
          onChange={(e) => {
            setNotes(e.target.value)
          }} />

        {/* SECOND INPUT FOR DETAILS */}
          <textarea placeholder="Enter details" className='px-5 w-full font-medium h-20 py-15 border-2 rounded' 
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }} />

          <button className='bg-white active:bg-amber-950 text-black px-5 py-3 w-full font-medium rounded'>Add Note</button>

      </form>
      <div className='lg:w-1/2 lg:border-2 bg-amber-200 p-10'>
      <h1 className='text-xl font-bold '>Your Notes</h1>
        <div className='flex flex-wrap gap-10 mt-5 h-full overflow-auto'>
          {task.map(function(elem, idx) {
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded bg-cover text-black pt-9 pb-4 px-7 pr-5 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
              <div>
                <h3 className='text-lg font-bold'>{elem.notes}</h3>
                <p className='text-gray-600'>{elem.details}</p>
              </div>
            <button onClick={() => {
              deleteNote(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-red-600 text-white text-xs py-1 font-bold rounded-2xl'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
