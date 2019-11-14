### 拓展申明文件

虽然JavaScript不支持合并，但你可以为导入的对象打补丁以更新它们。


#### 全局拓展

直接申明全局拓展

```typescript
declare const maxNum: 100
```

![tsd](https://raw.githubusercontent.com/13916253446/assets/master/public/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-09-24%20%E4%B8%8B%E5%8D%888.oqgud17low8.25.57%20(1).png)

:::warning
这里要注意当使用`const`或者`let`的话,只能通过直接使用变量名的方式来访问,不能通过`window`来访问。比如上面的例子不能通过`window.maxNum`来访问。当我们把代码改成`var`<br>
```typescript
declare var maxNum: 100
```
能直接通过变量名访问，也可以通过`window`来访问这个变量
:::

在模块内部申明全局变量

在模块申明文件里面,可以通过`global`来申明全局变量
```typescript
// module.d.ts
import Vue from 'vue'

declare global {
    var $vue: Vue
}
```

:::warning
只要文件内部使用`import`或者`export`关键字,那么这个文件就是一个模块申明文件了,也就是不能直接通过`declare const maxs: 200`来申明全局变量了。
:::


#### 模块拓展

可以拓展内部自定义模块以及外部模块比如`Vue`

- 拓展外部模块

比如增加`Vue`的根实例上面增加一个`$get`的请求方法

```typescript
// 1. 确保在声明补充的类型之前导入 'vue'
import Vue from 'vue'

// 2. 找到要拓展的模块的路径(Vue构造函数类型在types/vue.d.ts里)
declare module 'vue/types/vue' {
// 3. 声明为 Vue 补充的东西
  interface Vue {
    /**
     * get请求
     * @param  {string} _mt 请求标识符
     * @returns Promise 异步函数
     */
    $get(_mt: string): Promise<object>
  }
}
```

![tsd](https://raw.githubusercontent.com/13916253446/assets/master/public/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-09-24%20%E4%B8%8B%E5%8D%888.jkiunartchq.51.57%20(1).png)

- 拓展内部自定义模块

通过模块导入`import`或者`require`的方式使用的模块,可以有两种方式来申明文件。

1、在相应的模块文件夹下建立同名的`.d.ts`文件来申明

```typescript
import { NativeGoBack } from '@/libs/util.native.js'

// @/libs目录下的util.native.d.ts文件
export declare function NativeGoBack () => void
```

:::warning
无论在任何位置的`.ts`以及`.d.ts`文件内没有使用`export`申明`declare`的类型都将是**全局的**
:::

2、通过`module`来申明

```typescript
declare module '@/libs/util.native' {
    function NativeGoBack () => void
}
```

## 参考

- [申明合并](https://www.tslang.cn/docs/handbook/declaration-merging.html)
