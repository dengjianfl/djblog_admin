<template>
    <div class="add-page">
        <top-head></top-head>
        <base-side></base-side>
        <el-form :model="blogContent" :rules="rules" ref="blogForm" class="form-add" label-position="left">
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
            <el-form-item label="" label-width="400px">
                <el-button type="primary" @click="pulish">保存并发布</el-button>
                <el-button>保存</el-button>
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
        this.getOneBlog();
    },
    methods: {
        pulish () {
            this.$refs.blogForm.validate((valid) => {
                if (valid) {
                    this.$ajax({
                        url: `${process.env.API_MYBLOG_PATH}/updateOneBlog`,
                        data: Object.assign({}, {
                            id: this.$route.query.id
                        }, this.blogContent)
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
                                _this.$router.back();
                            }
                        });
                    });
                } else {
                    return false;
                }
            });
        },
        // 获取一篇博客
        getOneBlog () {
            this.$ajax({
                url: `${process.env.API_MYBLOG_PATH}/getOneBlog`,
                data: {
                    id: this.$route.query.id
                }
            }).then(res => {
                if (!res.isSuccess) {
                    return this.$message({
                        message: res.message,
                        type: 'error'
                    });
                }
                this.blogContent = res.data;
            });
        }
    }
};
</script>
<style lang='scss'>
.add-page{
    .form-add{
        padding-top: 50px;
        padding-left: 180px;
        padding-right: 300px;
    }
    .quill-editor{
        background-color: #fff;
    }
    .ql-container{
        min-height: 250px;
    }
}
</style>
