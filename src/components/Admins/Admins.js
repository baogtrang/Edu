import SideBar from "./SideBar";
import "./Admins.scss";
import { FaBars } from 'react-icons/fa';
import { useState } from "react";

const Admins = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <FaBars onClick={() => { setCollapsed(!collapsed) }} />
                content goes here
            </div>
        </div>
    )
}
export default Admins;