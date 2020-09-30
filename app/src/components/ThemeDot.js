import React from 'react';
import './ThemeDot.scss';

function ThemeDot({ changeTheme }) {
  return (
    <div className='theme-options-wrapper' onClick={changeTheme}>
      <div data-mode='default' className='theme-dot' id='light-mode'></div>
      <div data-mode='blue' className='theme-dot' id='blue-mode'></div>
      <div data-mode='navy' className='theme-dot' id='navy-mode'></div>
      <div data-mode='green' className='theme-dot' id='green-mode'></div>
      <div data-mode='purple' className='theme-dot' id='purple-mode'></div>
    </div>
  );
}

export default ThemeDot;
