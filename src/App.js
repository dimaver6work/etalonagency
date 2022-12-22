import About from "./About";
import Accordion from "./Accordion";
import "./App.scss";
import "./fontello/css/fontello.css";
import Header from "./Header";
import Questions from "./Questions";
import Reviews from "./Reviews";
import Partners from "./Partners";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <button type="button" class="btn">
        <a href="#footer">Связаться</a>
      </button>
      <Header />
      <About />
      <Accordion />
      <Questions />
      <Reviews />
      <Partners />

      <Contact />
    </div>
  );
}

export default App;
