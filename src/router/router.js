import VueRouter from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import Home from '../components/Home.vue';
import SignUp from '../components/SignUp.vue';
import SavedData from '../components/SavedData.vue'

const routes = [
    { path: '', component: Home },
    { path: '/Login', component: LoginPage },
    { path: '/SignUp', component: SignUp },
    { path: '/SavedData', component: SavedData }
];

export const router = new VueRouter({
    mode:'history',
    routes 
});
