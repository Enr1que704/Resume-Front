import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
            <Nav>
                <NavMenu>
                    <img src={require("./pngegg.png")} alt="logo" style={{ width: "45px", height: "auto" }}></img>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/experience" activeStyle>
                        Experience
                    </NavLink>
                    {/* <NavLink to="/pastjobs" activeStyle>
                        Past Jobs
                    </NavLink> */}
                    <NavLink to="/contact" activeStyle>
                        Contact 
                    </NavLink>
                </NavMenu>
            </Nav>
    )
}

export default Navbar;