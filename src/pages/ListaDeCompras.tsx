import { Link } from "react-router-dom";
import ListaMercado from "../components/ListaMercado";
import { Buttom } from "../components/styleds/Button";
import { H1 } from "../components/styleds/H1";

function ListaDeCompras (){
    return(
    <>
    <header>
        <Link to={"/"}><Buttom>Home</Buttom></Link>
    </header>
    <div className="container">
        <H1 color="white">
            Página Home
        </H1>

        <ListaMercado/>
    </div>

    <footer>

    </footer>
    </>
    )
}

export default ListaDeCompras;