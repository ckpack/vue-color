<template>
  <div id="app" :style="{'background-color': typeof colors === 'object' ? colors.hex8 : colors}">
    <Sketch v-model="colors"/>
    <Chrome v-model="colors"/>
    <Compact v-model="colors"/>
    <Grayscale v-model="colors"/>
    <Material v-model="colors"/>
    <Photoshop v-model="colors"/>
    <Slider v-model="colors"/>
    <Swatches v-model="colors"/>
    <Twitter v-model="colors"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServeDev',
  data() {
    return {
      colors: '#194D33A8',
    };
  },
});
</script>

<style>
  #app >div {
    margin: 30px 0;
  }
</style>
