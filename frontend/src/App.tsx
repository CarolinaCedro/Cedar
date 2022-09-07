import { Header } from "./Components/Header/Header";
import {AiFillGithub} from "react-icons/ai";
import logoIcon from './Assets/logoIcon.svg'
import { CardSale } from "./Components/CardSale/CardSale";

function App() {
  return (
    <>
    <Header/>
    <section className="logoContainer">
      <div className="logoContent">
        <img src={logoIcon}/>
        <h3>Cedar</h3>
        <p>Desenvolvido por <AiFillGithub/> <a href="https://github.com/CarolinaCedro">CarolinaCedro</a></p>
      </div>
    </section>
    <CardSale/>
    </>
    
  );
}

export default App;
