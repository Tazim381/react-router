import { useEffect, useState } from "react";

function Counter() {

    const [counter,setCounter] = useState(0);
    const handleOnclick= (event)=>{
        const count =event.target.value;
        setCounter(counter+1);
        console.log(counter);
    }
    return(

        <div className="text-center d-flex flex-column gap-5" style={{paddingTop:'25vh', paddingBottom:'25vh'}}>
            <div>
            <button onClick={handleOnclick}>Click me</button>
            </div>
            <div>
            <h1 style={{color:'green'}}> You clicked  {counter} itmes</h1>
            </div>
        </div>
        
    )
}
export default Counter;