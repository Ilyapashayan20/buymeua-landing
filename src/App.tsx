import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import * as Pages from './pages/_index';
import Footer from "./components/Footer";
import {ScrollToTop} from "./utils";
import PageNotFound from "./pages/404Page";

export default function App() {

    return (
        <div className={'min-h-screen flex flex-col justify-between'}>
            <NavBar/>
            <ScrollToTop />
            <Routes>
                <Route
                    path='/'
                    element={<Pages.Home/>}
                />
                <Route
                    path='/providers'
                    element={<Pages.Providers/>}
                />
                <Route
                    path="*"
                    element={<PageNotFound />}
                />
            </Routes>
            <Footer />
        </div>
    );
}
