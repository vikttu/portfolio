import "../stylesheets/App.css";
import Logo from "./Logo.js";
import ButtonWrapper from "./ButtonWrapper.js";
import ButtonAndImageWrapper from "./ButtonAndImageWrapper.js";
import ProfilePicture from "./ProfilePicture.js";
import About from "./About.js";
import Footer from "./Footer.js";


function App() {
  return (
    <div className="App">
      <Logo />
      <ButtonWrapper />
      <ProfilePicture />
      <ButtonAndImageWrapper />
      <About />
      <Footer />
    </div>
  );
}

export default App;
