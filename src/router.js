import Vue from "vue";
import VueRouter from "vue-router";

const Layout = () => import(/* webpackChunkName: "app" */ "./views/app");
//Pages: Common
const AddPage = () => import("./views/app/pages/AddPage")
const ListPage = () => import("./views/app/pages/ListPage")
const DetailsPage = () => import("./views/app/pages/DetailsPage")
Vue.use(VueRouter);
let childList = ['add', 'list', 'details'];
const routeMenu = (path, component) => {
  let page = '';
  if (path == 'list') {
    page = ListPage;
  } else if (path == 'add') {
    page = AddPage;
  } else if (path == 'details') {
    page = DetailsPage;
  }

  return {
    path: path,
    name: component,
    component: page,
    props: {component: component}
  };
}

const routeModule = (path, component, menu = []) => {
  let children = [];
  menu.forEach(function (item) {
    children.push(routeMenu(item, component));
  });
  return {
    path: path,
    component: () =>
      import(/* webpackChunkName: "applications" */ "./views/app/applications"),
    redirect: '/app' + path + '/list',
    children: children
  };
}
const routes = [
  {
    path: "/",
    redirect: "/app",
  },
  {
    path: "/app",
    component: Layout,
    children: [
      {
        path: "/app",
        component: () =>
          import(/* webpackChunkName: "dashboards" */ "./views/app/dashboards/Default"),
      },

      routeModule('categories', 'category', childList),
      routeModule('items', 'item', childList),
      routeModule('users', 'user', childList),
      routeModule('user-roles', 'user-role', childList),
      routeModule('orders', 'order', childList),
      routeModule('promocodes', 'promocode', childList),
      routeModule('reviews', 'review', ['list']),
      {
        path: "settings",
        component: AddPage,
        props: {component: 'setting'},
      },
    ]
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  //mode: "history"
});

export default router;
