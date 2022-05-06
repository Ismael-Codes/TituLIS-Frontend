import React, { useState } from 'react';
import {FaBars, FaTh} from "react-icons/fa";
import {AiOutlineBarChart, AiOutlineLogout, AiTwotoneBell, AiTwotoneEye} from "react-icons/ai";
import {NavLink} from "react-router-dom";


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path: '/',
            name: "Dashboard",
            icon: <FaTh/>
        },
        {
            path: '/notifications',
            name: "Notificaciónes",
            icon: <AiTwotoneBell/>
        },
        {
            path: '/revision',
            name: "Revision",
            icon: <AiTwotoneEye/>,
        },
        {
            path: '/statistics',
            name: "Estadísticas",
            icon: <AiOutlineBarChart/>
        },
        {
            path: '/LogOut',
            name: "Salir",
            icon: <AiOutlineLogout/>
        }
    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">UAEH</h1>
                    <div style={{marginLeft: isOpen ? "40px" : "-3px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
