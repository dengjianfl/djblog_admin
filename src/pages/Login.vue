<template>
    <div class="login-page">
        <el-form :rules="rules" ref="formName" :model="ruleForm">
            <h3 class="title">管理员登录</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model.trim="ruleForm.username" prefix-icon="el-icon-mobile-phone"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model.trim="ruleForm.password" prefix-icon="el-icon-date"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm" class="btn-login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: {
                    trigger: 'blur, change',
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('请输入用户名'));
                        } else {
                            callback();
                        }
                    }
                },
                password: {
                    trigger: 'blur, change',
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('请输入密码'));
                        } else {
                            callback();
                        }
                    }
                }
            }
        };
    },
    mounted () {

    },
    methods: {
        // 注册提交
        submitForm () {
            this.$refs.formName.validate((valid) => {
                if (valid) {
                    this.$ajax({
                        url: `${process.env.API_MYBLOG_PATH}/login`,
                        data: {
                            username: this.ruleForm.username,
                            password: this.ruleForm.password
                        }
                    }).then(res => {
                        if (!res.isSuccess) {
                            return this.$message({
                                message: res.message,
                                center: true,
                                type: 'error'
                            });
                        };
                    }).catch(err => {
                        console.log(err);
                    });
                }
            });
        }
    }
};
</script>
<style lang='scss'>
html,
body {
  background-color: #dfe9fb;
}
.login-page {
  padding: 0 500px;
  padding-top: 160px;
  .el-form {
    background-color: #fff;
    padding: 20px 36px;
    padding-bottom: 15px;
    border-radius: 6px;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title {
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 22px;
    margin-bottom: 18px;
  }
  .btn-login {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
