import { Container } from "./styles";
import linkedinIcon from "../../assets/linkedinIcon.png";
import githubIcon from "../../assets/githubIcon.png";

export const Footer = () => {
  return (
    <>
      <Container>
        <div>
          <h1>Contato</h1>
          <h2>lucas_rodrigues1@yahoo.com.br</h2>
        </div>
        <nav>
          <ul>
            <li>
              Linkedin{" "}
              <img src={linkedinIcon} alt="Icone rede social linkedin" />
            </li>
            <li>
              Github
              <img src={githubIcon} alt="Icone rede social linkedin" />
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};
