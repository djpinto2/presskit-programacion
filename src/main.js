import './style.css';
import { initIntro } from './intro.js';
import { initPresskit } from './presskit.js';

document.addEventListener('DOMContentLoaded', () => {
  initIntro();
  initPresskit();
});
