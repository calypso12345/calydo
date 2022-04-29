import React from 'react';

export const MiddleColumn = ({text}) => {
    
 return (
    <div className='middle-column' >
        <div className="middle-text">
            {text}&nbsp;&nbsp;&nbsp;
            <i className="bi bi-chevron-double-down"></i>
        </div> 
    </div>
  );
};