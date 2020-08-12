import React, { useState, useEffect } from "react";

import { db } from "../../../plugins/firebase";
import Chat from "./chat";

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const comments = db.collection("messages").orderBy("createdAt").limit(10);
    let newMessages = [];

    comments.onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach((msg) => {
        if (msg.type === "added") {
          newMessages.push({
            id: msg.doc?.id,
            name: msg.doc.data?.()?.name,
            message: msg.doc.data?.()?.message,
            image: msg.doc.data?.()?.image,
          });
        }
        setMessages(messages.concat(newMessages));
      });
    });
  }, []);

  const onSend = (v) => {
    const user = sessionStorage.getItem("user");
    const parseUser = JSON.parse(user);
    const comments = db.collection("messages");

    if (parseUser.uid && v.length > 0) {
      comments.add({
        message: v,
        name: parseUser.name,
        image: parseUser.photo,
        createdAt: new Date(),
      });
    }
  };

  return <Chat messages={messages} onSend={onSend} />;
};

export default ChatContainer;
