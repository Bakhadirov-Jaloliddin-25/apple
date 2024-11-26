import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";

import iPhonePro from "./assets/iPhonePro.jpg";
import iPhoneEn from "./assets/iPhoneSixteen.jpg";
import iPadAir from "./assets/iPad.jpg";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero
        title={"iPhone 16 Pro"}
        desc="Hello, Apple Intelligence"
        cl="#fff"
        url={iPhonePro}
        buttons={["Learn more", "Buy"]}
        btn_bg="blue"
      />
      <Hero
        title={"iPhone 16"}
        desc="Hello, Apple Intelligence"
        cl="#fff"
        url={iPhoneEn}
        buttons={["Learn more", "Buy"]}
        btn_bg="white"
      />
      <Hero
        title={"iPad Air"}
        desc="Two sizes. Faster chip. Does it all."
        cl="#000"
        url={iPadAir}
        buttons={["Learn more", "Buy"]}
        btn_bg="blue"
      />
      <Main />
      <Footer />
    </>
  );
}

export default App;
