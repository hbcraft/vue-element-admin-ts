const Random = require('mockjs').Random

module.exports = [
  {
    url: '/login',
    type: 'post',
    response: (req) => {
      const { username, password } = req.body
      if (username === 'lyy' && password === '123456') {
        return {
          code: 200,
          success: true,
          message: '操作成功',
          data: {
            token: Random.string(255),
            userInfo: {
              userId: 167,
              username: 'lyy',
              name: 'lyy',
              deptId: 6,
              deptName: null,
              email: '35352513@qq.com',
              mobile: null,
              status: 1,
              userIdCreate: 0,
              gmtCreate: '1900-01-02',
              gmtModified: null,
              sex: '0',
              birth: null,
              picId: 0,
              liveAddress: null,
              hobby: null,
              province: null,
              city: null,
              district: null,
              asAdmin: null,
              saltValue: '123456',
              roleId: null,
              roleName: null,
              roleIds: [],
              permissionCodes: []
            }
          },
          time: Random.datetime('yyyy-MM-dd HH:mm:ss')
        }
      } else {
        return {
          code: 5101,
          success: false,
          message: '用户名密码错误',
          data: null,
          time: Random.datetime('yyyy-MM-dd HH:mm:ss')
        }
      }
    }
  },
  {
    url: '/logout',
    type: 'post',
    response: (req, res) => {
      return {
        code: 20000,
        message: 'success'
      }
    }
  }
]
