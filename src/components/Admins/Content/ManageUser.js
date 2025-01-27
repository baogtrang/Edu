import { useState } from "react";
import CreateUserModal from "./CreateUserModal";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";

const ManageUser = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="add-user-btn">
                    <button className="btn btn-primary"
                        onClick={() => setShowModal(true)}>
                        <FcPlus /> Add new users
                    </button>
                </div>
                <div className="user-table-container">
                    User Table
                </div>
                <CreateUserModal
                    show={showModal}
                    setShow={setShowModal}
                />
            </div>
        </div >
    )
}

export default ManageUser;