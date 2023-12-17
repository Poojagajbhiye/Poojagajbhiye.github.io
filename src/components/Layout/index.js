import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import Home from '../Home';
import AppFooter from '../AppFooter';

const Layout = () => {
    return (
        <div>
            <div className='big-screen'>
                <div className='App'>
                    <Sidebar/>
                    <div className='page'>
                        <Outlet />
                    </div>
                    <AppFooter/>
                </div>
            </div>
            <div className='small-screen'>
                <div>
                    <Home/>
                </div>
            </div>
        </div>
    )
}

export default Layout