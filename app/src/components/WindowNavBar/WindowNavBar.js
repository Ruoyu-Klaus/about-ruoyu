import React from 'react';
import './WindowNavBar.scss';
function WindowNavBar() {
  return (
    <div className='navbar'>
      <div className='dot-wrapper'>
        <div id='dot-1' name='close' className='dot'>
          <i className='fas fa-times'></i>
        </div>
        <div id='dot-2' name='zoomout' className='dot'>
          <i className='fas fa-minus'></i>
        </div>
        <div id='dot-3' name='zoomin' className='dot'>
          <i className='fas fa-expand-alt'></i>
        </div>
      </div>
      <ul className='contact-wrapper'>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://i.loli.net/2020/07/03/WklZBzG2MxepQyg.jpg'
          >
            微信
          </a>
        </li>
        <li>
          <a target='_blank' rel='noopener noreferrer' href='http://wangruoyu.digital'>
            博客
          </a>
        </li>
        <li>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/Ruoyu-Klaus'>
            Github
          </a>
        </li>
        <li>
          <a target='_blank' rel='noopener noreferrer' href='mailto:ruoyuwangruoyu@hotmail.com'>
            邮箱
          </a>
        </li>
      </ul>
    </div>
  );
}

export default WindowNavBar;
