import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function InputForm() {

  const [data,setData] = useState({})
  const [data1,setData1] = useState({})

  const handleOnChange= (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData({...data, [name]:value})
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log(data);
    setData1(data);
  }
  return (
    <div>
      
    <form onSubmit={handleSubmit}>
      <div className='d-flex flex-column gap-4 align-items-center border border-primary p-5' >
      <div>
      <h1>Contact Form </h1>
      </div>
      <div>
      <label>Email</label>
      <input onChange={handleOnChange} name='email'></input>
      </div>
      <div>
      <label>Password</label>
      <input onChange={handleOnChange} name='password'></input>
      </div>
      <div>
      <button type='submit'>Submit</button>
      </div>
      </div>
    </form>
    <div  className="d-flex flex-column align-items-center p-5 m-5">
      <div>
      <h1>Submitted Values are </h1>
      </div>
      <div>
      <h4 style={{color:'green'}}>Your email is : {data1.email}</h4>
      <h4 style={{color:'green'}}>Your password is : {data1.password}</h4>
      </div>
    </div>
    </div>
  );
}

export default InputForm;