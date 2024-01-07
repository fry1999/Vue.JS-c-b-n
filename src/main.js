import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import About from './components/About.vue'
import TodoApp from './components/TodoApp.vue'
import Photos from './components/Photos.vue'

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Định nghĩa các route ở đây
    { path: '/home', component: Home},
    { path: '/about', component: About},
    { path: '/todo-app', component: TodoApp},
    { path: '/photos', component: Photos}
  ],
});

app.use(router);
app.mount('#app');