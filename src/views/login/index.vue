<i18n src="@/lang/login/zh-cn.json" locale="zh-cn"></i18n>
<i18n src="@/lang/login/en-us.json" locale="en-us"></i18n>

<template>
  <div id="login" class="fill-height d-flex jc-center ai-center">
    <el-card
      body-class="d-flex jc-center ai-center posi-rel"
      :bodyStyle="{ backgroundColor: '#fff' }"
      :style="{
        borderRadius: '10px',
      }"
    >
      <lang-select class="posi-abs" style="right: 20px; top: 20px" />
      <div class="login-img">
        <el-image :src="loginImg" style="width: 500px; height: 440px" />
      </div>
      <div class="login-form ml-20 w-300">
        <h2 class="text-center mb-20">{{ $t("systemLogin") }}</h2>
        <el-form
          :label-width="isZhCnLang ? '60px' : ''"
          ref="LoginFormEl"
          :rules="loginFormRule"
          :model="loginForm"
          :validate-on-rule-change="false"
          v-loading="loginFormLoading"
          hide-required-asterisk
          @submit.native.prevent
        >
          <el-form-item :label="$t('username')" prop="username">
            <el-input
              v-model="loginForm.username"
              name="username"
              :placeholder="$t('usernamePlaceholder')"
            />
          </el-form-item>
          <el-form-item :label="$t('password')" prop="password">
            <el-input
              v-model="loginForm.password"
              name="password"
              type="password"
              :placeholder="$t('passwordPlaceholder')"
            />
          </el-form-item>
          <el-button
            type="primary"
            class="fill-width"
            @click.native="login"
            native-type="submit"
          >
            {{ $t("login") }}
          </el-button>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script lang='ts'>
import { Component, Ref, Vue, Watch } from 'vue-property-decorator'
import { Form } from 'element-ui'
@Component({
  name: 'Login'
})
export default class Login extends Vue {
  /* $refs */
  // 登录表单元素
  @Ref() readonly LoginFormEl!: Form
  /* data */
  // 登录框左侧图片
  loginImg = require('@/assets/images/login-img.png')
  // 登录表单加载状态
  loginFormLoading = false
  // 登录表单
  loginForm = {
    // 用户名
    username: '',
    // 密码
    password: ''
  }

  // 登录前页面
  redirect = this.$route.query.redirect as string

  /* computed */
  // 是否中文语言，用于设置登录表单label位置
  get isZhCnLang (): boolean {
    return this.$i18n.locale === 'zh-cn'
  }

  // 登录表单验证规则，使用计算属性确保更改语言后依然能正常显示错误提示
  get loginFormRule () {
    return {
      username: [
        { required: true, trigger: 'blur', message: this.$t('error-tip.username.required') }
      ],
      password: [
        { required: true, trigger: 'blur', message: this.$t('error-tip.password.required') }
      ]
    }
  }

  // 监听登录表单验证规则，在修改语言后重置表单验证状态
  @Watch('loginFormRule')
  loginFormRuleChange () {
    this.LoginFormEl.resetFields()
  }

  // 登录方法
  async login () {
    try {
      // 验证表单
      await this.LoginFormEl.validate()
      // 验证通过，表单进入加载状态
      this.loginFormLoading = true
      try {
        // 登录，使用vuex中的登录action处理登录后的一系列事件
        await this.$store.dispatch('user/login', this.loginForm)
        // 登录成功，跳转至登录前页面
        this.$router.push({ name: this.redirect || 'Dashboard' })
      } catch (err) {
        // 登录失败处理方法
        console.log(err)
      }
      // 无论登录成功与否，结束加载状态
      this.loginFormLoading = false
    } catch (err) {
      // 表单验证不通过处理方法
      console.log(err)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/variables.scss";
#login {
  background-color: $loginPageBackgroundColor;
}
</style>
