const themeDots = document.querySelectorAll('.theme-dot');

themeDots.forEach(i => {
  i.addEventListener('click', function () {
    let mode = this.dataset.mode;
    console.log(mode);
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
