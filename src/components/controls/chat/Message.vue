<!-- HEALTH:UNKNOWN chat-message -->
<template>
  <div class="chatMessage flex justify-between items-start">
    <div
      :class="`color--${message.color}`"
      class="color color--text overflow-ellipsis overflow-hidden text-right relative pr-1 font-medium"
      :style="{
        width: userWidth
      }"
    >
      {{ message.author }}
    </div>
    <div
      :style="{
        width: bodyWidth
      }"
    >
      {{ message.body }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => ({
        author: "",
        body: "",
        color: "navy"
      })
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

<style lang="sass" scoped>
.chatMessage .user::after
  content: ":"
  position: absolute
  top: 0
  right: 0
</style>
