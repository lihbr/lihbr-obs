<template>
  <layout>
    <div
      :style="{ height: '846px' }"
      class="flex items-stretch justify-between mt-5 mx-5"
    >
      <div
        class="bg-cyan flex-1 mr-5 color--text transition-colors"
        :style="{ borderBottomWidth: '20px' }"
      ></div>
      <aside :style="{ width: '393px' }" class="flex flex-col justify-between">
        <camera size="393px" color="ochre">Alex @trostcodes</camera>
        <camera size="393px" color="flamingo">Lucie @li_hbr</camera>
      </aside>
    </div>
    <footer
      class="flex flex-col justify-center mx-auto mt-5 stack-2"
      :style="{ width: '620px', height: '174px' }"
    >
      <h1 class="heading-h1 color--basic">Setting up the Slice Builder</h1>
      <p class="paragraph-lead">
        Join us for #SliceContest!
        <span class="underline">s.lihbr.com/slice-contest</span>
      </p>
    </footer>
  </layout>
</template>

<script>
import Layout from "~/layouts/default.vue";

import Camera from "~/components/controls/Camera.vue";

export default {
  components: {
    Layout,

    Camera
  }
};
</script>
