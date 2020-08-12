import React, { useState } from "react";
import styled from "styled-components";

import ChatItem from "../../ui/chat/item";

const Chat = (props) => {
  const [formMsg, setFormMsg] = useState("");

  return (
    <ChatWrapper>
      {props.messages.map((item, i) => {
        return <ChatItem key={i} item={item} />;
      })}
      <Form action="">
        <FormTextArea value={formMsg} onChange={(e) => setFormMsg(e.target.value)} />
        <FormSend onClick={() => props.onSend(formMsg)} type="button" value="Send" />
      </Form>
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div``;

const Form = styled.form``;
const FormTextArea = styled.textarea`
  width: 100%;
`;
const FormSend = styled.input`
  display: block;
  margin: 0 0 0 auto;
`;

export default Chat;
