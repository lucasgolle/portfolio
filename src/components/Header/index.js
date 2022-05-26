import {Container, MenuBar} from "./styles"
import Brazil from "../../assets/brazil-svgrepo-com.svg"
import EUA from "../../assets/united-states-of-america-svgrepo-com.svg"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import MENU from "../../assets/menu2.png"

export const Header = () =>{
    const [language, setlLanguage] = useState(true);

    return(

        <>
        <Container>
        <h1>&lt; Lucas Golle Profile /&gt;</h1>
        <MenuBar src={MENU} alt=""/>
        <nav>
            <ul>
                <div>
                <li>
                    <Link to="front" spy={true} smooth={true} offset={-85} duration={500}>Front-end</Link> 
                </li>
                <li>
                <Link to="back" spy={true} smooth={true} offset={-85} duration={500}>Back-end</Link> 
                </li>
                {language &&
                <li>
                    <Link to="sobremim" spy={true} smooth={true} offset={50} duration={500}>Sobre mim</Link> 
                </li>
            } {!language }
                </div>
                
            </ul>
        </nav>
        <div>
        <img src={Brazil} alt="bandeiraBR"/>
        <img src={EUA} alt="bandeiraEUA"/>
        </div>
        </Container>
        </>
    )

}