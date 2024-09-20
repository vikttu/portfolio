import "../stylesheets/App.css";
import Logo from "./Logo.js";
import ButtonWrapper from "./ButtonWrapper.js";
import ProfilePicture from "./ProfilePicture.js"


function App() {
  return (
    <div className="App">
      <Logo />
      <ButtonWrapper />
      <ProfilePicture />
      <ButtonWrapper />
      <footer></footer>
    </div>
  );
}

export default App;
