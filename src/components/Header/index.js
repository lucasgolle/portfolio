import {Container} from "./styles"
import Brazil from "../../assets/brazil-svgrepo-com.svg"
import EUA from "../../assets/united-states-of-america-svgrepo-com.svg"

export const Header = () =>{

    return(
        <>
        <Container>
        <h1>&lt; Lucas Golle Profile /&gt;</h1>
        <nav>
            <ul>
                <div>
                <li>Front-end</li>
                <li>Back-end</li>
                <li>Sobre mim</li>
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