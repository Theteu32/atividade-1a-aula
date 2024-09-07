import { Link } from "react-router-dom";
import { Buttom } from "../components/styleds/Button";
import { H1 } from "../components/styleds/H1";

function Home (){
    return (
        <>
        <header>
            <Link to="/Lista_de_compras"><Buttom>Lista de Compras</Buttom></Link>
            <Link to="/Sobre"><Buttom>Sobre</Buttom></Link>
        </header>
        <div>
            <H1 color="white">
             Página Home
            </H1>
        </div>

        </>
    )
};

export default Home;