import { Container } from "./styles";
import profilePicture from "../../assets/pictureProfile.jpeg";
import Hufflepuff from "../../assets/Hufflepuff.png"

export const About = () => {
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
        <p>Lufa-Lufa</p>
        <img src={Hufflepuff} alt="imagem lufalufa"/>
      </section>
    </Container>
  );
};
