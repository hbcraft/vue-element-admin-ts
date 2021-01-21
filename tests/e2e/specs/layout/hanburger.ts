describe('Layout', () => {
  beforeEach(() => {
    // 登录
    cy.getCookie('token').then((token) => {
      if (token) {
        console.log(token)
      } else {
        cy.login('lyy', '123456')
      }
    })
  })
  it('测试Hanburger', () => {
    cy.visit('/#/dashboard')
    cy.url().should('include', '/#/dashboard')
    cy.get('.sidebar').then((el) => {
      const isOpened = el.hasClass('sidebar-opened')
      cy.get('.hanburger').click()
      cy.getCookie('sidebarStatus').should('exist')
      if (isOpened) {
        cy.get('.sidebar').should('not.have.class', 'sidebar-opened')
      } else {
        cy.get('.sidebar').should('have.class', 'sidebar-opened')
      }
    })
  })
})
