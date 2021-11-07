import App from './App.svelte'
import './theme/_smui-theme.scss';
import '../build/smui.css';

const app = new App({
  target: document.getElementById('app'),
})

export default app
