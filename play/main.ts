import { createApp } from 'vue';
import App from './app.vue';
import { NandIcon } from '@nand-ui/components/icon';

import '@nand-ui/theme-chalk/src/index.scss';
const app = createApp(App);
app.use(NandIcon);
app.mount('#app');
