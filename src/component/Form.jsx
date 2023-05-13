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
      
    <Form onSubmit={handleSubmit}>
     <h1>Contact Form </h1>
      <label>Email</label>
      <input onChange={handleOnChange} name='email'></input>
      <label>Password</label>
      <input onChange={handleOnChange} name='password'></input>
      <button type='submit'>Submit</button>
    </Form>
    <div>
      <h4 style={{color:'green'}}>Your email is : {data1.email}</h4>
      <h4>Your password is : {data1.password}</h4>
    </div>
    </div>
  );
}

export default InputForm;