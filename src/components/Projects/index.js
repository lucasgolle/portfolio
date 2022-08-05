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
import { RiGithubFill } from "react-icons/ri";

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
      <ContainerBack ref={inViewRef2} id="back">
        {portuguese ? (
          <h1>Meus projetos back-end</h1>
        ) : (
          <h1>My back end projects</h1>
        )}
        <ul>
          <AnimationContainer>
            <motion.li animate={animation}>
              <h3>Solid Control</h3>
              <RiGithubFill src={RiGithubFill} alt="link github Do It" />
              {portuguese ? (
                <p>
                  Projeto de conclusão do módulo de beckend desenvolvido na
                  Kenzie academy Brasil. Sistema de gerenciamento de estoque,
                  utilizando NodeJS, Postgres entre outras tecnologias.
                </p>
              ) : (
                <p>
                  Project to complete the beckend module developed at Kenzie
                  academy Brasil. Inventory management system, using NodeJS,
                  Postgres and other technologies.
                </p>
              )}
            </motion.li>
            <motion.li animate={animation}>
              <h3>SQLanches</h3>
              <RiGithubFill src={RiGithubFill} alt="link github Do It" />
              {portuguese ? (
                <p>
                  Aprendendo a usar e manipular banco de dados em backend nessa
                  entrega com tabelas relacionadas utilizando SQL. CRUD também
                  foi feito e os dados são criados e editados salvando no banco
                  de dados.
                </p>
              ) : (
                <p>
                  Learning to use and manipulate database in backend in this
                  project using SQL. CRUD was done and the data is created and
                  edited by saving in the database. Use Node Express SQL.
                </p>
              )}
            </motion.li>
          </AnimationContainer>
          <AnimationContainerRight>
            <motion.li animate={animation}>
              <h3>CRUD Express</h3>
              <RiGithubFill src={RiGithubFill} alt="link github Do It" />
              {portuguese ? (
                <p>
                  Create, Read, Update, Delete. Todo desenvolvedor backend deve
                  saber construir uma aplicação com essas 4 funcionalidades.
                  Nesse projeto desenvolvo esse conceito.
                </p>
              ) : (
                <p>
                  Project developed for task organization. I used the Axios
                  library for API consumption. styled components for styling.
                </p>
              )}
            </motion.li>
            <motion.li animate={animation}>
              <h3>Comandos SQL</h3>
              <RiGithubFill src={RiGithubFill} alt="link github Do It" />
              {portuguese ? (
                <p>
                  Além de saber fazer CRUD, um desenvolvedor tem que
                  saber manipular banco de dados. Pretendo salvar os
                  principais comandos de pesquisa e manipulação de banco de
                  dados ao longo da minha carreira. 
                </p>
              ) : (
                <p>
                  In addition to knowing how to do CRUD, a beckend developer has
                  to know how to query, manipulate database. The purpose of this
                  repository is to save the main search commands and database
                  manipulation. That I intend to update throughout my career.
                </p>
              )}
            </motion.li>
          </AnimationContainerRight>
        </ul>
      </ContainerBack>
      <Container ref={inViewRef} id="front">
        <motion.div animate={animation2}>
          {portuguese ? (
            <h1>Meus projetos front-end</h1>
          ) : (
            <h1>My front end projects</h1>
          )}
          <ul>
            <AnimationContainer>
              <div>
                <h3>Do It</h3>
                <a
                  href="https://github.com/lucasgolle/do.it2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiGithubFill src={RiGithubFill} alt="link github Do It" />
                </a>
              </div>
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
              <div>
                <h3>KenzieHub</h3>
                <a
                  href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-LucasGolle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiGithubFill
                    src={RiGithubFill}
                    alt="link github KenzieHub"
                  />
                </a>
              </div>
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
              <div>
                <h3>NuKenzie</h3>
                <a
                  href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-LucasGolle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiGithubFill src={RiGithubFill} alt="link github NuKenzie" />
                </a>
              </div>
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
              <div>
                <h3>Hamburgueria</h3>
                <a
                  href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-LucasGolle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiGithubFill
                    src={RiGithubFill}
                    alt="link github Hamburgueria"
                  />
                </a>
              </div>
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
    </>
  );
};
