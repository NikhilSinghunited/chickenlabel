import logo from '../assets/logo192.png';
import React from 'react';
// import '../Styles/card.css';
const Card = ({ name, mobile, email, branch }) => {
  return (
    <div className='parent h-screen bg-green-200 flex item-center justify-center'>
      <div className='card border text-3xl w-[90vw] max-w-[600px] bg-red-200 flex flex-col items-center justify-center self-center px-3 py-4'>
        <div className='card-header flex justify-between items-center gap-8'>
          <h1 className='logo font-bold text-3xl '>LOGO</h1>
          <h1 className='text-3xl'>UNITED GROUP OF INSTITUTIONS</h1>
        </div>
        <div className='card-body flex justify-between items-center gap-12'>
          <div className='left bg-red-300'>UCER</div>
          <div className='center'>
            <div className='flex  justify-center'>
              <img src={logo} alt='' />
            </div>
            <p>
              <strong>Email:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {mobile}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Email:</strong> {branch}
            </p>
          </div>
          <div className='right  bg-red-300'>BATCH</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
