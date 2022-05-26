import {
  Container,
  AnimationContainer,
  AnimationContainerRight,
} from "./styles";
import doIt from "../../assets/YouCut_20220508_052856504_AdobeCreativeCloudExpress.gif";
import nuKenzie from "../../assets/gifnukenzie.gif";
import kenzieHub from "../../assets/gifkenziehub.gif";
import hamburgueria from "../../assets/hamburgueria.gif";
import backProject from "../../assets/image.jpeg"

export const Projects = () => {
  return (
    <>
    <Container id="front">
      <h1>Meus projetos front-end</h1>
      <ul>
        <AnimationContainer>
          <h3>Do It</h3>
          <li>
            <img src={doIt} alt="projeto doIt" />
          </li>
          <h3>KenzieHub</h3>
          <li>
            <img src={kenzieHub} alt="projeto doIt" />
          </li>
        </AnimationContainer>
        <AnimationContainerRight>
          <h3>NuKenzie</h3>
          <li>
            <img src={nuKenzie} alt="projeto nuKenzie" />
          </li>
          <h3>Hamburgueria</h3>
          <li>
            <img src={hamburgueria} alt="projeto doIt" />
          </li>
        </AnimationContainerRight>
      </ul>
    </Container>
    <Container id="back">
      <h1>Meus projetos back-end</h1>
      <ul>
        <AnimationContainer>
          <li>
            <img src={backProject} alt="projeto doIt" />
          </li>
          <li>
            <img src={backProject} alt="projeto doIt" />
          </li>
        </AnimationContainer>
        <AnimationContainerRight>
          <li>
            <img src={backProject} alt="projeto nuKenzie" />
          </li>
          <li>
            <img src={backProject} alt="projeto doIt" />
          </li>
        </AnimationContainerRight>
      </ul>
    </Container>
    </>
  );
};
