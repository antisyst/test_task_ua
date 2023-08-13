import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import {Accordion, AccordionItem} from "@nextui-org/react";

const QuestionInt = styled.div `
    text-align: center;
    margin-top: 18vh;
    padding: 0 6%;
    margin-bottom: 17vh;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
      padding: 0 4%;
    }
`
const FirstContent = styled.h1 `
    color: var(--var-color-white);
    text-align: left;
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    opacity: 0.9;
    margin-bottom: 2vh;
    margin-left: 18px;

    @media only screen and (max-width: 990px)  {
        font-size: calc(10px + 4vmin)
    }
`
const QuestContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
const QuestItem = styled.div `
width: 46%;
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 20px;
justify-content: center;

@media only screen and (max-width: 990px) and (min-width: 768px) {
    width: 43%;

}



section {
    color: var(--var-color-white);
    text-align: left;
    opacity: 0.8;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    width: 100%;
    line-height: 150%;

    div {
    opacity: 0.8;
    width: 100%;
    padding-bottom: 30px;
    }
}

button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    padding: 30px 0;
    background: none;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 22px;
    height: auto;
    text-align: left;
    color: var(--var-color-white);

    span {
        margin-right: 8px;
    }

    svg {
        vertical-align: middle;
    }
}
`
const Questions = () => {

    const defaultContent =
    "Какая необходима скорость соединения для стабильного просмотра каналов? Какая необходима скорость соединения для стабильного просмотра каналов? ";


    return(
        <QuestionInt>
            <FirstContent>
               Популярные вопросы
            </FirstContent>
            <QuestContainer>
                <QuestItem>
                    <Accordion variant="light">
                        <AccordionItem key="1" aria-label="Как подключить подписку OTTCLUB или продлить ее?" title="Как подключить подписку OTTCLUB или продлить ее?" indicator={<FiChevronDown />}>
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Как смотреть одновременно на разных устройствах?" title="Как смотреть одновременно на разных устройствах?" indicator={<FiChevronDown />}>
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Какая скорость соединения необходима для просмотра каналов?" title="Какая скорость соединения необходима для просмотра каналов?" indicator={<FiChevronDown />}>
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>
                </QuestItem>
                <QuestItem>
                    <Accordion variant="light">
                            <AccordionItem key="1" aria-label="Как смотреть на телевизоре Samsung?" title="Как смотреть на телевизоре Samsung?" indicator={<FiChevronDown />}>
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Как посмотреть передачу, которая была в эфире ранее?" title="Как посмотреть передачу, которая была в эфире ранее?" indicator={<FiChevronDown />}>
                                {defaultContent}
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Как работает бесплатный тестовый период?" title="Как работает бесплатный тестовый период?" indicator={<FiChevronDown />}>
                                {defaultContent}
                            </AccordionItem>
                        </Accordion>
                </QuestItem>
            </QuestContainer>
        </QuestionInt>
    )
}

export default Questions;