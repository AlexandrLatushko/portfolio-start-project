import './App.css';
import { Header } from './assets/layout/header/Header';
import { Main } from './assets/layout/sections/main/Main';
import { Skills } from './assets/layout/sections/skills/Skills';
import { Works } from './assets/layout/sections/works/Works';
import { Testimony } from './assets/layout/sections/testimony/Testimony';
import { Contacts } from './assets/layout/sections/contakts/Contacts';
import { Slogan } from './assets/layout/sections/slogan/Slogan';
import { Footer } from './assets/layout/footer/Footer';
import { Partikle } from './components/partikle/Partikle';


function App() {
    return (
        <div className="App">
            <Partikle/>

            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

