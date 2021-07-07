import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/VehicleEntryForm",
    name: "Vehicle Entry Form",
    component:()=>
    import ("../views/VehicleEntryForm.vue")
  },
  {
    path: "/GridOfVehicles",
    name: "Grid of vehicles",
   
    component: () =>
      import("../views/GridOfVehicles.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;