import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";




const NavBar = ({ onSearch, randomCharacter}) => {
    function generarRandomId() {
        randomCharacter();
    }
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <button onClick={generarRandomId}>Random</button>
            <Link to="/home">
                <button>Home</button>
            </Link>
            <Link to="/About">
                <button>About</button>
            </Link>
        </div>
    )
}

export default NavBar;