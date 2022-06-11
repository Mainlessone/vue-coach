import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import store from './store/index';

import BaseCard from './components/shared/BaseCard';
import BaseButton from './components/shared/BaseButton';
import BaseBadge from './components/shared/BaseBadge';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
