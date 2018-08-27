<template>
<div id="app">
    <top-head></top-head>
    <base-side></base-side>
    <router-view/>
</div>
</template>

<script>
import Header from './components/Header.vue';
import BaseSide from './components/BaseSide.vue';
export default {
    name: 'App',
    data () {
        return {

        }
    },
    components: {
       'top-head': Header,
       'base-side': BaseSide
    }
};
</script>

<style lang="scss">
@import url(./assets/scss/reset.scss);
@import url(./assets/scss/iconfont.css);
@import url(./assets/scss/global.scss);
#app{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
</style>
