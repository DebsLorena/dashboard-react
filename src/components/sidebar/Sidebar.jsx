import React, { useState } from 'react';
import './SidebarStyle.css';
import { SidebarData } from "../../data/Data";
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';


const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    console.log(window.innerWidth)

    return (
        <>
            <div className='bars' style={expanded ? { left: '60%' } : { left: '5%' }}  onClick={()=>setExpaned(!expanded)}>
                <UilBars />
            </div>
            <motion.div className="Sidebar"
            variants={sidebarVariants}
            animate={window.innerWidth<=768?`${expanded}`:''}
            >



                <div className="logo">
                    <ion-icon name="desktop-outline"></ion-icon>
                    <span> Debs<span>Lo</span>rena </span>
                </div>


                <div className="menu">
                    {SidebarData.map((item, index) => {
                        return (
                            <div className={selected === index ? "menuItem active" : 'menuItem'}
                                key={index}
                                onClick={() => setSelected(index)}
                            >
                                <item.icon />
                                <span>{item.heading}</span>
                            </div>
                        )
                    })}
                    <div className="menuItem">
                        <UilSignOutAlt />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Sidebar;