<!-- HEALTH:UNKNOWN socials -->
<template>
  <switcher class="flex justify-center" slow>
    <template v-for="(social, index) in socials">
      <div
        v-if="current === index"
        :key="`${social.content}-${index}`"
        class="mx-auto flex items-center"
      >
        <component
          :is="`${social.type.toLowerCase()}-svg`"
          class="w-12 h-12 mr-5 color color--current color--basic fill-current"
          aria-hidden="true"
        />
        <div class="paragraph-lead">
          {{ social.content }}
        </div>
      </div>
    </template>
  </switcher>
</template>

<script>
import Switcher from "~/components/controls/Switcher.vue";

import TwitterSvg from "~/assets/icons/twitter.svg";
import FacebookSvg from "~/assets/icons/facebook.svg";
import InstagramSvg from "~/assets/icons/instagram.svg";
import LinkedinSvg from "~/assets/icons/linkedin.svg";
import GithubSvg from "~/assets/icons/github.svg";
import EmailSvg from "~/assets/icons/email.svg";
import LinkSvg from "~/assets/icons/link.svg";

export default {
  components: {
    Switcher,

    TwitterSvg,
    FacebookSvg,
    InstagramSvg,
    LinkedinSvg,
    GithubSvg,
    EmailSvg,
    LinkSvg
  },
  data() {
    return {
      socials: [
        {
          type: "link",
          content: "lihbr.com"
        },
        {
          type: "twitter",
          content: "twitter.com/li_hbr"
        },
        {
          type: "github",
          content: "github.com/lihbr"
        }
      ],
      active: false,
      current: 0
    };
  },
  mounted() {
    this.active = true;
    this.update();
  },
  destroyed() {
    this.active = false;
  },
  methods: {
    update() {
      this.current++;
      this.current %= this.socials.length;

      setTimeout(() => {
        if (this.active) {
          this.update();
        }
      }, 10000);
    }
  }
};
</script>
