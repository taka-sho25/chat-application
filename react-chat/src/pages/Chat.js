import * as React from "react";
import { Link } from "react-router-dom";

export default class Chat extends React.Component {
  componentWillMount() {
    console.log("componentWillMount");
    const uid = sessionStorage.getItem("uid");
    if (!uid) {
      this.props.history.push("/");
    }
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    return (
      <div>
        <div>Chat</div>
        <Link to="/">to Login</Link>
      </div>
    );
  }
}
