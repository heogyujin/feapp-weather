import react from "react";
import { Link, NavLink} from 'react-router-dom'

const Navigation = () => {
    return(

    <Link to="/">Home</Link>
    <NavLink to="/about" activeClassName="selected">About</NavLink>


    );

    };

    export default Navigation;




