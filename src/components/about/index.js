import { Container } from "./styles";
import profilePicture from "../../assets/pictureProfile.jpeg";
import Hufflepuff from "../../assets/Hufflepuff.png"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const About = () => {
  const [inViewRef3, inView3] = useInView({
    threshold: 0.2,
  })

  const animation4 = useAnimation();

  useEffect(() => {
    if (inView3) {
      animation4.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.6,
        },
      });
    }
    if (!inView3) {
      animation4.start({ x: "-100vw" });
    }
  }, [inView3]);

  const [inViewRef4, inView4] = useInView({
    threshold: 0.2,
  })

  const animation5 = useAnimation();

  useEffect(() => {
    if (inView4) {
      animation5.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 3,
        },
      });
    }
    if (!inView4) {
      animation5.start({ opacity: 0 });
    }
  }, [inView4]);

  return (
    <Container ref={inViewRef3} id="sobremim">
      <motion.h1 animate={animation5}>Um pouco sobre mim</motion.h1>
      <div>
        <motion.img animate={animation5} src={profilePicture} alt="imagemPerfil" />
        <motion.p animate={animation5}>
          Olá, me chamo Lucas Golle. Sou estudante de Ciência da Computação e
          desenvolvimento web. Esse é meu portfolio, no qual pretendo atualizar
          e melhorar durante toda a minha carreira. Minha paixão pela
          programação vem desde de muito novo. Sempre trabalhei em áreas
          técnicas de empresas de comunicação (televisão e rádio) operando
          softwares. Minha meta agora além de operar e entender, é estar do
          outro lado, desenvolvendo essas ferramentas fantásticas.
        </motion.p>
      </div>
      <section>
        <motion.h2 animate={animation5}>Perfil</motion.h2>
        <motion.p animate={animation5}>Apaixonado por tecnologia, games e Harry Potter.</motion.p>
      </section>
      <section>
        <motion.h2 animate={animation5}>Casa de Hogwarts</motion.h2>
        <motion.p ref={inViewRef4} animate={animation5}>Lufa-Lufa</motion.p>
        <motion.img src={Hufflepuff} alt="imagem lufalufa" animate={animation4}/>
      </section>
    </Container>
  );
};
