// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: #4faaf0;
    height: 50px;
    display: flex;
    justify-content: space-around;
    ${'' /* padding: 0.2rem calc(((100vw - 1000px) / 2)); */}
    z-index: 12;
    border-radius: 50px; // Add border-radius property to give curved edges
    margin: 20px auto;
    max-width: 60%; // Set the maximum width to 75% of the container
`;
 
export const NavLink = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    &.active {
        color: #ffffff;
        border: 2px solid #ffffff;
        border-radius: 10px; // Add border-radius property to give curved edges
        ${'' /* text-decoration: underline;
        text-underline-offset: 15px;
        text-decoration-thickness: 3px; */}
        background-color: #4faaf0;
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
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;