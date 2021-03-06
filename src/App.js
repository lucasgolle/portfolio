import "./reset.css";
import GlobalStyle from "./styles/global";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { About } from "./components/about";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Projects />
      <Main />
      <Footer />
    </>
  );
}

export default App;
