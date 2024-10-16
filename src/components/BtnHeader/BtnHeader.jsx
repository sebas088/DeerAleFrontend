import React from 'react';
import { Link } from 'react-router-dom';
import './BtnHeader.css';


const BtnHeader = ({btnText, icon, route}) => {
  return (
    <Link className='btnHeader' to={route}>
      {btnText}
      {icon && <img className='iconHeader' src={icon}/>}
    </Link>
  )
}

export default BtnHeader;