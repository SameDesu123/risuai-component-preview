import { mount } from 'svelte';
import App from './App.svelte';

import 'src/styles.css';
import './app.css';

const target = document.getElementById('app');

if (!target) {
  throw new Error('Missing #app target');
}

mount(App, { target });
