import React from 'react';

const DateYears = () => {
  return (
    <div>
      
        <p className='lg:text-2xl text-base'>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </p>
    </div>
  );
};

export default DateYears;