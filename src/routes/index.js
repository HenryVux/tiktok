import routesConfig from '~/config/routes';
// layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.follow, component: Follow },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
