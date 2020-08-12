import * as React from "react";
import { isEqual } from "lodash";
import styled from "styled-components";

const ChatItem = React.memo(
  ({ item }) => {
    return (
      <Item>
        <ImageWrapper>
          <Image src={item.image} width="50" height="50" alt="avatar" />
        </ImageWrapper>
        <Detail>
          <Name>{item.name}</Name>
          <Message>
            <MessageText>{item.message}</MessageText>
          </Message>
        </Detail>
      </Item>
    );
  },
  (prevProps, nextProps) => {
    return isEqual(prevProps.item, nextProps.item);
  }
);

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
const ImageWrapper = styled.div`
  margin-right: 30px;
`;
const Image = styled.img`
  border-radius: 50px;
`;
const Detail = styled.div``;
const Name = styled.div`
  font-size: 12px;
  text-align: left;
  margin-bottom: 4px;
`;
const Message = styled.div`
  padding: 8px 12px;
  background: #20a0e0;
  color: #ffffff;
  border-radius: 10px;
  font-weight: bold;
`;
const MessageText = styled.span``;

export default ChatItem;
