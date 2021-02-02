import { useState } from 'react'

const Counter = () => {
    const[count, setCount]= useState(0)
  
    return ( 
        <section id='counter'>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        
        <button onClick={()=>setCount(count-1)}>-</button>
        <br/>
        <button onClick={()=>setCount(0)}>Reast</button>
        </section>
     );
}
 
export default Counter;