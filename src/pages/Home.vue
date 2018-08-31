<template>
    <div class="home-page">
        <top-head></top-head>
        <base-side></base-side>
        <div class="table-wrap">
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column align="center"
                    type="index"
                    width="50">
                </el-table-column>
                <el-table-column align="center"
                    prop="createTime"
                    label="发布日期"
                    width="180">
                </el-table-column>
                <el-table-column align="center"
                    prop="author"
                    label="作者"
                    width="180">
                </el-table-column>
                <el-table-column align="center"
                    prop="title"
                    label="标题">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import Header from '../components/Header';
import BaseSide from '../components/BaseSide';
import {timeFormat} from '../utils/tools';
export default {
    data () {
        return {
            tableData: []
        };
    },
    components: {
        'top-head': Header,
        'base-side': BaseSide
    },
    mounted () {
        this.$ajax({
            url: `${process.env.API_MYBLOG_PATH}/getAllBlogByAdmin`
        }).then(res => {
            if (!res.isSuccess) {
                return this.$message({
                    message: res.message,
                    type: 'error'
                });
            }
            res.data.forEach((item) => {
                item.createTime = timeFormat(item.createTime);
            })
            this.tableData = res.data;
        });
    },
    methods: {
        add () {
            this.$router.push('/add');
        }
    }
};
</script>
<style lang="scss">
.home-page{

    .table-wrap{
        padding-top: 50px;
        padding-left: 240px;
        padding-right: 200px;
    }
}
</style>
