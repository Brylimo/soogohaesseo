import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Layout = () => {
    return (
        <div>
            <Header>

            </Header>
            <main>
                <Outlet />
            </main>
            <Footer>
                DESIGN BY @Brylimo | Admin
            </Footer>
        </div>
    );
}

export default Layout;