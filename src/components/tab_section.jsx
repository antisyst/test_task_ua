import React, { useState } from 'react';
import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

const Container = styled.div `
    width: 100%;
    text-align: left;
`
const TabsInt = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
        overflow-x: auto;
    }
`
const TabIntButton = styled.button `
border-radius: 5px;
border: 2px solid rgba(255, 255, 255, 0.80);
padding: 16px 24px;
background: none;
height: 55px;
outline: none;
font-weight: 400;
cursor: pointer;
margin: 0 8px;
transition: all 0.3s ease-out;
filter: invert(0);
color: var(--var-color-white);
font-size: 17px;

@media only screen and (max-width: 990px) and (min-width: 768px) {
font-size: 16px;
padding: 12px 18px;
}

    &:hover {
        border: 2px solid var(--var-color-main);
    }

    &:disabled {
        background: var(--var-color-main);
        border: 2px solid var(--var-color-main);
        border: none;
        color: white;
    }
`
const ChannelsContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    flex-wrap: wrap;
    margin-top: 4vh;
    gap: 30px;

    @media only screen and (max-width: 990px) and (min-width: 768px)  {
    gap: 14px;
    }
`
const ChannelItem = styled.div `
    display: flex;
    border-radius: 8px;
    border: 1px solid #C6C6C8;
    justify-content: center;
    z-index: 1000;
    padding: 35px 20px;
    width: 18%;
    height: 150px;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
    width: 18%;
    height: 140px;
    }

    img {
        width: 100%;
        max-width: 120px;
        object-filter: contain;

        @media only screen and (max-width: 990px) and (min-width: 768px) {
            width: 90%;
            max-width: 90px;
            object-filter: contain;
        }
    }

    &:nth-child(1) {
        background: linear-gradient(180deg, #FF6961 0%, #D70015 100%);
    }

    &:nth-child(2) {
        background: linear-gradient(180deg, #409CFF 0%, #0040DD 100%);
    }

    &:nth-child(3) {
        background: linear-gradient(180deg, #30DB5B 0%, #248A3D 100%);
    }

    &:nth-child(4) {
        background: linear-gradient(180deg, #7D7AFF 0%, #3634A3 100%);
    }

    &:nth-child(5) {
        background: linear-gradient(180deg, #FFD426 0%, #B25000 100%);
    }

    &:nth-child(6) {
        background: linear-gradient(180deg, #409CFF 0%, #0040DD 100%);
    }

    &:nth-child(7) {
        background: linear-gradient(180deg, #30DB5B 0%, #248A3D 100%);
    }

    &:nth-child(8) {
        background: linear-gradient(180deg, #7D7AFF 0%, #3634A3 100%);
    }

    &:nth-child(9) {
        background: linear-gradient(180deg, #30DB5B 0%, #248A3D 100%);
    }

    &:nth-child(10) {
        background: linear-gradient(180deg, #7D7AFF 0%, #3634A3 100%);
    }
`
const ShowActionButton = styled.button `
    background: none;
    border: none;
    outline: none;
    text-transform: uppercase;
    font-weight: 500;
    z-index: 1000;
    text-align: right;
    cursor: pointer;
    color: var(--var-color-white);
    margin-top: 20px;
    transition: all 0.3s ease-out;
    font-size: 17px;
    margin-right: 20px;

    svg {
        color: var(--var-color-main);
        font-size: 24px;
        margin-top: -4px;
        transition: all 0.3s ease-out;
        vertical-align: middle;
        margin-left: 5px;
    }
`
const ShowActionSection = styled.div `
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-end;
`
const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Популярные',
            image: [
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/1plus1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/zoom-hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ua_1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/film_hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/tet.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/inter.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/h_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ict.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/m_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/2plus2.png"
            ]
        },
        {
            id: 2,
            tabTitle: 'Национальные',
            image: [
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/1plus1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/zoom-hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ua_1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/film_hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/tet.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/inter.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/h_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ict.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/m_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/2plus2.png"
            ]
        },
        {
            id: 3,
            tabTitle: 'Познавательные',
            image: [
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/1plus1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/zoom-hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ua_1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/film_hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/tet.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/inter.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/h_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ict.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/m_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/2plus2.png"
            ]
        },
        {
            id: 4,
            tabTitle: 'Кино',
            image: [
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/1plus1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/zoom-hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ua_1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/film_hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/tet.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/inter.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/h_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ict.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/m_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/2plus2.png"
            ]
            
        },
        {
            id: 5,
            tabTitle: 'Спорт',
            image: [
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/1plus1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/zoom-hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ua_1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/film_hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/tet.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/inter.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/h_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ict.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/m_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/2plus2.png"
            ]
        },
        {
            id: 6,
            tabTitle: 'Детские',
            image: [
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/1plus1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/zoom-hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ua_1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/film_hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/tet.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/inter.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/h_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ict.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/m_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/2plus2.png"
            ]
        },
        {
            id: 7,
            tabTitle: 'Музыкальные',
            image: [
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/1plus1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/zoom-hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ua_1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/film_hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/tet.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/inter.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/h_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ict.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/m_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/2plus2.png"
            ]
        },
        {
            id: 8,
            tabTitle: 'Новостные',
            image: [
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/1plus1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/zoom-hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ua_1.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/film_hd.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/tet.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/inter.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/h_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/ict.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/m_ch.png",
                "https://raw.githubusercontent.com/antisyst/kleap-task/main/public/2plus2.png"
            ]
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    const [isRotated, setIsRotated] = useState(false);

    const handleButtonClick = () => {
      setIsRotated(!isRotated);
    };

    return (
        <Container>
            <TabsInt>
                {tabs.map((tab, i) =>
                    <TabIntButton key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</TabIntButton>
                )}
            </TabsInt>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` &&
                         <ChannelsContainer>
                            <ChannelItem>
                              <img src={tab.image[0]} alt="" />
                            </ChannelItem>
                            <ChannelItem>
                              <img src={tab.image[1]} alt="" />
                            </ChannelItem>
                            <ChannelItem>
                              <img src={tab.image[2]} alt="" />
                            </ChannelItem>
                            <ChannelItem>
                              <img src={tab.image[3]} alt="" />
                            </ChannelItem>
                            <ChannelItem>
                              <img src={tab.image[4]} alt="" />
                            </ChannelItem>
                            <ChannelItem>
                              <img src={tab.image[5]} alt="" />
                            </ChannelItem>
                            <ChannelItem>
                              <img src={tab.image[6]} alt="" />
                            </ChannelItem>
                            <ChannelItem>
                              <img src={tab.image[7]} alt="" />
                            </ChannelItem>
                            <ChannelItem>
                              <img src={tab.image[8]} alt="" />
                            </ChannelItem>
                            <ChannelItem>
                              <img src={tab.image[9]} alt="" />
                            </ChannelItem>
                         </ChannelsContainer>
                         }
                    </div>
                )}
                <ShowActionSection>
                  <ShowActionButton onClick={handleButtonClick}>Показать все <FaAngleDown  className={`rotate-icon ${isRotated ? 'rotated' : ''}`}/></ShowActionButton>
                </ShowActionSection>
            </div>
        </Container>
    );
}

export default Tabs;