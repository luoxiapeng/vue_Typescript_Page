# vue3.0_project3_module





## Project setup
```
npm install

yarn install（推荐）

cnpm install
```

### Compiles and hot-reloads for development
```
npm run serve
npm run serve --dev 切换开发
npm run serve --test 切换测试
npm run serve --pred 切换预发布
npm run serve --prod 切换生产
```

### Compiles and minifies for production
```
npm run build 打包生产
npm run build:dev 开发环境d
npm run build:test 测试环境
npm run build:pred 预发布环境
npm run build:prod 生产环境
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

## Project directory
项目目录说明：
```
  -- public
     |--favicon.icon               系统图标
     |--index.html                 系统打包静态文件
  -- src 
     |--api                        api存放目录
         |--modules                api模块化
              |--sytem.ts          系统模块api
         |--index.ts               公共模块
     |--assets                     静态资源
         |--scss                   样式目录
              |--common.scss       公共样式      
              |--mixin.scss        scss函数    
         |--logo.png
     |--components                 公共组件
     |--config                     配置文件
         |--enbUrl.ts              配置开发环境多环境
         |--index.ts               axios拦截器           
         |--Require.ts             get和post请求封装
     |--store                      状态库目录
         |--modules                分模块状态库
             |--system.ts          系统模块
             |--user.ts            用户模块
         |--mutationsType.ts       公共mutationsType定义
         |--getters.ts             全局getters
         |--index.ts               store最主要的目录
         |--type.ts                定义store所有的接口
     |--types                      定义系统函数的接口
         |--index.ts
     |--utils                      公共函数
         |--common.ts              公共函数库
         |--storage.ts             缓存封装
         |--type.ts                公共函数接口
     |--views                      页面文件
     |--App.vue                    vue挂载文件
     |--main.ts                    vue入口文件
     |--router.ts                  路由文件
     |--shims-tsx.d.ts
     |--shims-vue.d.ts
  -- tests                         单元测试模块
     |--unit
         |--example.spec.ts
  --.browserslistrc
  --.env.dev                       配置开发环境
  --.env.pred                      配置预发布环境
  --.env.prod                      配置生产环境
  --.env.test                      配置测试环境
  --.gitignore                     忽略文件
  --bable.config.js                bable相关文件
  --environment.js                 多环境后缀切换
  --jest.config.js                 jest测试框架配置文件
  --package-lock.json
  --package.json                   包管理
  --README.md
  --tsconfig.json                  ts相关配置
  --tslint.json
  --vue.config.js                  vue打包配置等主要文件
  --yarn.lock
  
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
