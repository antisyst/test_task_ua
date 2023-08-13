import styled from 'styled-components';
import DevicesPortIcon from '../assets/devices.svg';

const DeviceInt = styled.div `
    text-align: center;
    margin-top: 20vh;
    padding: 0 5%;
`
const DevicesContainerLast = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;

    div {
        width: 48%;
    }
`
const DevicesContent = styled.div `
    text-align: left;
    position: relative;
    color: var(--var-color-white);
    margin-top: -55px;

    h1 {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 47px;
        line-height: 120%;
        margin-bottom: 30px;

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
const LastContentButton = styled.a `
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    background: var(--var-color-main);
    color: var(--var-color-white);
    padding: 24px 40px;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
        padding: 23px 24px;
    }
 `

const LastImgContent = styled.div `
    text-align: center;
    padding-right: 3%;
    @media only screen and (max-width: 990px) and (min-width: 768px) {
        padding-right: 0;

    }

    img {
        width: 830px;
        @media only screen and (max-width: 990px) and (min-width: 768px) {
            width: 680px;
            margin-right: -1px;
        }
    }
`
const DevicesSection = () => {
    return(
        <DeviceInt>
            <DevicesContainerLast>
                <DevicesContent>
                    <h1>Смотрите на разных устройствах</h1>
                    <p>
                    Подключайте подписку FULL и смотрите любимые каналы на 5 устройствах, среди которых: телевизор, компьютер, планшет  или смартфон
                    </p>
                    <LastContentButton href=''>
                    Протестировать 7 дней бесплатно
                    </LastContentButton>
                </DevicesContent>
                <LastImgContent>
                    <img src={DevicesPortIcon} alt="" />
                </LastImgContent>
            </DevicesContainerLast>
        </DeviceInt>
    )
}

export default DevicesSection;