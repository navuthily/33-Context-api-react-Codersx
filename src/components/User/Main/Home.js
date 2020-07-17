import React, { Component } from "react";

import callApi from "../../../utils/apiCaller";
class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    callApi("post/ap", "get", null).then((res) => {
      console.log(res);
      if (res && res.data) {
        this.setState({
          posts: res.data,
        });
      }
    });
  }
  render() {
    var posts = this.state.posts;
    console.log('posst nf sao khoor quas thees')
    console.log(posts)
    return (
      <div>
      <p>nana</p>
      </div>
    );
  }
}

export default Home;
