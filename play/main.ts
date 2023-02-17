import { createApp } from 'vue';
import App from './app.vue';
import NandUI from '@nand-ui/components';
const app = createApp(App);
app.use(NandUI as any);
app.mount('#app');
