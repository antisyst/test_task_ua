import styled from 'styled-components';
import EllipseSvg from '../assets/ellipse.svg';
import ContentImage from '../assets/header_image.png';
import BatsImage from '../assets/after-back.png';
import BlockContainer from './block_header';
const HeaderInt = styled.header `
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) and (min-width: 375px) {
        padding: 0;
    }


`
const EllipseFirst = styled.div `
width: 500px;
height: 500px;
position: absolute; 
top: 20%;
right: 25%;
border-radius: 668px;
opacity: 0.6;
background: #FC3232;
filter: blur(260px);

&:nth-child(2) {
    border-radius: 449.333px;
    background: #2196F3;
    filter: blur(200px);
    top: 1%;
    left: 15%;
    width: 400px;
    height: 400px;
}
&:nth-child(3) {
    border-radius: 326.667px;
    background: #F33;
    width: 400px;
    height: 400px;
    top: 20%;
    right: 30%;
    filter: blur(280px);
}
`
const EllipseSvgCont = styled.div `
width: 500px;
height: 500px;
position: absolute; 
top: -20%;
left: 0%;
`
const HeaderContentContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 58vh;
    justify-content: space-evenly;
    z-index: 100;
    flex-wrap: wrap-reverse;

    div {

        &:nth-child(1) {
            width: 45%;

            @media only screen and (max-width: 768px) and (min-width: 375px)  {
              width: 55%;
            }

            @media only screen and (max-width: 990px) and (min-width: 768px) {
               width: 50%;
            }
        }
        &:nth-child(2) {
            width: 55%;

            @media only screen and (max-width: 768px) and (min-width: 375px) {
                width: 40%
            }

            @media only screen and (max-width: 990px) and (min-width: 768px) {
                width: 50%;
            }
        }
    }
`
const HeaderMainContent = styled.div `
    text-align: left;
    position: relative;
    padding-left: 6%;
    color: var(--var-color-white);

    h1 {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 50px;
        line-height: 120%;
        margin-bottom: 30px;

        @media only screen and (max-width: 768px) and (min-width: 375px)  {
            font-size: 30px;
         }

        @media only screen and (max-width: 990px) and (min-width: 768px) {
            font-size: 40px;
        }
    }
    p {
        font-size: 18px;
        opacity: 0.8;
        margin-bottom: 60px;

        @media only screen and (max-width: 990px) and (min-width: 768px) {
           font-size: 16px;
        }
    }
`
const RightContentButton = styled.a `
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    background: var(--var-color-main);
    color: var(--var-color-white);
    padding: 24px 40px;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
        padding: 23px 24px;
    }

    @media only screen and (max-width: 768px) and (min-width: 375px)  {
        padding: 15px 10px;
        font-size: 15px;
        font-size: 14px;
     }
`
const HeaderImgContent = styled.div `
    text-align: center;
    padding-right: 3%;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
        padding-right: 0;

    }

    img {
        width: 830px;
        margin-right: -10px;

        @media only screen and (max-width: 768px) and (min-width: 375px) {
          width: 520px;
        }

        @media only screen and (max-width: 990px) and (min-width: 768px) {
            width: 680px;
            margin-right: -1px;
        }
    }
`
const BatsAfter = styled.div `
    position: absolute;
    bottom: 0;
    text-align: center;
    z-index: 0;

    img {
        width: 100%;
        height: 500px;
        object-fit: contain;
       z-index: 0;
        pointer-events: none;
    }
`
const Header = () => {
    return(
    <HeaderInt>
        <EllipseFirst/>
        <EllipseFirst/>
        <EllipseFirst/>
        <EllipseSvgCont>
            <img src={EllipseSvg} alt="Logo"/>
        </EllipseSvgCont>
        <HeaderContentContainer>
            <HeaderMainContent>
                <h1>Более 270 телеканаловв прямом эфире</h1>
                <p>Национальные, познавательные, детские, кино, спортивные, новостные и многие другие каналы</p>
                <RightContentButton href='#'>Протестировать 7 дней бесплатно</RightContentButton>
            </HeaderMainContent>
            <HeaderImgContent>
                <img src={ContentImage} alt="" />
            </HeaderImgContent>
        </HeaderContentContainer>
        <BatsAfter>
            <img src={BatsImage} alt="" />
        </BatsAfter>
    </HeaderInt>
    )
}

export default Header;