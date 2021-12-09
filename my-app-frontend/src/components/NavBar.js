import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

function NavBar() {
    return (
        <NavBarStyle>
            <NavLink to="/home" exact><li>My Feed</li></NavLink>
            <NavLink to="/account"><li>My Page</li></NavLink>
            <NavLink to="/favorites"><li>My Favorites</li></NavLink>
        </NavBarStyle>
    )
}

export default NavBar

const NavBarStyle = styled.div`

    
    a {
        list-style-type: none;
        margin: 0;
        padding: 0;

    }

    li {
        margin: 10px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 15px;
        line-height: 25px;
        box-shadow: 7px 7px grey;
        font-weight: bold;
        background: white;
    }

    a:link {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
        color: black;
    }

    li:hover {
        box-shadow: 7px 7px black;
    }


    
`