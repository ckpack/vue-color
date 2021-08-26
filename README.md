# vue-color 

> Modified based on [https://github.com/xiaokaike/vue-color](https://github.com/xiaokaike/vue-color) to support vue3.0

🎨 Vue Color Pickers for Sketch, Photoshop, Chrome & more

![image](https://user-images.githubusercontent.com/30174970/114983369-1e5aa380-9ec3-11eb-9e77-b122d19f1ebd.png)

## [Demo](https://ckpack.github.io/vue-color)

## Example
```js
<Sketch v-model="colors"/>

import { Sketch } from '@ckpack/vue-color';

let colors = {
  hex: '#194d33',
  hex8: '#194D33A8',
  hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
  hsv: { h: 150, s: 0.66, v: 0.30, a: 1 },
  rgba: { r: 25, g: 77, b: 51, a: 1 },
  a: 1
};
// or
let colors = '#194d33';
// or
let colors = '#194D33A8';
// or 
let colors = { h: 150, s: 0.66, v: 0.30 };
// or 
let colors = { r: 255, g: 0, b: 0 };
// etc...

new Vue({
  components: {
    Sketch,
  },
  data () {
    return {
      colors,
    };
  },
});
```

## [CHANGELOG](/CHANGELOG.md)
## License

vue-color is licensed under [The MIT License](LICENSE).
