<template>
    <div class="header">
        <div>个人博客管理平台</div>
        <div class="loginout">
            <span class="user">{{username}}</span>
            <span @click="loginOut">退出</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username: ''
        };
    },
    mounted () {
        this.$ajax({
            url: `${process.env.API_MYBLOG_PATH}/getUserInfo`
        }).then(res => {
            if (!res.isSuccess) {
                return this.$message({
                    message: res.message,
                    type: 'error'
                });
            }
            this.username = res.data.username;
        });
    },
    methods: {
        loginOut () {
            this.$confirm('请确定是否退出登录', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$ajax({
                    url: `${process.env.API_MYBLOG_PATH}/loginOut`
                }).then(res => {
                    if (!res.isSuccess) {
                        return this.$message({
                            message: res.message,
                            type: 'error'
                        });
                    }
                    this.$router.push('/');
                });
            }).catch();
        }
    }
};

</script>
<style lang='scss'>
.header{
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    opacity: 0.8;
    color: #fff;
    font-size: 16px;
    height: 40px;
    padding: 0 20px;
    .loginout{
        font-size: 14px;
        cursor: pointer;
    }
    .user{
        margin-right: 8px;
    }

}
</style>
