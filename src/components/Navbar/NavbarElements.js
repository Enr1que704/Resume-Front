// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: #32353c;
    height: 50px;
    display: flex;
    justify-content: space-around;
    ${'' /* padding: 0.2rem calc(((100vw - 1000px) / 2)); */}
    z-index: 12;
    ${'' /* border-radius: 5px; // Add border-radius property to give curved edges */}
    ${'' /* margin: 10px auto; */}
    ${'' /* max-width: 60%; // Set the maximum width to 75% of the container */}
`;
 
export const NavLink = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    ${'' /* padding: 0.5rem 1rem; */}
    padding: 5px 20px; // first value is height of the square around, second is the space between links
    height: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    &.active {
        color: #ffffff;
        ${'' /* border: 2px solid #ffffff;
        border-radius: 10px; // Add border-radius property to give curved edges
        background-color: #4faaf0; */}
        text-decoration: underline;
        text-underline-offset: 12px;
        text-decoration-thickness: 5px;
    }
`;
 
// export const Bars = styled(FaBars)`
//     display: none;
//     color: #808080;
//     @media screen and (max-width: 768px) {
//         display: block;
//         position: absolute;
//         top: 0;
//         right: 0;
//         transform: translate(-100%, 75%);
//         font-size: 1.8rem;
//         cursor: pointer;
//     }
// `;
 
// spacing within the NavMenu
export const NavMenu = styled.div`
    display: flex;
    margin-right: -24px;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;