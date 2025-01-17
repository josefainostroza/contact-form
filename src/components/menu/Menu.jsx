import { Link } from "react-router-dom";

const Menu = () => {
    return (
    <nav>
        <ul>
            <li>
                <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
                <li>
                    <Link to='/hola'>USER - hola</Link>
                    <li>

                    <Link to='/adios'>USER - adios</Link>
                    </li>
                    <li>

                    <Link to='/josefa'>USER - josefa</Link>
                    </li>
                </li>
                </ul>
                </nav>
    );
}
export default Menu;