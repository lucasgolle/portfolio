import "./reset.css"
import GlobalStyle from "./styles/global"
import {Header} from "./components/Header"
import {Main} from "./components/Main"
import { Welcome } from "./components/Wellcome";

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Welcome/>
    <Main/>
    </>
  );
}

export default App;
