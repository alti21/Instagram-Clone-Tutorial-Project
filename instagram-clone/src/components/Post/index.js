import React, { Component } from "react";

import "./Post.css";

class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <article className="Post" ref="Post">
          <header>
            <div className="Post-user">
              <div className="Post-user-avatar">
                <img src={this.props.avatar} alt={this.props.nickname} />
              </div>
              <div className="Post-user-nickname">
                <span>{this.props.nickname}</span>
              </div>
            </div>
          </header>
          <div className="Post-image">
            <div className="Post-image-bg">
              <img alt={this.props.caption} src={this.props.image} />
            </div>
          </div>
          <div className="Post-caption">
            <strong>{this.props.nickname}</strong> {this.props.caption}
          </div>
        </article>;
      }
  }

  export default Post;