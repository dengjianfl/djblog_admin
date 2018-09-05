<template>
    <div class="searchWrap">
        <!-- 关键字搜索 -->
        <div class="titleSearch">
            <i v-if="autofocus" @click="handleSearch" class="el-icon-search"></i>
            <i v-if="!autofocus" @click="clearIconSearch" class="el-icon-close"></i>
            <el-input
                placeholder="请输入关键字"
                @keyup.enter.native="handleSearch"
                v-model.trim="searchParams.title"
            ></el-input>
        </div>
        <el-button type="primary" @click="handleSearch" size="mini" class="searchButton">查询</el-button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            autofocus: true,
            searchParams: {
                title: ''
            }
        };
    },
    methods: {
        // 回车或点击搜索图标
        handleSearch () {
            console.log('111');
            this.sendInfomation();
        },
        // 点击清除搜索图标
        clearIconSearch () {
            this.searchParams.title = '';
            this.sendInfomation();
        },
        // 执行搜索
        sendInfomation () {
            if (this.searchParams.title) {
                this.autofocus = false;
            } else {
                this.autofocus = true;
            }
            // this.handleSearchBlog()
        }
    }
};
</script>
<style lang='scss'>
    .searchWrap {
        margin-bottom: 10px;
        overflow: hidden;
        .titleSearch {
            position: relative;
            width: 160px;
            display: inline-block;
            .el-input__inner {height: 30px;}
            i {
                position: absolute;
                top: 50%;
                right: 5px;
                transform: translateY(-50%);
                z-index: 10;
            }
        }
        .searchButton {
            display: inline-block;
            margin-left: 8px;
        }
    }
</style>
