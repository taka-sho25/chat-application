import * as React from "react";
import styled from "styled-components";

const Header = () => <StyledHeader>React Chat</StyledHeader>;

const StyledHeader = styled.h1`
  background: #20a0e0;
  color: #ffffff;
  margin-bottom: 40px;
  padding: 30px 0;
`;

export default Header;
