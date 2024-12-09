import React from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
    // state = {
    //     isShowUserList: true
    // }

    constructor(props) {
        console.log("Call 1")
        super(props);
        this.state = {
            isShowUserList: true,
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowUserList: !this.state.isShowUserList,
        })
    }
    componentDidMount() {
        console.log(">>> call componentDidMount");
        setTimeout(() => {
            document.title = "Bao Title"
        }, 3000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(">>> call componentDidUpdate", this.props, prevProps);

    }
    render() {
        console.log("Call me render")
        const { userList } = this.props;
        return (
            <div className="display-info-container">
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowUserList ? "Hide" : "Show"}
                    </span>
                </div>
                {this.state.isShowUserList &&
                    <>
                        {userList.map((user, index) => {
                            console.log('userList:', userList)
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div >My name is {user.name}</div>
                                        <div>I am {user.age} years old</div>
                                    </div>
                                    <div>
                                        <button onClick={() => {
                                            this.props.handleDeleteUser(user.id)
                                        }}>
                                            Delete
                                        </button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                        }
                    </>
                }
            </div>

        )
    }
}

export default DisplayInfo;
