import { Link } from "react-router-dom";
import ButtonDefault from "../components/ButtonDefault";

function Home () {
    return(
    <>
    <h1>Bem vindos ao Mercado Online</h1>

    <Link to={"/Login"}>
       <ButtonDefault title="Login"/>
    </Link>
  </>
  )
}

export default Home;
