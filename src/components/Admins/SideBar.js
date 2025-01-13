import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaGithub } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';
import { MdDashboard } from 'react-icons/md';
import { FaUserGraduate } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./SideBar.scss";

const SideBar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props;
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
                    <FaUserGraduate size={'3em'} color='' />
                    <span>EDU</span>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<MdDashboard />}>
                        <Link to="/admins">Dashboard</Link>
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu icon={<FaGem />} title="Features">
                        <MenuItem>
                            <Link to="/admins/manage-users">User Management</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/admins">Quiz Management</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/admins">Question Management</Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="https://github.com/baogtrang/Edu"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            The creator
                        </span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default SideBar;

