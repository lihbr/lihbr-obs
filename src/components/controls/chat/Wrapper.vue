<!-- HEALTH:UNKNOWN chat-wrapper -->
<template>
  <div class="chatWrapper overflow-hidden" :style="{ width, height }">
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
import ChatMessage from "~/components/controls/chat/Message.vue";

export default {
  components: {
    ChatMessage
  },
  props: {
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
  },
  computed: {
    messages() {
      return this.$store.state.twitch.messages;
    }
  }
};
</script>
