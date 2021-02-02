import { Planet } from 'react-kawaii';
import { Cat } from 'react-kawaii';
import { useState } from 'react'
const Mood = () => {
    const random225 =()=>Math.floor(Math.random() *225)
    const randomColor =()=>{ setColor(`rgb(${random225()},${random225()},${random225()})`)}
    const moodArray=[ "sad", "shocked", "happy", "blissful", "lovestruck", "excited", "ko"]
    const[mood,setMood]= useState(moodArray[Math.floor(Math.random() * moodArray.length )])
   const[color,setColor]=useState(`rgb(${random225()},${random225()},${random225()})`)
   const randomMood = ()=>{
    setMood(moodArray[Math.floor(Math.random() * moodArray.length )])
  }
  
    
    return ( 
        <article>
        <div id='cat'>

        <Planet size={200} mood={mood} color={color} />
        <Cat size={200} mood={mood} color={color} />
        {/* <button onClick={randomMood,randomColor}>Random</button> */}
       
        <button style={{background:`rgb(${random225()},${random225()},${random225()})`}} onClick={()=>{randomMood();randomColor() }}>Random</button>
        </div>
        </article>
     );
}
 
export default Mood;