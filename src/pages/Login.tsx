import { Link } from "react-router-dom";
import ButtonDefault from "../components/ButtonDefault";


function Login () {
    return(
    <>
    <h1>Login</h1>

    <label htmlFor="">E-mail:</label>
    <input type="text"/>

    <label htmlFor="">Senha:</label>
    <input type="text"/>

    <Link to={"/ListaDeMercado"}>
       <ButtonDefault title="Login"/>
    </Link>
          
    <Link to={"/ListaDeMercado"}>
       <ButtonDefault title="Cadastre-se"/>
    </Link>

  </>
  )
}

export default Login;