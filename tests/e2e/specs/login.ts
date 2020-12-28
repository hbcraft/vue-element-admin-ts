describe('登录功能测试', () => {
  it('访问应用主页', () => {
    cy.visit('/')
  })
  it('用户名密码错误测试', () => {
    // 输入错误的用户名密码
    cy.get('input[name=username]')
      .type('123')
    cy.get('input[name=password]')
      .type('456')
    // 点击登录按钮
    cy.get('button[type=submit]')
      .click()

    // 验证是否有包含‘用户名密码错误’的el-message弹框
    cy.get('.el-message')
      .contains('用户名密码错误')
  })

  it('登录成功测试', () => {
    // 输入正确的用户名密码
    cy.get('input[name=username]')
      .clear() // 清空输入框内容
      .type('lyy')
    cy.get('input[name=password]')
      .clear()
      .type('123456')
    // 点击登录按钮
    cy.get('button[type=submit]')
      .click()

    // 验证页面是否跳转到了/dashboard路径
    cy.url().should('include', '/dashboard')
  })
})
