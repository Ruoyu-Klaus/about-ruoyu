import React, { useEffect } from 'react';
import WindowNavBar from '../components/WindowNavBar/WindowNavBar';
import './WindowContainer.scss';

function WindowContainer(props) {
  const { ThemeDot, Avatar, className } = props;
  useEffect(() => {
    //
    const windowContainer = document.querySelector(`.${className}`);
    // Handle apple window dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot =>
      dot.addEventListener('mouseover', function () {
        document
          .querySelectorAll('.dot > i')
          .forEach(i => (i.style.display = 'block'));
      })
    );
    dots.forEach(dot =>
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
      })
    );
    dots.forEach(dot =>
      dot.addEventListener('mouseout', function () {
        document
          .querySelectorAll('.dot > i')
          .forEach(i => (i.style.display = 'none'));
      })
    );
  }, []);
  return (
    <div className={className}>
      <WindowNavBar />
      <div id='contentContainer'>
        <div className='leftContent'>
          <div>lorem</div>
          {ThemeDot}
        </div>
        <div className='rightContent'>{Avatar}</div>
      </div>
    </div>
  );
}

export default WindowContainer;
