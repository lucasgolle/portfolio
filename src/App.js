import "./reset.css"
import GlobalStyle from "./styles/global"
import {Header} from "./components/Header"
import {Main} from "./components/Main"
import { Welcome } from "./components/Wellcome";
import { Projects } from "./components/Projects"

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Welcome/>
    <Main/>
    <Projects/>
    </>
  );
}

export default App;
