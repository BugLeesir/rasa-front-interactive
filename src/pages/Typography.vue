<template>
  <div id="chat-container" class="md-layout md-alignment-center-center">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header data-background-color="green">
        <div class="md-title">防洪减灾问答机器人</div>
      </md-card-header>
      <md-card-content>
        <md-list id="response-container" ref="responseContainer">
          <md-list-item v-for="(message, index) in messages" :key="index">
            <div class="md-list-item-text">
              <b>{{ message.sender === "user" ? "您" : "防洪减灾机器人" }}：</b>
              {{ message.text }}
            </div>
          </md-list-item>
        </md-list>
        <md-field id="input-container">
          <md-input
            v-model="type"
            style="margin-top: 40px; height: 60px; font-size: 20px !important"
            @keyup.enter="sendMessage"
            placeholder="请输入您的问题..."
          ></md-input>
          <md-button
            id="send-button"
            class="md-primary md-raised large-text"
            @click="sendMessage"
            >发送</md-button
          >
        </md-field>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userInput: "",
      messages: [],
    };
  },
  methods: {
    async sendMessage() {
      const response = await axios.post(
        "http://localhost:5005/webhooks/rest/webhook",
        {
          sender: "user",
          message: this.userInput,
        }
      );

      this.messages.push({
        sender: "user",
        text: this.userInput,
      });

      this.userInput = "";

      response.data.forEach((message) => {
        this.messages.push({
          sender: "bot",
          text: message.text,
        });
      });

      this.$nextTick(() => {
        const container = this.$refs.responseContainer;
        container.scrollTop = container.scrollHeight;
      });
    },
  },
};
</script>

<style scoped>
#chat-container {
  height: 100vh;
}

.md-card {
  max-width: 600px;
  margin: 0 auto;
}

#response-container {
  height: 300px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  opacity: 0.7;
}

#response-container .md-list-item-text {
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(248, 248, 248, 0.6);
}

#input-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.md-input {
  flex-grow: 1;
  margin-right: 10px;
  font-size: 72px !important;
}

#send-button {
  min-width: 120px;
  min-height: 60px;
}

.large-text {
  font-size: 16px;
  line-height: 24px;
}
</style>
