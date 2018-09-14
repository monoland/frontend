import Vue from 'vue';
import Router from 'vue-router';
import { Authorize } from './utilities/authent';

import Auth from './views/Auth.vue';
import * as Account from './views/account/main';

import Page from './views/Page.vue';
import * as Backend from './views/backend/main';

import * as Setting from './views/setting/main';

Vue.use(Router);

let router = new Router({
    routes: [
        { path: '/', redirect: { name: 'Login' }},

        { path: '/account', component: Auth, children: [
            { path: 'login', name: 'Login', component: Account.Login }
        ]},

        { path: '/backend', component: Page, meta: { auth: true }, children: [
            { path: 'dashboard', name: 'Dashboard', component: Backend.Dashboard },
            { path: 'setting', component: Backend.Setting, children: [
                { path: '/', name: 'Setting', component: Setting.Setting },
                { path: 'account', name: 'Account', component: Setting.Account },
                { path: 'password', name: 'Password', component: Setting.Password }
            ]}
        ]}
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (!Authorize.check()) {
            next({
                name: 'Login',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            next();
        }
    } else {
        if (to.name === 'Login' && Authorize.check()) {
            next({
                name: 'Dashboard'
            });
        } else {
            next();
        }
    }
});

export default router;