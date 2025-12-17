import react, {useState } from "react";

export function Counter(){
const [count,setCount]=useState(0);
    return (
        <div className="border border-2 p-2 m-3 text-center">
           <b> <h1 className="text-center text-3xl">COUNTER</h1></b>
           <div className=" " >
             <h1>counter:{count}</h1>
            <button className="border border-2 p-2 m-2 rounded bg-green-400" onClick={()=>{setCount(count+1)}}>increment</button>
            <button className="border border-2 p-2 m-2 rounded bg-red-300" onClick={()=>{setCount(count-1)}}>decrement</button>
           </div>
        </div>
    )
}