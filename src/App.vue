<template>
  <div class="max-w-2xl py-10 mx-auto text-center">
    <img alt="Vue logo" class="mx-auto" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  components: {
    HelloWorld,
  },
});
</script>
