<template>
<ul class="base-side">
    <router-link :to="{path: '/home'}" active-class="active" exact>
        <li>博客列表</li>
    </router-link>
    <router-link :to="{path: '/add'}" active-class="active" exact>
        <li>新增博客</li>
    </router-link>
</ul>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.base-side{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 160px;
    z-index: 1;
    background-color: #D3DCE6;
    color: #333;
    padding-top: 60px;
    li{
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
    }
    .active{
        font-size: 17px;
        font-weight: 700;
    }

}
</style>
