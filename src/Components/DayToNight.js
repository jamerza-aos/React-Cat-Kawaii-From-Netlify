import { useState } from 'react'

const DayToNight  = () => {
 const [isDay, setIsDay]= useState(false)


 const handDayToNight =()=>{
     setIsDay(!isDay )
 }


    return ( 
        <div id='box' style={{background: isDay ? 'black' :  'white'}}  >

                <h1 style={{color:  !isDay ?   'black':'white'}}>{isDay ? "Night" : "Day"}</h1>
                <br/>
                <br/>
                <button style={{background: !isDay ? 'black' :  'white'},{color: 'black'}} onClick={handDayToNight}>Change to {!isDay ? "Night" : "Day"} </button>
        </div>
     );
}
 
export default DayToNight;