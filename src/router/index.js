import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      authOnly: true,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import( /* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
    meta: {
      authOnly: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import( /* webpackChunkName: "Login" */ "../views/Login.vue"),
    meta: {
      guestOnly: true
    },
  },
  {
    path: "/registration",
    name: "Registration",
    component: () =>
      import( /* webpackChunkName: "Login" */ "../views/Registration.vue"),
    meta: {
      guestOnly: true
    },
  },

  {
    path: "/:catchAll(.*)",
    component: () =>
      import( /* webpackChunkName: "Error" */ "../views/Error404.vue"),
    meta: {
      guestOnly: true
    },
  },
];










const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history'
});




// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})




function isLoggedIn() {
  return localStorage.getItem("token");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: "/",
        // query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});



export default router;