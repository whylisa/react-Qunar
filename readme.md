## 初始化
  - npx create-react-app 项目名字
  - react-devTools 谷歌扩展程序 
## 基础概念
  - context(上下文)
    - 提供了一种方式，能够让数据在组件树种传递，而不必一级一级手动传递
    - createContext(args) 默认值的使用场景就是Consumer找不到Provider的时候(可以注释掉Provider,Consumer的值就是参数值，些业务一般不会写这样的场景)
    - 新版写法直接用useContext
  - ContextType: （老版写法，详情见官网）
  - lazy 延迟加载
    - webpack codeSplitting,代码拆分
    - import 动态导入模块，返回一个promise
  - Suspense 和lazy配合 同时要使用，error Boundary 捕获错误
    ```js
       <Suspense fallback={<div>loding</div>}>
       <About></About>
     </Suspense>
    ```
  - memo
    