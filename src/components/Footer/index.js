import {Container} from "./styles"
import linkedinIcon from "../../assets/linkedinIcon.png"
import githubIcon from "../../assets/githubIcon.png"


export const Footer = () =>{

    return(
        <>
        <Container>
        <h1>Exemplo</h1>
        <nav>
            <ul>
                <div>
                <li><img src={linkedinIcon} alt="Icone rede social linkedin" /></li>
                <li><img src={githubIcon} alt="Icone rede social linkedin" /></li>
                <li>Exemplo</li>
                </div>
            </ul>
        </nav>
        </Container>
        </>
    )

}