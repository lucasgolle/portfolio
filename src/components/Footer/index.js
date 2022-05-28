import { Container } from "./styles";
import linkedinIcon from "../../assets/linkedinIcon.png";
import githubIcon from "../../assets/githubIcon.png";
import { useLanguege } from "../../Providers/language";

export const Footer = () => {

  const { portuguese } = useLanguege();

  return (
    <>
      <Container id="contact">
        <div>
          {portuguese ? (<h1>Contato</h1>) : (<h1>Contact</h1>)}
          <h2>lucas_rodrigues1@yahoo.com.br</h2>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/lucas-golle-7a6940226/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Linkedin</h3>
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-golle-7a6940226/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="Icone rede social linkedin" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/LucasGolle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Github</h3>
              </a>
              <a
                href="https://github.com/LucasGolle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="Icone rede social linkedin" />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};
