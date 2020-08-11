<template>
  <div class="login">
    <img
      @click="onEnter"
      alt="Google Signin"
      src="../assets/images/google_signin.png"
    />
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  methods: {
    onEnter() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(async result => {
          await this.$store.dispatch("setUser", result.user);
          this.$router.push("/chat");
        })
        .catch(e => {
          console.log("login error: ", e);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  img {
    margin: 0 auto;
    cursor: pointer;
  }
}
</style>
