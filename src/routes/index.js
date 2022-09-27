import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/follow', component: Follow },
    // { path: '/Profile', component: Profile },
    { path: '/@:nickname', component: Profile },
    { path: '/Search', component: Search, layout: null },
    { path: '/Upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
