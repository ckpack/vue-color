# vue-color 

> Modified based on [https://github.com/xiaokaike/vue-color](https://github.com/xiaokaike/vue-color) to support vue3.0

🎨 Vue Color Pickers for Sketch, Photoshop, Chrome & more

![image](https://user-images.githubusercontent.com/30174970/114983369-1e5aa380-9ec3-11eb-9e77-b122d19f1ebd.png)

## [Demo](https://ckpack.github.io/vue-color)

## Use case

#### On demand

We can import components we actually need, making the project smaller than otherwise.

##### Import Directly

```html
<template>
  <Sketch v-model="colors"/>
</template>
<script>
import { Sketch } from '@ckpack/vue-color';

export default {
  components: {
    Sketch,
  },
  setup() {
    return {
      colors: '#194D33A8' // etc: { h: 150, s: 0.66, v: 0.30 }, { r: 255, g: 0, b: 0 }, '#194d33'
    }
  }
}
</script>
```

##### Install on Demand Globally

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import { Sketch, create } from '@ckpack/vue-color';

const app = createApp(App);
app.use(create({
  components: [Sketch],
}));
app.mount('#app');
```

#### Fully import

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import VueColor from '@ckpack/vue-color';

const app = createApp(App);

app.use(VueColor);
app.mount('#app');
```

## [CHANGELOG](/CHANGELOG.md)

## License

vue-color is licensed under [The MIT License](LICENSE).
