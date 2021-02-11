import React, { useEffect } from 'react';
import './WindowNavBar.scss';
function WindowNavBar(props) {
  useEffect(() => {
    const windowContainer = document.querySelector(`.window-container`);
    const mask = document.querySelector(`.mask`);
    mask.addEventListener('click', function () {
      document.querySelector('.mask').style.display = 'none';
      windowContainer.classList.remove('minimized');
      windowContainer.classList.add('backFromMinimized');

    })
    // Handle apple window dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
      dot.addEventListener('click', function () {
        const name = this.getAttribute('name');
        switch (name) {
          case 'close':
            if (document.fullscreenElement) {
              document.exitFullscreen().catch((err) => console.error(err))
            }
            return;
          case 'zoomout':
            document.querySelector('.mask').style.display = 'block';
            windowContainer.classList.add('minimized');
            windowContainer.classList.remove('backFromMinimized');

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
    });
    return () => {
      dots.forEach(dot => {
        dot.removeEventListener('click');
      });
    };
  }, []);

  const { handleWindowNavBarItem } = props
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
            onClick={handleWindowNavBarItem}
            data-href='https://i.loli.net/2020/07/03/WklZBzG2MxepQyg.jpg'
          >
            首页
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            onClick={handleWindowNavBarItem}
            data-href='https://i.loli.net/2020/07/03/WklZBzG2MxepQyg.jpg'
          >
            作品
          </a>
        </li>
        <li>

          <a
            target='_blank'
            rel='noopener noreferrer'
            onClick={handleWindowNavBarItem}
            data-href='http://wangruoyu.digital'
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
