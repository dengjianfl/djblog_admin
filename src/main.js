import Vue from 'vue';
import ElementUI from 'element-ui';
import VueQuillEditor from 'vue-quill-editor';
import 'element-ui/lib/theme-chalk/index.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import App from './App';
import router from './router';
import ajax from '@/plugins/http';
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(ajax);
Vue.use(VueQuillEditor);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
