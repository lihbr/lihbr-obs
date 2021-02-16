<template>
  <layout>
    <div class="flex justify-center" :style="{ paddingTop: '130px' }">
      <camera size="716px" color="flamingo" class="mr-5">Lucie @li_hbr</camera>
      <camera size="716px" color="ochre">Alex @trostcodes</camera>
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
