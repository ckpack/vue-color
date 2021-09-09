import { createApp } from 'vue';

import VueColor from '../src';

import Dev from './serve.vue';

const app = createApp(Dev);
app.use(VueColor);

app.mount('#app');
