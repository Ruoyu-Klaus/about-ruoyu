const root = document.documentElement;

// Handle Theme
(function (document) {
  const themeDots = document.querySelectorAll('.theme-dot');

  themeDots.forEach(i => {
    i.addEventListener('click', function () {
      let mode = this.dataset.mode;
      setTheme(mode);
    });
  });

  const setTheme = mode => {
    localStorage.setItem('theme', mode);
    if (mode === 'default') {
      document.getElementById('theme-style').href = `/css/${mode}-theme.css`;
    }
    if (mode === 'blue') {
      document.getElementById('theme-style').href = `/css/${mode}-theme.css`;
    }
    if (mode === 'navy') {
      document.getElementById('theme-style').href = `/css/${mode}-theme.css`;
    }
    if (mode === 'green') {
      document.getElementById('theme-style').href = `/css/${mode}-theme.css`;
    }
    if (mode === 'purple') {
      document.getElementById('theme-style').href = `/css/${mode}-theme.css`;
    }
  };
  let theme = localStorage.getItem('theme');
  if (!theme) {
    setTheme('default');
  } else {
    setTheme(theme);
  }
})(document);

/* 
  Responsive font-size | nav-bar
*/

(function (document, root) {
  const menuBar = document.querySelector('#mobile-menu');
  var init = () => {
    setFontSize();
    bindEvent();
  };
  function setFontSize() {
    var cWidth = root.clientWidth;
    if (cWidth <= 414) {
      root.style.fontSize = cWidth / 37.5 + 'px';
    } else {
      if (root.style.fontSize !== '62.5%') {
        root.style.fontSize = '62.5%';
      }
    }
  }
  function toggleMenuBar() {
    document.querySelector('.s1 .menubar-l > ul').classList.toggle('show');
  }
  function bindEvent() {
    window.addEventListener('resize', setFontSize, false);
    menuBar.addEventListener('click', toggleMenuBar, false);
  }
  init();

  // Hanlde real time
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
    document.querySelector('.menuTime time').innerHTML = `${
      dayArr[day]
    } ${concatZero(h)}:${concatZero(m)}:${concatZero(s)}`;
  }
  setInterval(() => {
    showTime();
  }, 1000);
})(document, root);

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
    document
      .querySelectorAll('.dot > i')
      .forEach(i => (i.style.display = 'none'));
  })
);

// Handle Skills Carousel

// Check how many skill ele
// const skillsContent = document.querySelector('ul.skills-content');
// root.style.setProperty('--skills-elements', skillsContent.children.length);

// for (let i = 0; i < 4; i++) {
// skillsContent.appendChild(skillsContent.children[i].cloneNode(true));
// }

// Control main content
