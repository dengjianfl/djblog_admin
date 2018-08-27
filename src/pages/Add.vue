<template>
    <div class="add-page">
        <el-form :model="blogContent" class="form-add" label-position="left">
            <el-form-item label="标题" label-width="60px">
                <el-input v-model="blogContent.title" prefix-icon="el-icon-edit" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="分类" label-width="60px">
                <el-select v-model="blogContent.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
        blogContent: {
            title: '',
            region: ''
        }
    };
  }
}

</script>
<style lang='scss'>
.add-page{
    padding-top: 50px;
    padding-left: 180px;
    .form-add{
        padding-right: 300px;
    }
    .title{
        padding-right: 300px;
    }
    .tag{
        margin-top: 10px;
    }
}
</style>
