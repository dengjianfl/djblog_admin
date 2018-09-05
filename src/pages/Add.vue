<template>
    <div class="add-page">
        <top-head></top-head>
        <base-side></base-side>
        <el-form :model="blogContent" :rules="rules" ref="blogForm" class="form-add">
            <div style="margin-bottom:10px;">
                <el-button type="primary" @click="pulish" size="mini">保存并发布</el-button>
                <el-button @click="cancel" size="mini">取消</el-button>
            </div>
            <el-form-item label="标题" label-width="60px" prop="title">
                <el-input v-model="blogContent.title" prefix-icon="el-icon-edit" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="标签" label-width="60px" prop="tag">
                <el-checkbox-group v-model="blogContent.tag">
                    <el-checkbox label="javascript" name="type"></el-checkbox>
                    <el-checkbox label="node.js" name="type"></el-checkbox>
                    <el-checkbox label="vue" name="type"></el-checkbox>
                    <el-checkbox label="mongodb" name="type"></el-checkbox>
                    <el-checkbox label="css3" name="type"></el-checkbox>
                    <el-checkbox label="nginx" name="type"></el-checkbox>
                    <el-checkbox label="linxu" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="简要" label-width="60px" prop="summary">
                <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="请输入简要"
                    v-model="blogContent.summary">
                </el-input>
            </el-form-item>
            <el-form-item label="内容" label-width="60px" prop="content">
                <quill-editor
                    v-model="blogContent.content"
                    ref="myQuillEditor"
                    :options="editorOption">
                </quill-editor>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import BaseSide from '../components/BaseSide.vue';
export default {
    data () {
        return {
            blogContent: {
                title: '',
                tag: [],
                summary: '',
                content: ''
            },
            editorOption: {
                theme: 'snow',
                boundary: document.body,
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        [{ 'direction': 'rtl' }],
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'font': [] }],
                        [{ 'align': [] }],
                        ['clean'],
                        ['link', 'image', 'video']
                    ]
                },
                placeholder: '请输入博客内容',
                readOnly: false
            },
            rules: {
                title: [
                    { required: true, message: '请输入标题', trigger: 'blur,change' }
                ],
                tag: [
                    { type: 'array', required: true, message: '请至少选择一个标签', trigger: 'change' }
                ],
                summary: [
                    { required: true, message: '请输入简要', trigger: 'blur,change' }
                ],
                content: [
                    { required: true, message: '请输入内容', trigger: 'blur,change' }
                ]
            }
        };
    },
    components: {
        'top-head': Header,
        'base-side': BaseSide
    },
    mounted () {

    },
    methods: {
        // 保存发布
        pulish () {
            this.$refs.blogForm.validate((valid) => {
                if (valid) {
                    this.$ajax({
                        url: `${process.env.API_MYBLOG_PATH}/addOneBlog`,
                        data: this.blogContent
                    }).then(res => {
                        if (!res.isSuccess) {
                            return this.$message({
                                message: res.message,
                                type: 'error'
                            });
                        }
                        var _this = this;
                        this.$message({
                            message: res.message,
                            type: 'success',
                            onClose: function () {
                                _this.$router.push('/home');
                            }
                        });
                    });
                } else {
                    return false;
                }
            });
        },
        // 取消
        cancel () {
            this.$router.push('/home');
        }
    }
};
</script>
<style lang='scss'>
.add-page{
    width: 100%;
    height: 100%;
    .form-add{
        height: 80%;
        padding: 20px;
        float: left;
        width: 77%;
    }
    .quill-editor{
        background-color: #fff;
        .ql-container{
            height: 180px;
        }
    }
}
</style>
