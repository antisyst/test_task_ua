import styled from 'styled-components';
import SmartTvIcon from '../icons/smart.svg';
import IosIcon from '../icons/ios.svg';
import AndroidIcon from '../icons/android.svg';
import SamsungIcon from '../icons/samsung.svg';

const ProcessLastInt = styled.div `
    margin-top: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    filter: brightness(1.2);
    gap: 20px;
    padding: 0 5%;

    @media only screen and (max-width: 990px) and (min-width: 768px) {
        gap: 20px;
        padding: 0 3%;
    }
`
const ProcessItem = styled.div `
    width: 24%;
    text-align: center;

    img {
        text-align: center;
        max-width: 100%;

        @media only screen and (max-width: 990px) and (min-width: 768px) {
        max-width: 80%;
        }
    }
`

const ProcessSection = () => {
    return(
        <ProcessLastInt>
            <ProcessItem>
                <img src={SmartTvIcon} alt="" />
            </ProcessItem>
            <ProcessItem>
                <img src={IosIcon} alt="" />
            </ProcessItem>
            <ProcessItem>
                <img src={AndroidIcon} alt="" />
            </ProcessItem>
            <ProcessItem>
                <img src={SamsungIcon} alt="" />
            </ProcessItem>
        </ProcessLastInt>
    )
}

export default ProcessSection;