<script>
import { defineComponent } from 'vue';
import {
  Chrome, Compact, Grayscale, Material, Photoshop, Sketch, Slider, Swatches, Twitter,
} from '../libs';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Sketch, Chrome, Compact, Grayscale, Material, Photoshop, Slider, Swatches, Twitter,
  },
  data() {
    return {
      colors: '#194D33A8',
    };
  },
});
</script>

<template>
  <div id="app" :style="{ 'background-color': typeof colors === 'object' ? colors.hex8 : colors }">
    <Sketch v-model="colors" />
    <Chrome v-model="colors" />
    <Compact v-model="colors" />
    <Grayscale v-model="colors" />
    <Material v-model="colors" />
    <Photoshop v-model="colors" />
    <Slider v-model="colors" />
    <Swatches v-model="colors" />
    <Twitter v-model="colors" />
  </div>
</template>

<style>
#app > div {
  margin: 30px 0;
}
</style>
