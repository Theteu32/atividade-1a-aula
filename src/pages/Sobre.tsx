import { Link } from "react-router-dom";
import { Buttom } from "../components/styleds/Button";
import { H1 } from "../components/styleds/H1";

function Sobre (){
    return (
        <>
        <header>
            <Link to="/"><Buttom>Homes</Buttom></Link>
        </header>
        <div>
        <H1>
            Página Home
        </H1>
        </div>
        </>
    )
};

export default Sobre;