import Navigation from "./components/navigation"
import Header from "./components/header";
import BlockContainer from "./components/block_header";
import Pricing from "./components/pricing";
import Channels from "./components/channels";
import styled from 'styled-components';
import DevicesSection from "./components/devices";
import Questions from "./components/questions";
import ProcessSection from "./components/process";
import Footer from "./components/footer";

const MainPageAction = styled.main `
  text-align: center;
  overflow: hidden;
`

function App() {

  return (
    <MainPageAction>
     <Navigation/>
     <Header/>
     <BlockContainer/>
     <Pricing/>
     <Channels/>
     <DevicesSection/>
     <ProcessSection/>
     <Questions/>
     <Footer/>
    </MainPageAction>
  )
}

export default App
