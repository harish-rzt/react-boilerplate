import Page1 from '../pages/Page1/Page1';
import Page2 from '../pages/Page2/Page2';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

export const routes = [
  {
    path: '/',
    component: Page1,
    exact: true,
  },
  {
    path: '/page2',
    component: Page2,
  },
  {
    path: '*',
    component: PageNotFound,
    exact: true,
  },
];