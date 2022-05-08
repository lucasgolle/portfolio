import { Container, Back, TitulosHabilidades, HabilidadesBack, HabilidadesFront } from "./styles";
import SpinnerIcon from "@rsuite/icons/legacy/Spinner";
import JS from "../../assets/jsicon.png"
import RC from "../../assets/reacticon.png"
import CSS from "../../assets/cssicon.png"
import TYPE from "../../assets/typeicon.png"

export const Main = () => {
  return (
    <>
      <Container>
        <TitulosHabilidades>
          <h3>Front-End</h3>
          <Back>Back-End</Back>
        </TitulosHabilidades>
        <HabilidadesBack>
        <div>
            <h3>Aprendendo Python</h3>
          <SpinnerIcon pulse style={{ fontSize: "1em" }} />
          </div>
          <div>
            <h3>Aprendendo MongoDB</h3>
          <SpinnerIcon pulse style={{ fontSize: "1em" }} />
          </div>
          <div>
            <h3>Aprendendo SQL</h3>
          <SpinnerIcon pulse style={{ fontSize: "1em" }} />
          </div>
          <div>
            <h3>Aprendendo APIs RESTful</h3>
          <SpinnerIcon pulse style={{ fontSize: "1em" }} />
          </div>
        </HabilidadesBack>
        <HabilidadesFront>
        <div>
            <h3>React</h3>
            <img src={RC} alt="ícone javascript" style={{width: "25px"}}/>
          </div>
          <div>
            <h3>JavaScript</h3>
          <img src={JS} alt="ícone javascript" style={{width: "30px"}}/>
          </div>
          <div>
            <h3>CSS</h3>
            <img src={CSS} alt="ícone javascript" style={{width: "30px"}}/>
          </div>
          <div>
            <h3>Context API</h3>
          </div>
          <div>
            <h3>TypeScript</h3>
            <img src={TYPE} alt="ícone javascript" style={{width: "25px"}}/>
          </div>
        </HabilidadesFront>
        </Container>
    </>
  );
};
