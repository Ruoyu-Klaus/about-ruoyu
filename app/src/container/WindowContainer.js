import React, { useEffect } from 'react';
import WindowNavBar from '../components/WindowNavBar/WindowNavBar';

function WindowContainer({ ThemeDot, className }) {
  useEffect(() => {
    // Handle apple window dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot =>
      dot.addEventListener('mouseover', function () {
        document.querySelectorAll('.dot > i').forEach(i => (i.style.display = 'block'));
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
            console.log('zoomout');
            return;
          case 'zoomin':
            console.log('zoomin');
            return;
        }
      })
    );
    dots.forEach(dot =>
      dot.addEventListener('mouseout', function () {
        document.querySelectorAll('.dot > i').forEach(i => (i.style.display = 'none'));
      })
    );
  }, []);
  return (
    <div className={className}>
      <WindowNavBar />
      {ThemeDot}
    </div>
  );
}

export default WindowContainer;
