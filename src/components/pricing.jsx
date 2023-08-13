import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const PricingSection = styled.div `
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 11vh;
    align-items: center;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
        padding: 0 5%;
        flex-wrap: wrap;
    }

    @media only screen and (max-width: 768px) and (min-width: 375px) {
        padding: 0 3%;
        flex-wrap: wrap;
    }
`

const PriceToken = styled.div `
    text-align: center;
    width: 60%;
    margin-top: 30px;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
        margin-top: 20%;
        width: 60%;
    }

    h1 {
        color: var(--var-color-main);
        font-weight: 600;
        font-size: 67px;
        line-height: 67px;

        @media only screen and (max-width: 990px) and (min-width: 768px) {
            font-size: 53px;
        }

        span {
            color: var(--var-color-white);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            text-transform: uppercase;
        }
    }
    p {
        text-align: center;
        color: var(--var-color-white);
        opacity: 0.8;

        @media only screen and (max-width: 990px) and (min-width: 768px) {
            font-size: 15px;
        }
    }
`
const SpecsToken = styled.div `
    text-align: center;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
       margin-top: 17%;
       padding-top: 20px;
    }

p {
    color: #FFF;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 16px;
    text-align: left;
    font-size: 18px;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
        font-size: 16px;
        margin: 6px;
    }
}
    svg {
        color: #EEC63B;
        vertical-align: middle;
        margin-right: 16px;
        font-size: 20px;
    }
`
const SubsToken = styled.div `
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
        margin-top: -20vw;
    }

    input {
        padding: 15.5px;
        border-radius: 5px 0px 0px 5px;
        border: 1px solid #D0D0D1;
        font-size: 17.5px;
        background: #FFF;
        outline: none;
        width: 310px;

        @media only screen and (max-width: 990px) and (min-width: 768px) {
            width: 240px;
            font-size: 16px;
        }
    }
    button {
        padding: 16.2px 10px;
        width: 200px;
        border-radius: 0px 5px 5px 0px;
        border: none;
        font-size: 17.5px;
        color: var(--var-color-white);
        cursor: pointer;
        font-weight: 500;
        background: var(--var-color-main);

        @media only screen and (max-width: 990px) and (min-width: 768px) {
            width: 170px;
            font-size: 16px;
        }
    }

`

const Pricing = () => {
    return(
        <PricingSection>
           <div className='svg_background'>
                        <PriceToken>
                            <h1>1€ <span>/ МЕСЯЦ</span></h1>
                            <p>Покупая подписку более, чем на 6 месяцев</p>
                        </PriceToken>
                        <SpecsToken>
                          <p><FaCheck/> Более 270 каналов </p>
                          <p><FaCheck/> 127 FullHD каналов </p>
                          <p><FaCheck/> Режим Ultra TV Sport </p>
                          <p><FaCheck/> Архив каналов </p>
                          <p><FaCheck/> 5 устройств </p>
                        </SpecsToken>
                        <SubsToken>
                            <input type="text" placeholder='Email' />
                            <button>Подключить тариф</button>
                        </SubsToken>
           </div>
        </PricingSection>
    )
}

export default Pricing;