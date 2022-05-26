import { Container, MenuBar, ModalHeader } from "./styles";
import Brazil from "../../assets/brazil-svgrepo-com.svg";
import EUA from "../../assets/united-states-of-america-svgrepo-com.svg";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import MENU from "../../assets/menu(1).svg";

export const Header = () => {
  const [language, setlLanguage] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const changeState = () =>{
    setShowModal(!showModal)
  }

  return (
    <>
      <Container>
        <h1>&lt; Lucas Golle Profile /&gt;</h1>
        {!showModal ? (<MenuBar onClick={changeState} src={MENU} alt="" />) : (<span onClick={changeState}>X</span>)}
        <nav>
          <ul>
            <div>
              <li> 
                <Link
                  to="front"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                >
                  Front-end
                </Link>
              </li>
              <li>
                <Link
                  to="back"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                >
                  Back-end
                </Link>
              </li>
              <li>
                <Link
                  to="sobremim"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Sobre mim
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        <div>
          <img src={Brazil} alt="bandeiraBR" />
          <img src={EUA} alt="bandeiraEUA" />
        </div>
      </Container>
      {showModal && <ModalHeader>
        <ul>
          <li>Front-end</li>
          <hr />
          <li>Back-end</li>
          <hr />
          <li>Sobre mim</li>
          <hr />
          <div>
          <img src={Brazil} alt="bandeiraBR" />
          <img src={EUA} alt="bandeiraEUA" />
          </div>
        </ul>
      </ModalHeader>}
    </>
  );
};
