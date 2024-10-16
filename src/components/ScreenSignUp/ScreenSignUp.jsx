import React from 'react';
import { useState } from "react";
import './ScreenSignUp.css';



export const ScreenSignUp = () => {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    date: "",
    address: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    })
  };

  const handleForm = (event) => {
    event.preventDefault();
    console.log(values);
  }
  console.log(handleForm);
  return (
    
    <div className='divForm'>
      <form className='formRegister' onSubmit={handleForm}>
        <h1>Registrate</h1>
        <input
          type='text'
          name='name'
          value={values.name}
          placeholder='Name'
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='lastName'
          value={values.lastName}
          placeholder='Last name'
          onChange={handleInputChange}
        />
        <input
          type='email'
          name='email'
          value={values.email}
          placeholder='Email'
          onChange={handleInputChange}
        />
        <input
          type='password'
          name='password'
          value={values.password}
          placeholder='Password'
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='phone'
          value={values.phone}
          placeholder='Phone'
          onChange={handleInputChange}
        />
        <input
          type='date'
          name='birthDate'
          value={values.birthDate}
          placeholder='Birthdate'
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='address'
          value={values.address}
          placeholder='Address'
          onChange={handleInputChange}
        />
        <button type='submit'>Sign up</button>
      </form>
      
    </div>
  )
}
