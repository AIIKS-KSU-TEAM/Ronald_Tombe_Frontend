import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import BlogList from "@/views/BlogList.vue";
import BlogDetail from "@/views/BlogDetail.vue";
import About from "@/views/About.vue";
import Research from "@/views/Research.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogList,
    },
    {
      path: "/posts/:year/:month/:day/:slug",
      name: "PostDetail",
      component: BlogDetail,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/research",
      name: "research",
      component: Research,
    },
  ],
});

export default router;
