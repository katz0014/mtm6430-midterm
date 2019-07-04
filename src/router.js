import Vue from "vue";
import Router from "vue-router";
import Home from "./components/HelloWorld.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Testimonials from "./components/UserTestimonials.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/testimonials",
      name: "testimonials",
      component: Testimonials
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
