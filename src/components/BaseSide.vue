<template>
    <el-row class="tac">
        <el-col>
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1">
                    <router-link :to="{path: '/home'}" active-class="active" class="menuItem">
                        <i class="el-icon-menu"></i>
                        <span>博客列表</span>
                    </router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link :to="{path: '/add'}" active-class="active" class="menuItem">
                        <i class="el-icon-plus"></i>
                        <span>新增博客</span>
                    </router-link>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <!-- <router-link :to="{path: '/blogDetails'}" active-class="active" class="menuItem"> -->
                        <i class="el-icon-edit"></i>
                        <span>编辑博客</span>
                    <!-- </router-link> -->
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
    .tac{
        float: left;
        width: 160px;
        height: 80%;
        background-color: #F9F9F9;
        .el-menu { border: none; }
        .el-menu-item {
            color: #000;
            background-color: #F9F9F9 !important;
            &.is-disabled {
                opacity: 1;
                span {
                    cursor: not-allowed;
                    color: #ccc;
                }
            }
        }
        .active {
            i, span { color: #3a8ee6; }
        }
    }
</style>
