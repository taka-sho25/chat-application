import * as React from "react";
import firebase from "firebase";
import styled from "styled-components";

import Template from "../components/template";
import SignImage from "../assets/images/google_signin.png";

export default class Login extends React.Component {
  onEnter() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        sessionStorage.setItem("uid", result.user.uid);
        this.props.history.push("/chat");
      })
      .catch((e) => {
        console.log("login error: ", e);
      });
  }

  render() {
    return (
      <Template>
        <Container>
          <SignImg
            onClick={this.onEnter.bind(this)}
            src={SignImage}
            alt="Google Signin"
          />
        </Container>
      </Template>
    );
  }
}

const Container = styled.div``;
const SignImg = styled.img`
  margin: 0 auto;
  cursor: pointer;
`;
