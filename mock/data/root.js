module.exports = [
  {
    url: '/mock/login',
    type: 'get',
    response: (req) => {
      return {
        code: 2000,
        message: 'success'
      }
    }
  },
  {
    url: '/mock/logout',
    type: 'post',
    response: (req, res) => {
      return {
        code: 2000,
        message: 'success'
      }
    }
  }
]
