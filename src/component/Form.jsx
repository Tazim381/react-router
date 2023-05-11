import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function InputForm() {

  const [email,setEmail] = useState({})

  const handleOnChange= (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setEmail({...email, [name]:value})
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    console.log(email);
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
    </div>
  );
}

export default InputForm;