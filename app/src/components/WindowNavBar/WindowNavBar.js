import React, { useEffect } from 'react';
import './WindowNavBar.scss';
function WindowNavBar(props) {
  useEffect(() => {
    const windowContainer = document.querySelector(`.navbar`).parentElement;
    // Handle apple window dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
      dot.addEventListener('mouseover', function () {
        document
          .querySelectorAll('.dot > i')
          .forEach(i => (i.style.display = 'block'));
      });
      dot.addEventListener('click', function () {
        const name = this.getAttribute('name');
        switch (name) {
          case 'close':
            console.log('close');
            return;
          case 'zoomout':
            return;
          case 'zoomin':
            if (windowContainer.requestFullscreen) {
              windowContainer.requestFullscreen();
            } else if (windowContainer.webkitRequestFullscreen) {
              /* Safari */
              windowContainer.webkitRequestFullscreen();
            } else if (windowContainer.msRequestFullscreen) {
              /* IE11 */
              windowContainer.msRequestFullscreen();
            }
            return;
        }
      });
      dot.addEventListener('mouseout', function () {
        document
          .querySelectorAll('.dot > i')
          .forEach(i => (i.style.display = 'none'));
      });
    });
    return () => {
      dots.forEach(dot => {
        dot.removeEventListener('mouseover');
        dot.removeEventListener('click');
        dot.removeEventListener('mouseout');
      });
    };
  }, []);
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
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='http://wangruoyu.digital'
          >
            博客
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/Ruoyu-Klaus'
          >
            Github
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:ruoyuwangruoyu@hotmail.com'
          >
            邮箱
          </a>
        </li>
      </ul>
    </div>
  );
}

export default WindowNavBar;
