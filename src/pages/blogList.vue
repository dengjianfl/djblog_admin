<template>
    <div class="blog-list-page">
        <top-head></top-head>
        <base-side></base-side>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import BaseSide from '../components/BaseSide.vue';
export default {
    data () {
        return {
        };
    },

    components: {
        'top-head': Header,
        'base-side': BaseSide
    },

    computed: {},

    mounted: {},

    methods: {}
};

</script>
<style lang='scss'>

</style>
