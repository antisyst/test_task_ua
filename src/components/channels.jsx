import styled from 'styled-components';
import EllipseSvg from '../assets/ellipse.svg';
import WebIcon from '../assets/web.svg';
import Tabs from './tab_section';


const ChannelsInt = styled.div `
    text-align: center;
    margin-top: 5%;
`
const EllipseFirst = styled.div `
width: 500px;
height: 500px;
position: absolute;
border-radius: 449.333px;
position: absolute;
background: #2196F3;
filter: blur(413.3333435058594px);
`
const EllipseSecond = styled.div `
width: 400px;
height: 400px;
position: absolute;
border-radius: 326.667px;
background: #F33;
filter: blur(280px);
position: absolute;
margin-left: 42%;
margin-top: 10%;
filter: blur(413.3333435058594px);
`
const EllipseSvgCont = styled.div `
width: 500px;
height: 500px;
position: absolute; 
text-align: left;
margin-right: 7%;
margin-top: -20%;
`
const WebTokenDiv = styled.div `
    position: absolute;
    left: 0;
    z-index: 0;
    margin-top: -7%;

    img {
        width: 460px;
        z-index: 0;
        height: 1000px;
    }
`
const FirstContent = styled.div `
    text-align: left;
    filter: invert(0);
    z-index: 1000;
    color: var(--var-color-white);
    opacity: 1;
    margin-bottom: 4vh;

    h1 {
        font-size: 52px;
        font-weight: 500;
        z-index: 10000;
    }
    p {
        font-size: 20px;
        padding-right: 30%;
        opacity: 0.7;
        margin-top: 25px;
        line-height: 150%;
    }
`
const AllContentInt = styled.div `
    padding: 0 6%;
    z-index: 1000;
    margin-top: 2vh;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
      padding: 0 4%;
    }
`
 
const Channels = () => {
    return(
        <ChannelsInt>
            <EllipseFirst/>
            <EllipseSecond/>
            <EllipseSvgCont>
                <img src={EllipseSvg} alt="" />
            </EllipseSvgCont>
            <WebTokenDiv>
                <img src={WebIcon} alt="" />
            </WebTokenDiv>
            <AllContentInt>
                <FirstContent>
                    <h1>ТВ - каналы</h1>
                    <p>Национальные, познавательные, детские, кино, спортивные, новостные и многие другие телеканалы</p>
                </FirstContent>
                <Tabs/>
            </AllContentInt>
        </ChannelsInt>
    )
}

export default Channels;