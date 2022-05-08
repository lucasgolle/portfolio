import { Container, Back, TitulosHabilidades, HabilidadesBack, HabilidadesFront } from "./styles";
import SpinnerIcon from "@rsuite/icons/legacy/Spinner";

export const Main = () => {
  return (
    <>
    {/* <GlobalContainer> */}
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
          <SpinnerIcon pulse style={{ fontSize: "1em" }} />
          </div>
          <div>
            <h3>JavaScript</h3>
          <SpinnerIcon pulse style={{ fontSize: "1em" }} />
          </div>
          <div>
            <h3>CSS</h3>
          <SpinnerIcon pulse style={{ fontSize: "1em" }} />
          </div>
          <div>
            <h3>GIT</h3>
          <SpinnerIcon pulse style={{ fontSize: "1em" }} />
          </div>
          <div>
            <h3>TypeScript</h3>
          <SpinnerIcon pulse style={{ fontSize: "1em" }} />
          </div>
        </HabilidadesFront>
        </Container>
      {/* </GlobalContainer> */}
    </>
  );
};
