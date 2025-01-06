import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaTachometerAlt, FaGem, FaRegLaughWink } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';

const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {

    return (
        <ProSidebar
            image={sidebarBg}
            collapsed={collapsed}
        // toggled={toggled}
        // breakPoint="md"
        // onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    EDU
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        suffix={<span className="badge red">New</span>}
                    >
                        Dashboard
                    </MenuItem>
                    <MenuItem icon={<FaGem />}>Components</MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        icon={<FaRegLaughWink />}
                        title="More"
                    >
                        <MenuItem>Submenu 1</MenuItem>
                        <MenuItem>Submenu 2</MenuItem>
                        <MenuItem>Submenu 3</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
};

export default SideBar;

