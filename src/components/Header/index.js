import { Container, MenuBar, ModalHeader } from "./styles";
import Brazil from "../../assets/brazil-svgrepo-com.svg";
import EUA from "../../assets/united-states-of-america-svgrepo-com.svg";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import MENU from "../../assets/menu(1).svg";
import { useLanguege } from "../../Providers/language";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const changeState = () => {
    setShowModal(!showModal);
  };

  const { portuguese, changePortuguese, changetoEnglish } = useLanguege();

  return (
    <>
      <Container>
      <Link
                  to="sobremim"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                 <h1>&lt; Lucas Golle Profile /&gt;</h1>
                </Link>    
        {!showModal ? (
          <MenuBar onClick={changeState} src={MENU} alt="" />
        ) : (
          <span onClick={changeState}>X</span>
        )}
        <nav>
          <ul>
            <div>
              <li>
                <Link
                  to="back"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Back-end
                </Link>
              </li>
              <li>
                <Link
                  to="front"
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={500}
                >
                  Front-end
                </Link>
              </li>
              <li>
                {portuguese ? (
                  <Link
                    to="skiils"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                  >
                    Tecnologias
                  </Link>
                ) : (
                  <Link
                    to="skiils"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                  >
                    My skiils
                  </Link>
                )}
              </li>
              <li>
                {portuguese ? (
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Contato
                  </Link>
                ) : (
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Contact
                  </Link>
                )}
              </li>
            </div>
          </ul>
        </nav>
        <div>
          <img onClick={changePortuguese} src={Brazil} alt="bandeiraBR" />
          <img onClick={changetoEnglish} src={EUA} alt="bandeiraEUA" />
        </div>
      </Container>
      {showModal && (
        <ModalHeader>
          <ul>
            <li>
              <Link
                to="back"
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
                onClick={changeState}
              >
                Back-end
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="front"
                spy={true}
                smooth={true}
                offset={-25}
                duration={500}
                onClick={changeState}
              >
                Front-end
              </Link>
            </li>
            <hr />
            <li>
              {portuguese ? (
                <Link
                  to="skiils"
                  spy={true}
                  smooth={true}
                  offset={-280}
                  duration={500}
                  onClick={changeState}
                >
                  Tecnologias
                </Link>
              ) : (
                <Link
                  to="skiils"
                  spy={true}
                  smooth={true}
                  offset={-160}
                  duration={500}
                  onClick={changeState}
                >
                  My skiils
                </Link>
              )}
            </li>
            <hr />
            <li>
              {portuguese ? (
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}
                  onClick={changeState}
                >
                  Contato
                </Link>
              ) : (
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}
                  onClick={changeState}
                >
                  Contact
                </Link>
              )}
            </li>
            <hr />
            <div>
              <img
                onClick={() => {
                  changePortuguese();
                  changeState();
                }}
                src={Brazil}
                alt="bandeiraBR"
              />
              <img
                onClick={() => {
                  changetoEnglish();
                  changeState();
                }}
                src={EUA}
                alt="bandeiraEUA"
              />
            </div>
          </ul>
        </ModalHeader>
      )}
    </>
  );
};
