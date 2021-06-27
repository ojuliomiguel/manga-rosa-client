import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="w3-bar w3-blue">
            <NavLink className="w3-bar-item w3-button" to="/" exact>
                Home
            </NavLink>
            
            <NavLink className="w3-bar-item w3-button" to="/" exact>
                Registros
            </NavLink>

            <NavLink className="w3-bar-item w3-button" to="/" exact>
                Validar
            </NavLink>
        </nav>
    )
}

export default Navbar;