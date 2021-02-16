<!-- HEALTH:UNKNOWN chat-message -->
<template>
  <div class="chatMessage flex justify-between items-start">
    <div
      :class="{
        'text-navy': message.color === 'navy',
        'text-beet': message.color === 'beet',
        'text-flamingo': message.color === 'flamingo',
        'text-ochre': message.color === 'ochre',
        'text-butter': message.color === 'butter',
        'text-mantis': message.color === 'mantis'
      }"
      class="user overflow-ellipsis overflow-hidden text-right relative pr-1 font-medium"
      :style="{
        width: userWidth
      }"
    >
      {{ message.user }}
    </div>
    <div
      class="body"
      :style="{
        width: bodyWidth
      }"
    >
      {{ message.body }}
    </div>
  </div>
</template>

<script>
// import Component from "~/components/Component.vue";

export default {
  props: {
    message: {
      type: Object,
      default: () => ({
        user: "",
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

<style scoped>
.chatMessage .user::after {
  content: ":";
  position: absolute;
  top: 0;
  right: 0;
}
</style>
