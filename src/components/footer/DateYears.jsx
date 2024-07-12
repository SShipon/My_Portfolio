import React from 'react';

const DateYears = () => {
  return (
    <div>
      
        <p className='lg:text-2xl text-base mx-24'>
           Develop by nxshipon ©{new Date().getFullYear()} Created 
          </p>
    </div>
  );
};

export default DateYears;