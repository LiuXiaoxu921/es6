import Vue from 'vue';
import Router from 'vue-router';
import Chat from './views/chat.vue';
import abb from './views/abb.vue';
import ahh from './views/ahh.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'abb',
      component: abb,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
    },
    {
      path: '/ahh',
      name: 'ahh',
      component: ahh,
    },
    
  ],
});
