import React, { useState } from 'react';

export function MyDropdown({ label, options, handleChange, value ,currentBudget}) {

  return (
    <div>
      <label htmlFor="myDropdown" className='font-bold text-amber-500 mr-2' >{label}</label>
      <select id="myDropdown" value={value} onChange={handleChange} className='rounded-2xl p-2 bg-slate-300'>
        {options.map((option) => (
          <option key={option} value={option} >
            {option}  
          </option>
        ))}
      </select>
     <b className='text-amber-500'> <p>Selected: <span className='text-white'>{value}</span></p></b>
     <b className='text-amber-500'> <p>Current budget: <span className='text-white'>{currentBudget}</span></p></b>
    </div>

  );
}

