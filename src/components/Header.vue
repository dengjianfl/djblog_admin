<template>
    <div class="header">
        <div>个人博客管理平台</div>
        <div class="loginout">退出</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    };
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
    background-color: #80B4EA;
    color: #fff;
    font-size: 16px;
    height: 40px;
    padding: 0 20px;
    .loginout{
        font-size: 14px;
        cursor: pointer;
    }

}
</style>
