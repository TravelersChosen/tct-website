import React from "react";
import logo from '../../logo.png';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/" >
                        Homepage
                    </NavLink>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/queuehelper" activeStyle>
                        Queue Helper
                    </NavLink>
                    <NavLink to="/checkpointlist" activeStyle>
                        CheckpointList
                    </NavLink>
                    <NavLink to= "/" ><img src={logo} style={{width:'10%'}}/></NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
