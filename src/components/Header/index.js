import {Container} from "./styles"
import Brazil from "../../assets/brazil-svgrepo-com.svg"
import EUA from "../../assets/united-states-of-america-svgrepo-com.svg"
import { useState } from "react"

export const Header = () =>{
    const [language, setlLanguage] = useState(true);

    return(

        <>
        <Container>
        <h1>&lt; Lucas Golle Profile /&gt;</h1>
        <nav>
            <ul>
                <div>
                <li>Front-end</li>
                <li>Back-end</li>
                {language &&
                <li>Sobre mim</li>
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