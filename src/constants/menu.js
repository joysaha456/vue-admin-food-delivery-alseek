const subs = ['add', 'list'];
const menuModule = (component, label, icon, children = []) => {
  let subs = [];
  children.forEach(function (item) {
    subs.push({
      icon: item == 'add' ? "simple-icon-plus" : "simple-icon-list",
      label: item,
      to: "/app/" + component + "/" + item
    })
  });
  return {
    id: component,
    icon: icon,
    label: label,
    to: "/app/" + component,
    subs: subs
  };
}

const data = [{
  id: "dashboard",
  icon: "iconsminds-shop-4",
  label: "menu.dashboards",
  to: "/app",
  subs: [
  ]
},
  menuModule('categories', 'Categories', "simple-icon-list", subs),
  menuModule('items', 'Items', "simple-icon-plus", subs),
  menuModule('orders', 'Orders', "iconsminds-shopping-cart", ['list']),
  menuModule('promocodes', 'Promocodes', "simple-icon-tag", subs),
  menuModule('reviews', 'Reviews', "simple-icon-star", ['list']),
  menuModule('users', 'Users', "iconsminds-user", subs),
  menuModule('user-roles', 'User Roles', "iconsminds-network", subs),
  menuModule('settings', 'Settings', "simple-icon-settings"),
];
export default data;
