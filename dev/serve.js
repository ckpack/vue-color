import { createApp } from 'vue';

// import VueColor from '../libs';
import { Sketch, create } from '../libs';

import Dev from './serve.vue';

const app = createApp(Dev);
// app.use(VueColor);
app.use(create({
  components: [Sketch],
}));

app.mount('#app');
