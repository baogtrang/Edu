import React, { useState } from "react";
import AddUser from "./AddUser";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//   state = {
//     userList: [
//       { id: 1, name: "Bao", age: 15 },
//       { id: 2, name: "Uyen", age: 26 },
//       { id: 3, name: "Pig", age: 69 },
//     ]
//   }
//   handleAddUser = (userObject) => {
//     this.setState({
//       userList: [userObject, ...this.state.userList]
//     })
//   }
//   handleDeleteUser = (userId) => {
//     let userListClone = [...this.state.userList];
//     userListClone = userListClone.filter(item => item.id !== userId);
//     this.setState({ userList: userListClone });
//   }
//   render() {
//     //DRY: Don't Repeat Yourself
//     return (
//       <>
//         <div className="a">
//           <AddUser handleAddUser={this.handleAddUser} />
//           <br />
//           <DisplayInfo
//             userList={this.state.userList}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [userList, setUserList] = useState([
    { id: 1, name: "Bao", age: "15" },
    { id: 2, name: "Uyen", age: "26" },
    { id: 3, name: "Pig", age: "69" }])

  const handleAddUser = (userObject) => {
    setUserList([userObject, ...userList])
  }
  const handleDeleteUser = (userId) => {
    let userListClone = userList;
    userListClone = userListClone.filter(item => item.id !== userId);
    setUserList(userListClone);
  }
  return (
    <>
      <div className="a">
        <AddUser handleAddUser={handleAddUser} />
        <br />
        <DisplayInfo
          userList={userList}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
}

export default MyComponent;
