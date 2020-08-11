<template>
  <Chat :messages="state.messages" :onSend="onSend" />
</template>

<script>
import firebase from "firebase";
import { reactive } from "vue";
import { db } from "@/plugins/firebase";
import Chat from "./Chat";

export default {
  name: "ChatContainer",
  components: { Chat },
  setup() {
    const state = reactive({
      messages: []
    });

    function setMessages(data, msg) {
      if (!data || !msg) return;
      this.state.messages.push({
        id: data?.id,
        name: msg?.name,
        message: msg?.message,
        image: msg?.image
      });
    }

    return {
      state,
      setMessages
    };
  },
  created() {
    const comments = db
      .collection("messages")
      .orderBy("createdAt")
      .limit(10);

    comments.onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(msg => {
        if (msg.type === "added") {
          this.setMessages(msg.doc, msg.doc.data?.());
        }
      });
    });
  },
  methods: {
    onSend(v) {
      const user = this.$store.state.user;
      const comments = db.collection("messages");
      if (user.uid && v.length > 0) {
        comments.add({
          message: v,
          name: user.displayName,
          image: user.photoURL,
          createdAt: new Date()
        });
      }
    },
    logout() {
      firebase.auth().signOut();
    }
  }
};
</script>
