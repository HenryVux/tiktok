import config from '~/config';
// layout
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.follow, component: Follow },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
