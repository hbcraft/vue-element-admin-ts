<template>
  <div id="login" class="fill-height d-flex jc-center ai-center">
    <el-card
      body-class="d-flex jc-center ai-center"
      :bodyStyle="{ backgroundColor: '#fff' }"
      :style="{
        borderRadius: '10px',
      }"
    >
      <div class="login-img">
        <img
          src="@/assets/images/login-img.png"
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div class="login-form ml-20 w-300">
        <h2 class="text-center mb-20">系统登录</h2>
        <el-form
          label-width="60px"
          ref="LoginForm"
          :rules="loginFormRule"
          :model="loginForm"
          v-loading="loginFormLoading"
          hide-required-asterisk
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" type="password"></el-input>
          </el-form-item>
          <el-button
            type="primary"
            class="fill-width"
            @click.native="login"
            native-type="submit"
          >
            登录
          </el-button>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script lang='ts'>
import { Component, Ref, Vue } from 'vue-property-decorator'
import { Form } from 'element-ui'
@Component({
  name: 'Login'
})
export default class Login extends Vue {
  @Ref() readonly LoginForm!: Form

  loginFormLoading = false

  loginForm = {
    username: '',
    password: ''
  }

  loginFormRule = {
    username: [
      { required: true, trigger: 'blur', message: '请输入用户名' }
    ],
    password: [
      { required: true, trigger: 'blur', message: '请输入密码' }
    ]
  }

  redirect = this.$route.query.redirect as string

  async login () {
    try {
      await this.LoginForm.validate()
      this.loginFormLoading = true
      try {
        await this.$store.dispatch('user/login', this.loginForm)
        this.$router.push({ name: this.redirect || 'Dashboard' })
      } catch (err) {
        console.log(err)
      }
      this.loginFormLoading = false
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  background-color: #77ccee;
}
</style>
