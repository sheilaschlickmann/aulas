import { startRoutes } from './services/router.js';

export const main = async () => {
  await startRoutes();
}

window.menuToggle = () => {
  const isContainerDefault = document.getElementById('container').className === 'container-default';
  document.getElementById('container').className = isContainerDefault ? 'container-toggle' : 'container-default';
}