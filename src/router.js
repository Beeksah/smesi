import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Catalog from "./views/Catalog.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Product from "./views/Product.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
  },
  
  {
    path: "/about",
    name: "About",
    component: About,
  },
  
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path:"/product/:id",
    name:"Product",
    component: Product
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;