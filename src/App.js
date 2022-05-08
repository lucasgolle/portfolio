import "./reset.css"
import GlobalStyle from "./styles/global"
import {Header} from "./components/Header"
import {Main} from "./components/Main"

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    </>
  );
}

export default App;
