import './styles.css';

const themeSwitch = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};

const switchTheme = () => {
  body.classList.toggle(theme.light);
  body.classList.toggle(theme.dark);

  if(body.classList.contains(theme.light)) {
  localStorage.setItem('theme', theme.light);
  }  else {
  localStorage.setItem('theme', theme.dark);
  }
};

const storedTheme = localStorage.getItem('theme');

if (storedTheme === theme.dark) {
    themeSwitch.checked = true;
}

body.classList.add(storedTheme);

themeSwitch.addEventListener('change', switchTheme);



import menuTemplate from './menu-item.hbs';
import meals from './menu.json';

const menuListRef = document.querySelector('.js-menu');

const markup = menuTemplate(meals);

menuListRef.insertAdjacentHTML('beforeend', markup);




