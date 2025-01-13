import CreateUserModal from "./CreateUserModal";

const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">
                Manage User
            </div>
            <div classNameName="users-content">
                <button>Add new users</button>
            </div>
            <div>
                User Table
                <CreateUserModal />
            </div>
        </div>
    )
}

export default ManageUser;