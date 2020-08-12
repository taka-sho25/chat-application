import * as React from "react";
import styled from "styled-components";

import Template from "../components/template";
import ChatContainer from "../components/services/chat/chat.container";

export default class Chat extends React.Component {
  componentWillMount() {
    console.log("componentWillMount");
    const user = sessionStorage.getItem("user");
    if (!JSON.parse(user).uid) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <Template>
        <Container>
          <ChatContainer />
        </Container>
      </Template>
    );
  }
}

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;
