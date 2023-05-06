import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 8px;
`;

const Footer = styled.footer`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.08) 0px -8px 8px;
    margin-top: 48px;
`;

const LoginButton = styled.button`
    text-align: center;
    border-radius: 1rem;
    border: none;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    background-color: var(--btn-color1);
    height: 2rem;
    color: white;
    width: 65px;
    cursor: pointer;
`;

const Logo = styled.img.attrs({
    src: "./images/logo.png",
    alt: "logo"
})`
    height: 67px;
    cursor: pointer;
`

const HeaderLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 140px;
`

const Main = styled.main`
    min-height: 800px;
`

const Layout = () => {
    return (
        <div>
            <Header>
                <div>
                    <Logo />
                </div>
                <HeaderLeft>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/>
                    <FontAwesomeIcon icon={faMoon} size="lg"/>
                    <LoginButton>login</LoginButton>
                </HeaderLeft>
            </Header>
            <Main>
                <Outlet />
            </Main>
            <Footer>
                &copy; 2023-{new Date().getFullYear()} Brylimo. All Rights Reserved.
            </Footer>
        </div>
    );
}

export default Layout;