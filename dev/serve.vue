<script setup>
import { ref } from 'vue';
import {
  Chrome, Compact, Grayscale, Material, Photoshop, Sketch, Slider, Swatches, Twitter,
} from '../src';

const format = ref('rgb');
const colors = ref({ hsl: { h: 150, s: 0.5098039215686275, l: 0.19999999999999998, a: 0.6588235294117647 }, hex: '#194D33', hex8: '#194D33A8', rgba: { r: 25, g: 77, b: 51, a: 0.6588235294117647 }, hsv: { h: 150, s: 0, v: 0, a: 0.6588235294117647 }, oldHue: 150, a: 0.6588235294117647 });

const c = (v) => {
  console.log(v);
};
</script>

<template>
  <div id="app" :style="{ 'background-color': typeof colors === 'object' ? colors.hex8 : colors }">
    <Chrome v-model="colors" :format="format" @update:format="c" />
    <Sketch v-model="colors" />
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
