<template>
  <div class="chat">
    <ChatContainer />
  </div>
</template>

<script>
import firebase from "firebase";
import ChatContainer from "@/components/services/Chat/Chat.container";

export default {
  name: "Chat",
  components: { ChatContainer },
  created() {
    firebase.auth().onAuthStateChanged(async user => {
      if (!user) {
        this.$router.push("/");
        return;
      }
      await this.$store.dispatch("setUser", user);
    });
  }
};
</script>

<style lang="scss" scoped>
.chat {
  width: 70%;
  margin: 0 auto;
}
</style>
