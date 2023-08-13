import styled from 'styled-components';
import TgIcon from '../icons/tg.svg';
import WaIcon from '../icons/wa.svg';
import PayInfoToken from '../assets/payment.png';

const MainFooterBack = styled.footer `
    text-align: center;
    margin-top: 8vh;
    width: 100%;
    padding-top: 3vh;
    
`

const FooterInt = styled.div `
    text-align: center;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`
const FooterBorder = styled.div `
    height: 1.4px;
    width: 80%;
    text-align: center;
    background: #ffffff3f;
`
const FooterContainer = styled.div `
    display: flex;
    margin-top: 10vh;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-evenly;

        section {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 400px;


            a {
                color: var(--var-color-white);
                text-decoration: none;
                line-height: 170%;
                padding-right: 36%;
                opacity: 0.8;
                font-size: 18px;
                text-align: left;
                transition: all 0.3s ease-out;

                &:hover {
                    opacity: 1;
                }
            }
        }

        &:nth-child(2) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            h3 {
                color: var(--var-color-white);
                margin-bottom: 15px;
            }
            span {
                margin-top: 15px;
            }
            a {
                color: var(--var-color-white);
                text-decoration: none;
                line-height: 180%;
                opacity: 0.8;
                font-size: 17px;
                text-align: left;
                transition: all 0.3s ease-out;

                &:hover {
                    opacity: 1;
                }
            }
        }
    }
`
const CompanyLastInfo = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15vh;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: row;
        color: var(--var-color-white);

        p {
            margin-top: 10vh;
            &:nth-child(2) {
                margin-left: 10px;

                &::before {
                    content: "●";
                    margin-right: 8px;
                }
            }
        }
    }

    img {
        width: 400px;
        object-fit: contain;
        height: 70px;
    }
`

const Footer = () => {
    return(
        <MainFooterBack className='footer_main_background'>
        <FooterInt>
            <FooterBorder/>
            <div className='footer_background'>
                <FooterContainer>
                    <div>
                        <section>
                            <a href="#">О нас</a>
                            <a href="#">Пользовательское соглашение</a>
                            <a href="#">Политика конфиденциальности</a>
                            <a href="#">ТВ-Каналам</a>
                        </section>
                        <section>
                            <a href="#">Проверка скорости</a>
                            <a href="#">Правила оформления подписки</a>
                        </section>
                    </div>
                    <div>
                        <h3>Помощь</h3>
                        <a href="#">+442045772169 (Англия)</a>
                        <a href="#">+420255708953 (Европа)</a>
                        <a href="#">+97233751723 (Израиль)</a>
                        <a href="#">support@ottclub.cc</a>
                        <a className='chat_last_content'>Чат-поддержка</a>
                        <div className='fast_chat_section'>
                            <a href="#">
                                <img src={WaIcon} alt="" />
                            </a>
                            <a href="#">
                                <img src={TgIcon} alt="" />
                            </a>
                        </div>
                    </div>
                </FooterContainer>
                <CompanyLastInfo>
                    <div>
                    <img src={PayInfoToken} alt="" />
                    </div>
                    <div>
                        <p>2021-2022 COMPANY NAME</p>  <p>Company number 1221514</p>
                      
                    </div>
            </CompanyLastInfo>
            </div>
        </FooterInt>
        </MainFooterBack>
    )
}

export default Footer;