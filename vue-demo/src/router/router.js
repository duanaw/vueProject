
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: "/index",
        name: "index",
        component: (resolve) => {
            require(["../pages/index.vue"], resolve);
        }
    },
    {
        path: "/happy",
        name: "happy",
        component: (resolve) => {
            require(["../pages/happy.vue"], resolve);
        }
    },
    {
      path: "/weather",
      name: "weather",
      component: (resolve) => {
          require(["../pages/weather.vue"], resolve);
      }
    },

    {
      path:"/weatherid/:id",
      name:"weatherid",
      component: (resolve) => {
          require(["../pages/weatherid.vue"], resolve);
      }
    },
    {
      path: "/robot",
      name: "robot",
      component: (resolve) => {
          require(["../pages/robot.vue"], resolve);
      }
    },
    {
      path: "/music",
      name: "music",
      component: (resolve) => {
          require(["../pages/music.vue"], resolve);
      }
    },
    {
      path: "/about",
      name: "about",
      component: (resolve) => {
          require(["../pages/about.vue"], resolve);
      }
    },
    {
        path: '*',
        redirect: {
            name: "index",
        },
    },
];


 // 实例化路由
 
export default new VueRouter({
    mode: "hash",
    routes: routes
});
