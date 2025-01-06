import videoHomepage from "../../assets/video-homepage.mp4"
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <div className="title-1">There's a better way to ask</div>
                <div className="title-2">You don't want to make a boring form. And your audience won't answer
                    one. Create a typeform instead - it's interactive, fun, and engaging.
                </div>
                <div className="title-3">
                    <button>Get started. It's free</button>
                </div>
            </div>
            <video className="video-element" height="500px" width="400px" autoPlay loop muted>
                <source src={videoHomepage} type="video/mp4" />
            </video>
        </div>
    )
}

export default HomePage;