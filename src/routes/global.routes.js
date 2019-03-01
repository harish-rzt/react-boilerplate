import Page1 from '../pages/Page1/Page1';
import Page2 from '../pages/Page2/Page2';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

export const routes = [
  {
    path:"/",
    type:"redirect",
    to:"/home"
  },
  {
    path: "/home",
    component: Page1,//import('../pages/Page1/Page1'),
  },
  {
    path: "/page2",
    component: Page2,//import('../pages/Page1/Page1'),
    exact: false,
  },
  {
    path: "*",
    component: PageNotFound,
    exact: true,
  },
];