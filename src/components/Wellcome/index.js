import { Container } from "./styles";
import Typewriter from "typewriter-effect";

export const Welcome = () => {

  return (
    <>
      <Container>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello, World!")
                .callFunction(() => {})
                .pauseFor(1000)
                .deleteChars(6)
                .callFunction(() => {})
                .start();
              typewriter.typeString("welcome to my world!");
            }}
          />
      </Container>
    </>
  );
};
