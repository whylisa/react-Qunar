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
  - memo 优化，例如，渲染子组件改变，不需要父组件重新渲染
  ```js
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.name === this.props.name) {
            return false
        }
        return true
    }
    或者使用PureComponent 有局限性：只有传入的props第一级发生变化，才会去触发重新渲染，很容易触发视图不更新的bug

    //无状态组件
    const About = memo(function About({age}) {
    console.log('foee')
     return (
     <div>{age}</div>
      )
     })
  ```
## react Hooks
  - 类组件的不足
    - 缺少复用机制
    - 渲染属性和高阶组件导致层级冗余
    - 生命周期混杂不相干逻辑
    - 相干逻辑分散在不同声明周期
    - this指向困扰
  - hooks优势
    - 函数组件无this问题
    - 自定义Hooks方便复用逻辑
    - 副作用的关注点分离
  - useState
    - 
    