import { useEffect, useState } from "react";

function Counter() {

    const [counter,setCounter] = useState(0);
    const handleOnclick= (event)=>{
        const count =event.target.value;
        setCounter(counter+1);
        console.log(counter);
    }
    return(

        <div>
            <button onClick={handleOnclick}>Click me</button>
            <p style={{color:'green'}}> You clicked  {counter} itmes</p>
        </div>
        
    )
}
export default Counter;