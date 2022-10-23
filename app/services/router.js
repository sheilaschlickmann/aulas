import { log } from '@welitoncardozounibave/pacotes';

let routes = {};

export const startRoutes = async () => {
  log('Loading routes');
  routes = {
    '/': await loadPage('pages/home.html'),
    '/about': await loadPage('pages/about.html'),
    '/contact': await loadPage('pages/contact.html'),
    404: await loadPage('pages/404.html')
  };
  onNavClick('/');
  log('Routes loaded successfully');
};

const loadPage = async (page) => {
  const html = await fetch(page);
  return await html.text();
};

window.onNavClick = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  document.getElementById('root').innerHTML = routes[pathname] || routes[404];
};