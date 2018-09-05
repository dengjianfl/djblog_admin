<template>
<div id="app">
    <router-view/>
</div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {};
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
        height: 100%;
        background-color: #fff;
    }
</style>
