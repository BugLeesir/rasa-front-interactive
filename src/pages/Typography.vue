<template>
  <div id="chat-container" class="md-layout">
    <md-card class="md-layout-item md-size-100 md-small-size-auto">
      <md-card-header data-background-color="green">
        <div class="md-title">Rasa对话机器人</div>
      </md-card-header>
      <md-card-content>
        <div id="response-container">
          <div v-for="(message, index) in messages" :key="index">
            <strong>{{ message.sender }}：</strong>{{ message.text }}
          </div>
        </div>
      </md-card-content>
    </md-card>
    <md-field
      md-clearable
      class="md-layout-item md-small-size-100"
      style="display: flex; align-items: center"
    >
      <label for="chat-input">请输入您的问题...</label>
      <md-input
        id="chat-input"
        v-model="inputMessage"
        @keydown.enter="sendMessage"
      />
      <md-button class="md-raised md-primary" @click="sendMessage"
        >发送</md-button
      >
    </md-field>
  </div>
</template>

<script>
import { sendMessageToRasa } from "@/api/rasa.js";

export default {
  data() {
    return {
      inputMessage: "",
      messages: [],
    };
  },
  methods: {
    sendMessage() {
      const message = { text: this.inputMessage, sender: "我" };
      this.inputMessage = "";
      this.messages.push(message);

      sendMessageToRasa(message.text)
        .then((response) => {
          if (response && Array.isArray(response)) {
            const rasaMessages = response.map((msg) => ({
              text: msg.text,
              sender: "Rasa对话机器人",
            }));
            this.messages.push(...rasaMessages);
          }
          this.$nextTick(() => {
            const container = this.$el.querySelector("#response-container");
            container.scrollTop = container.scrollHeight;
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
#chat-container {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin: 30px auto;
  max-width: 600px;
  padding: 20px;
}
#response-container {
  height: 300px;
  overflow-y: scroll;
  scroll-behavior: smooth; /* 自动滚动功能 */
  opacity: 0.7;
}
#response-container p {
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(248, 248, 248, 0.6);
}
#input-container {
  display: flex;
  margin-top: 20px;
}
#message-input {
  border: none;
  border-radius: 5px;
  flex-grow: 1;
  font-size: 16px;
  padding: 10px;
  margin-right: 10px;
}
#send-button {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
}
#send-button:hover {
  background-color: #0069d9;
}
</style>
