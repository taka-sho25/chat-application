<template>
  <div>
    <div
      v-for="{ key, name, image, message } in messages"
      :key="key"
      class="item"
    >
      <div class="item-image">
        <img :src="image" width="50" height="50" alt="avatar" />
      </div>
      <div class="item-detail">
        <div class="item-name">{{ name }}</div>
        <div class="item-message">
          <span>{{ message }}</span>
        </div>
      </div>
    </div>
    <div action="" class="form">
      <textarea v-model="input" />
      <input
        @click="sendMessage"
        type="button"
        class="send-button"
        value="Send"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatViewModel",
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    onSend: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      input: ""
    };
  },
  methods: {
    sendMessage() {
      this.onSend(this.input);
      this.input = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  &-image {
    margin-right: 30px;

    img {
      border-radius: 50px;
    }
  }

  &-name {
    font-size: 12px;
    text-align: left;
    margin-bottom: 4px;
  }

  &-message {
    padding: 8px 12px;
    background: #20a0e0;
    color: #ffffff;
    border-radius: 10px;
    font-weight: bold;
  }
}

.form {
  textarea {
    width: 100%;
  }
  .send-button {
    display: block;
    margin: 0 0 0 auto;
  }
}
</style>
