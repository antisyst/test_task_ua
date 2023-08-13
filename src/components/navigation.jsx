import styled from 'styled-components';
import MainLogo from '../assets/logo.png';
import { FaFacebook, FaTelegram } from 'react-icons/fa'

const NavMain = styled.nav `
    display: flex;
    flex-direction: row;
    align-items: center;
    background: none;
    z-index: 10000;
    justify-content: space-between;
    padding: 20px 100px;

    @media only screen and (max-width: 990px) and (min-width: 768px)  {
     padding: 16px 80px;
    }

    @media only screen and (max-width: 768px) and (min-width: 375px) {
     padding: 16px 20px;
    }

    img {
        width: 96px;
        height: 86.609px;
    }
   
`
const MainNavTop = styled.div `
    width: 100%;
`
const RightMenu = styled.div `
display: inline-flex;
justify-content: flex-end;
align-items: center;
gap: 36px;

svg {
    width: 24px;
    height: 24px;
}

a {
    color: var(--var-color-white);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease-out;
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }

    &:nth-child(4) {
        opacity: 1;
        padding: 16px 32px;
        border-radius: 5px;
        border: 2px solid var(--var-color-white);
        transition: all 0.3s ease-out;

        &:hover {
            color: var(--var-color-white);
            background: var(--var-color-main);
            border: 2px solid var(--var-color-main);
        }
    }
    &:nth-child(2) {
        padding-right: 10px;
    }
}
`

const Navigation = () => {
    return(
        <MainNavTop>
        <NavMain>
            <div>
                <a href="#">
                 <img src={MainLogo} alt="" />
                </a>
            </div>
            <RightMenu>
                <a href="#">
                    <FaFacebook/>
                </a>
                <a href="#">
                    <FaTelegram/>
                </a>
                <a href="">Регистрация</a>
                <a href="">Войти</a>
            </RightMenu>
        </NavMain>
        </MainNavTop>
    )
}

export default Navigation;