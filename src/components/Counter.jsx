import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
    //create state to hold the value from input
     const [range,setRange] = useState("")
     console.log(range);

    //hook to dispatch a function in action
    const dispatch = useDispatch()
    //component can access the state by using useSelector Hook
    const count = useSelector((state)=>state.counter.value)


  return (
    <>
      <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column '>
        <h3 style={{fontSize:'70px'}}>{count}</h3>
        <div className='mt-5'>
            <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrement</button>
             {/*number method is used to convert string in to number*/}
            <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-2'>Reset</button>
            <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-2'>Increment</button>
        </div>
    </div>
    <div className='mt-3 w-100'>
        <input type="text" onChange={(e)=>setRange(e.target.value)} className='form-control' style={{borderColor:'blue'}} placeholder='Enter the Range' />
    </div>
    </>
  )
}

export default Counter