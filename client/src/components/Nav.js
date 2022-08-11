import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
				<li><Link to="/journal">Journal</Link></li>
				<li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/tdee">Profile</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;