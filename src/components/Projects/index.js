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

export const Projects = () => {

  const [inViewRef, inView] = useInView({
    threshold: 0.2,
  })
  const [inViewRef2, inView2] = useInView({
    threshold: 0.2,
  })

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
        </motion.div>
      </Container>
      <ContainerBack ref={inViewRef2} id="back">
        <h1>Meus projetos back-end</h1>
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
