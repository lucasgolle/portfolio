import { Container, PictureProfiles } from "./styles";
import profilePicture from "../../assets/pictureProfile.jpeg";
import Hufflepuff from "../../assets/Hufflepuff.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useLanguege } from "../../Providers/language";

export const About = () => {
  const { portuguese } = useLanguege();

  const [inViewRef3, inView3] = useInView({
    threshold: 0.2,
  });

  const animation4 = useAnimation();

  useEffect(() => {
    if (inView3) {
      animation4.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 6,
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
  });

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Container ref={inViewRef3} id="sobremim">
        {portuguese ? (
          <motion.h1 animate={animation5}>Um pouco sobre mim</motion.h1>
        ) : (
          <motion.h1 animate={animation5}>A little about myself</motion.h1>
        )}
        <div>
          <PictureProfiles
            animate={animation5}
            src={profilePicture}
            alt="imagemPerfil"
          />
          {portuguese ? (
            <motion.p animate={animation5}>
              Olá, me chamo Lucas Golle. Sou estudante de Ciência da Computação
              e desenvolvimento web. Esse é meu portfolio, no qual pretendo
              atualizar e melhorar durante toda a minha carreira. Minha paixão
              pela programação vem desde de muito novo. Sempre trabalhei em
              áreas técnicas de empresas de comunicação (televisão e rádio)
              operando softwares. Minha meta agora além de operar e entender, é
              estar do outro lado, desenvolvendo essas ferramentas fantásticas.
            </motion.p>
          ) : (
            <motion.p animate={animation5}>
              Hi, my name is Lucas Golle. I'm a student of computer science and
              web development. This is my portfolio, which I intend to update
              and improve throughout my career. My passion for programming since
              I was very young. I have always worked in technical areas of
              communication companies (television and radio) operating software.
              My goal is to be on the other side, building these fantastic
              tools.
            </motion.p>
          )}
        </div>
        <section>
          {portuguese ? (
            <motion.h2 animate={animation5}>Perfil</motion.h2>
          ) : (
            <motion.h2 animate={animation5}>Profile</motion.h2>
          )}
          {portuguese ? (
            <motion.p animate={animation5}>
              Apaixonado por tecnologia, games e Harry Potter.
            </motion.p>
          ) : (
            <motion.p animate={animation5}>
              Passionate about technology, games and Harry Potter.
            </motion.p>
          )}
        </section>
        <section>
          {portuguese ? (
            <motion.h2 animate={animation5}>Casa de Hogwarts</motion.h2>
          ) : (
            <motion.h2 animate={animation5}>Hogwarts House</motion.h2>
          )}
          {portuguese ? (
            <motion.p ref={inViewRef4} animate={animation5}>
              Lufa-Lufa
            </motion.p>
          ) : (
            <motion.p ref={inViewRef4} animate={animation5}>
              Hufflepuff
            </motion.p>
          )}
          <motion.img
            src={Hufflepuff}
            alt="imagem lufalufa"
            animate={animation4}
          />
        </section>
      </Container>
    </motion.div>
  );
};
