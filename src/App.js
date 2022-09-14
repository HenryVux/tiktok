import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './components/Button';
import Button from './components/Button';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout/';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const ComponentPage = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <ComponentPage />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {/* <Route path="/" element={<Home />} />
                    <Route path="/follow" element={<Follow />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
