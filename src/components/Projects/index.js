import {
  Container,
  AnimationContainer,
  AnimationContainerRight,
  ContainerBack,
} from "./styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import doIt from "../../assets/YouCut_20220508_052856504_AdobeCreativeCloudExpress.gif";
import nuKenzie from "../../assets/gifnukenzie.gif";
import kenzieHub from "../../assets/gifkenziehub.gif";
import hamburgueria from "../../assets/hamburgueria.gif";
import backProject from "../../assets/image.jpeg";
import { useLanguege } from "../../Providers/language";

export const Projects = () => {
  const { portuguese } = useLanguege();

  const [inViewRef, inView] = useInView({
    threshold: 0.2,
  });
  const [inViewRef2, inView2] = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation2.start({ x: "-3000px" });
    }
  }, [inView]);

  useEffect(() => {
    if (inView2) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.2,
        },
      });
    }
    if (!inView2) {
      animation.start({ x: "-3000px" });
    }
  }, [inView2]);

  return (
    <>
      <Container ref={inViewRef} id="front">
        <motion.div animate={animation2}>
          {portuguese ? (
            <h1>Meus projetos front-end</h1>
          ) : (
            <h1>My front end projects</h1>
          )}
          <ul>
            <AnimationContainer>
              <h3>Do It</h3>
              <li>
                <a
                  href="https://do-it2.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={doIt} alt="projeto doIt" />
                </a>
                {portuguese ? (
                  <p>
                    Projeto desenvolvido para organização de tarefas. Utilizei a
                    biblioteca Axios para o consumo da API. Styled components
                    para estilização.
                  </p>
                ) : (
                  <p>
                    Project developed for task organization. I used the Axios
                    library for API consumption. styled components for styling.
                  </p>
                )}
              </li>
              <h3>KenzieHub</h3>
              <li>
                <a
                  href="https://react-entrega-s2-kenzie-hub-lucasgolle.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kenzieHub} alt="projeto doIt" />
                </a>
                {portuguese ? (
                  <p>
                    Projeto desenvolvido para criação de portfólio. Utilizei a
                    biblioteca Axios para o consumo da API. React Hook Form,
                    Styled components para estilização entre outras bibliotecas.
                  </p>
                ) : (
                  <p>
                    Project developed to create a portfolio. I used the Axios
                    library for API consumption. React Hook Form, Styled
                    components for styling among other libraries.
                  </p>
                )}
              </li>
            </AnimationContainer>
            <AnimationContainerRight>
              <h3>NuKenzie</h3>
              <li>
                <a
                  href="https://react-entrega-s1-nu-kenzie-lucasgolle.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={nuKenzie} alt="projeto nuKenzie" />
                </a>
                {portuguese ? (
                  <p>
                    Projeto desenvolvido para organização financeira. Entrada e
                    saída de despesas. Utilizei renderização condicional de
                    states do React.
                  </p>
                ) : (
                  <p>
                    Project developed for financial organization. Profit and
                    expenses. I used conditional rendering of React states.
                  </p>
                )}
              </li>

              <h3>Hamburgueria</h3>
              <li>
                <a
                  href="https://react-entrega-s1-nu-kenzie-lucasgolle.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={hamburgueria} alt="projeto doIt" />
                </a>
                {portuguese ? (
                  <p>
                    Projeto site Hamburgueria. Foi o ínicio dos estudos do React
                    e nessa época já deu pra perceber o quão poderosa é essa
                    biblioteca.
                  </p>
                ) : (
                  <p>
                    Hamburger website design. It was the beginning of React
                    studies and at that time you could already see how powerful
                    this library.
                  </p>
                )}
              </li>
            </AnimationContainerRight>
          </ul>
        </motion.div>
      </Container>
      <ContainerBack ref={inViewRef2} id="back">
        {portuguese ? (
          <h1>Meus projetos back-end</h1>
        ) : (
          <h1>My back end projects</h1>
        )}
        <ul>
          <AnimationContainer>
            <motion.li animate={animation}>
              <img src={backProject} alt="projeto doIt" />
            </motion.li>
            <motion.li animate={animation}>
              <img src={backProject} alt="projeto doIt" />
            </motion.li>
          </AnimationContainer>
          <AnimationContainerRight>
            <motion.li animate={animation}>
              <img src={backProject} alt="projeto nuKenzie" />
            </motion.li>
            <motion.li animate={animation}>
              <img src={backProject} alt="projeto doIt" />
            </motion.li>
          </AnimationContainerRight>
        </ul>
      </ContainerBack>
    </>
  );
};
