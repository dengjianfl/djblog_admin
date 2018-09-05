<template>
    <div class="home-page">
        <top-head></top-head>
        <base-side></base-side>
        <div class="table-wrap">
            <search-area></search-area>
            <el-table
                :data="tableData"
                border>
                <el-table-column
                    align="center"
                    type="index"
                    width="50">
                </el-table-column>
                <el-table-column
                    v-for="(col, idx) in columns"
                    :key="idx"
                    :prop="col.prop"
                    :label="col.label"
                    :min-width="col.width"
                    :fixed="col.fixed"
                    align="center">
                    <template slot-scope="scope">
                        <div v-if="col.prop === 'handle'">
                            <el-button @click="edit(scope.row.id)" type="text" size="small">编辑</el-button>
                            <el-button @click="remove(scope.row.id)" type="text" size="small">删除</el-button>
                        </div>
                        <div v-else>{{scope.row[col.prop]}}</div>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                class="blog-pagination"
                background
                @size-change="handleSizeChange"
                @current-change="currentChange"
                @prev-click="prevPage"
                @next-click="nextPage"
                :page-sizes="pageSizes"
                :page-size="pageSize"
                layout="sizes, prev, pager, next"
                :total="total">
            </el-pagination>
        </div>

    </div>
</template>
<script>
import Header from '../components/Header';
import BaseSide from '../components/BaseSide';
import SearchArea from '../components/SearchArea';
import {timeFormat} from '../utils/tools';
export default {
    data () {
        return {
            tableData: [],
            pageNo: 1,
            total: 0,
            pageSize: 5, // 默认为5
            pageSizes: [5, 10, 15, 20],
            columns: [
                { prop: 'title', label: '标题', width: '180' },
                { prop: 'author', label: '作者', width: '100' },
                { prop: 'tag', label: '分类', width: '100' },
                { prop: 'createTime', label: '发布日期', width: '180' },
                { prop: 'handle', label: '操作', width: '100', fixed: 'right' }
            ]
        };
    },
    components: {
        'top-head': Header,
        'base-side': BaseSide,
        'search-area': SearchArea
    },
    mounted () {
        this.getBlogs(this.pageNo, this.pageSize);
    },
    methods: {
        // 获取博客内容
        getBlogs (pageNo, pageSize) {
            this.$ajax({
                url: `${process.env.API_MYBLOG_PATH}/getAllBlogByAdmin`,
                data: {
                    pageNo,
                    pageSize
                }
            }).then(res => {
                if (!res.isSuccess) {
                    return this.$message({
                        message: res.message,
                        type: 'error'
                    });
                }
                res.data.blogList.forEach((item) => {
                    item.createTime = timeFormat(item.createTime);
                    item.tag = item.tag.join(',');
                });
                this.tableData = res.data.blogList;
                this.total = res.data.total;
            });
        },
        add () {
            this.$router.push('/add');
        },
        // 前一页
        prevPage (val) {
            this.pageNo = val;
            this.getBlogs(this.pageNo, this.pageSize);
        },
        // 后一页
        nextPage (val) {
            this.pageNo = val;
            this.getBlogs(this.pageNo, this.pageSize);
        },
        // 当前页改变
        currentChange (val) {
            this.pageNo = val;
            this.getBlogs(this.pageNo, this.pageSize);
        },
        // 改变页数
        handleSizeChange (val) {
            this.pageSize = val;
            this.getBlogs(this.pageNo, this.pageSize);
        },
        // 删除
        remove (id) {
            this.$confirm('请确定是否删除这条信息', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$ajax({
                    url: `${process.env.API_MYBLOG_PATH}/delete`,
                    data: {
                        id
                    }
                }).then(res => {
                    if (!res.isSuccess) {
                        return this.$message({
                            message: res.message,
                            type: 'error'
                        });
                    }
                    this.getBlogs(this.pageNo, this.pageSize);
                });
            }).catch();
        },
        // 编辑
        edit (id) {
            this.$router.push('/blogDetails?id=' + id);
        }
    }
};
</script>
<style lang="scss">
    .home-page{
        width: 100%;
        height: 100%;
        .table-wrap{
            height: 80%;
            padding: 20px;
            float: left;
        }
        .blog-pagination{
            text-align: right;
            margin-top: 16px;
        }
    }
</style>
