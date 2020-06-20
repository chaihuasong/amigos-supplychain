import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Services from './components/Services'
import Case from './components/Case'
import Solution from './components/Solution'
import News from './components/News'
import About from './components/About'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component:Home},
        { path: '/services', component:Services},
        { path: '/case', component:Case},
        { path: '/solution', component:Solution},
        { path: '/news', component:News},
        { path: '/about', component:About},
        { path: '/404', component:Error}
    ] });

export default router;