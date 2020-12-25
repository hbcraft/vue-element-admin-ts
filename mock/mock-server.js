const bodyParser = require('body-parser')
const Path = require('path')
const Mock = require('mockjs')
const Chokidar = require('chokidar')
const Chalk = require('chalk')

const mockDir = Path.resolve(process.cwd(), 'mock')

function responseFake (url, type, respond) {
  return {
    url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    type: type || 'get',
    response (req, res) {
      console.log(`访问接口:${req.path}`)
      res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}

function registerRoutes (app) {
  let mockLastIndex
  const { mocks } = require('./index')
  const mocksForServer = mocks.map((route) => {
    return responseFake(route.url, route.type, route.response)
  })
  for (const mock of mocksForServer) {
    app[mock.type](mock.url, mock.response)
    mockLastIndex = app._router.stack.length
  }
  const mockRoutesLength = Object.keys(mocksForServer).length
  return {
    mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength
  }
}

function unRegisterRoutes () {
  Object.keys(require.cache).forEach((i) => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)]
    }
  })
}

module.exports = (app) => {
  // 参数解析
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  // 注册路由
  const mockRoutes = registerRoutes(app)
  let { mockStartIndex, mockRoutesLength } = mockRoutes

  Chokidar.watch(mockDir, {
    ignored: /mock-server/,
    ignoreInitial: true
  }).on('all', (event, path) => {
    if (event === 'add' || event === 'change') {
      try {
        app._router.stack.splice(mockStartIndex, mockRoutesLength)

        unRegisterRoutes()
        const mockRoutes = registerRoutes(app)
        mockStartIndex = mockRoutes.mockStartIndex
        mockRoutesLength = mockRoutes.mockRoutesLength

        console.log(Chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
      } catch (err) {
        console.log(Chalk.redBright(err))
      }
    }
  })
}
