import React from "react";
import logo from '../../Bot_Icons/logo.png';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "../NavbarElements";<NavLink to="/twitchbots" activeStyle> {/*add reloadDocument*/}
                        Twitch Checkpoint Bots
                    </NavLink>

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
                    {/*<NavLink to="/queuehelperNEW" activeStyle>
                        Queue Helper NEW
                    </NavLink>*/}
                    {<NavLink to="/checkpointlist" activeStyle> 
                        Checkpoint List
                    </NavLink>}
                    <NavLink to="/twitchbots" activeStyle> {/*add reloadDocument*/}
                        Twitch Checkpoint Bots
                    </NavLink>
                    <NavLink to="/faq" activeStyle> {/*add reloadDocument*/}
                        FAQ
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
