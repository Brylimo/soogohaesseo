import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            hiru
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;