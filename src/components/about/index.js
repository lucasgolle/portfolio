import { Container } from "./styles";
import profilePicture from "../../assets/pictureProfile.jpeg";
import Hufflepuff from "../../assets/Hufflepuff.png"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const About = () => {
  const [inViewRef, inView] = useInView({
    threshold: 0.2,
  })

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.6,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <Container id="sobremim">
      <h1>Um pouco sobre mim</h1>
      <div>
        <img src={profilePicture} alt="imagemPerfil" />
        <p>
          Olá, me chamo Lucas Golle. Sou estudante de Ciência da Computação e
          desenvolvimento web. Esse é meu portfolio, no qual pretendo atualizar
          e melhorar durante toda a minha carreira. Minha paixão pela
          programação vem desde de muito novo. Sempre trabalhei em áreas
          técnicas de empresas de comunicação (televisão e rádio) operando
          softwares. Minha meta agora além de operar e entender, é estar do
          outro lado, desenvolvendo essas ferramentas fantásticas.
        </p>
      </div>
      <section>
        <h2>Perfil</h2>
        <p>Apaixonado por tecnologia, games e Harry Potter.</p>
      </section>
      <section>
        <h2>Casa de Hogwarts</h2>
        <p ref={inViewRef}>Lufa-Lufa</p>
        <motion.img src={Hufflepuff} alt="imagem lufalufa" animate={animation}/>
      </section>
    </Container>
  );
};
