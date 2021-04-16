<template>
  <div id="app" :style="{'background-color': typeof colors === 'object' ? colors.hex8 : colors}">
    <!-- <vue-color-sample /> -->
    <Sketch v-model="colors"/>
    <Chrome v-model="colors"/>
    <Compact v-model="colors"/>
    <Grayscale v-model="colors"/>
    <Material v-model="colors"/>
    <Photoshop v-model="colors"/>
    <Sketch v-model="colors"/>
    <Slider v-model="colors"/>
    <Swatches v-model="colors"/>
    <Twitter v-model="colors"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueColorSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  VueColorSample,
  // }
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
