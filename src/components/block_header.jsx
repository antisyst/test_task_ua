import styled from 'styled-components';
import GiftIcon from '../icons/gift.svg'
import PlanetIcon from '../icons/planet.svg'
import DeviceIcon from '../icons/devices.svg'
import TVIcon from '../icons/tv.svg'

const BlockHeader = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 100;
    margin-top: 3vh;
    width: 100%;
    padding: 0 5%;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
       padding: 0 3%;
       justify-content: space-between;
    }
    @media only screen and (max-width: 768px) and (min-width: 375px) {
        padding: 0 1%;
        justify-content: space-between;
    }

    div {
        display: flex;
        flex-direction: column;
        width: 342px;
        align-items: flex-start;
        z-index: 100;
        margin: 20px;
        height: 260px;
        justify-content: flex-start;

        @media only screen and (max-width: 990px) and (min-width: 768px) {
            width: 20%;
            margin: 11px;
        }
        @media only screen and (max-width: 768px) and (min-width: 375px) {
            width: 17%;
           align-items: center;
           justify-content: center;
            margin: 7px;
        }

        img {
            width: 70px;
            height: 70px;
            margin-bottom: 14px;
            text-align: left;
           z-index: 100;

           @media only screen and (max-width: 990px) and (min-width: 768px) {
            width: 60px;
            height: 60px;
           }
        }
        h2 {
            color: rgba(255, 255, 255, 0.90);
            font-family: Inter;
            font-size: 24px;
            z-index: 100;
            text-align: left;

            @media only screen and (max-width: 768px) and (min-width: 375px) {
                text-align: center;
                font-size: 17px;
             } 

            font-style: normal;
            font-weight: 600;
            line-height: 24px; /* 100% */
        }
        p {
            opacity: 0.8;
            color: var(--var-color-white);
            margin-top: 20px;
            text-align: left;

            @media only screen and (max-width: 768px) and (min-width: 375px) {
               display: none;
            } 
        }
    }
`

const BlockContainer = () => {
    return(
        <BlockHeader>
            <div>
                <img src={GiftIcon} alt="" />
                <h2>Бесплатный тест</h2>
                <p>7 дней бесплатного тестового просмотра</p>
            </div>
            <div>
                <img src={DeviceIcon} alt="" />
                <h2>5 устройств = 1 подписка</h2>
                <p>Подключайте 5 устройствв одной подписке</p>
            </div>
            <div>
                <img src={TVIcon} alt="" />
                <h2>Архив трансляций</h2>
                <p>Смотрите 7 дней телеэфирав записи</p>
            </div>
            <div>
                <img src={PlanetIcon} alt="" />
                <h2>Без привязки к месту</h2>
                <p>Смотрите любимые фильмы и передачи в любой точке мира</p>
            </div>
        </BlockHeader>
    )
}

export default BlockContainer;