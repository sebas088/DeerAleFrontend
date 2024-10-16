import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpeg';
import Cart from '../../assets/images/cart.png';
import SignUp from '../../assets/images/signUp.png'; 
import SignIn from '../../assets/images/signIn.png';
import BtnHeader from '../BtnHeader/BtnHeader';

export const Header = () => {

  return (
    <header>
      <div className='main'>
        <BtnHeader route='/' btnText='Oferts'></BtnHeader>
        <BtnHeader to='' btnText='Men'></BtnHeader>
        <BtnHeader to='' btnText='Women'></BtnHeader>
        <Link className='logoPosition' to='/'>
          <img src={Logo} alt='Logo' className='logoImg'></img>
        </Link>
        <BtnHeader to='' icon={Cart}></BtnHeader>
        <BtnHeader to='' icon={SignIn}></BtnHeader>
        <BtnHeader route='/sign-up' icon={SignUp}></BtnHeader>
      </div>
    </header>
  )
}
