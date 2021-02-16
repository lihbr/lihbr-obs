<!-- HEALTH:UNKNOWN chat -->
<template>
  <div class="chat overflow-hidden" :style="{ width, height }">
    <ul class="stack-2 absolute bottom-0 left-0 w-full">
      <li
        v-for="(message, index) in messages"
        :key="`${message.author}-${index}`"
      >
        <chat-message
          :message="message"
          :user-width="userWidth"
          :body-width="bodyWidth"
        ></chat-message>
      </li>
    </ul>
  </div>
</template>

<script>
import ChatMessage from "~/components/controls/ChatMessage.vue";

export default {
  components: {
    ChatMessage
  },
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    height: {
      type: String,
      default: "200px"
    },
    width: {
      type: String,
      default: "420px"
    },
    userWidth: {
      type: String,
      default: "100px"
    },
    bodyWidth: {
      type: String,
      default: "310px"
    }
  }
};
</script>
