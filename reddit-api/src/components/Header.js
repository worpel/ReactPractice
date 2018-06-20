import React from "react";

class Header extends React.Component {

    render() {
        return (
            <div id="container">
                <div id="main">
                    <div id="title">Utilizing the Reddit API</div>
                    <div id="subtitle">What subreddit do you wish to search for?</div>
                </div>
            </div>
        );
    }
}

export default Header