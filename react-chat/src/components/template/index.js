import * as React from "react";
import styled from "styled-components";

import Header from "../global/Header";

export default class Template extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main>{this.props.children}</Main>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const Main = styled.div``;
