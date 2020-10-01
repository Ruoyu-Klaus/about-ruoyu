import React, { useEffect } from 'react';
import './MenuBar.scss';

function MenuBar() {
  // Hanlde real time
  useEffect(() => {
    function concatZero(timeFrame) {
      return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame;
    }
    function showTime() {
      let today = new Date();
      let day = today.getDay();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      let dayArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
      document.getElementById('menuTime').innerHTML = `${dayArr[day]} ${concatZero(h)}:${concatZero(
        m
      )}:${concatZero(s)}`;
    }
    setInterval(() => {
      showTime();
    }, 1000);
  }, []);
  return (
    <div className='menubar'>
      <div className='menubar-l'>
        <i className='fab fa-apple'></i>
        <ul>
          <li>
            <a target='_blank' href='/pages/drum/index.html'>
              键盘鼓
            </a>
          </li>
          <li>
            <a target='_blank' href='/pages/clock/index.html'>
              电子钟
            </a>
          </li>
        </ul>
      </div>
      <div className='menubar-r'>
        <ul>
          <li>
            <i className='fas fa-wifi'></i>
          </li>
          <li>
            <span>100%</span>{' '}
            <i className='fas fa-battery-full' style={{ verticalAlign: 'bottom' }}></i>
          </li>
          <li> Ruoyu Wang</li>
          <li>
            <time id='menuTime'></time>
          </li>
          <li>
            <i className='fas fa-search'></i>
          </li>
        </ul>
        <i id='mobile-menu' className='fas fa-bars'></i>
      </div>
    </div>
  );
}

export default MenuBar;
