### 拓展申明文件

虽然JavaScript不支持合并，但你可以为导入的对象打补丁以更新它们。


#### 全局拓展

全局拓展通过`global`来申明

```typescript
// 任意一个.d.ts文件
declare global {
    const maxNum: 100
}
```

:::success
最新的`typescript`(3.6+)好像不再支持`global`
:::

直接申明全局拓展

```typescript
declare const maxNum: 100
```

![tsd](https://raw.githubusercontent.com/13916253446/assets/master/public/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-09-24%20%E4%B8%8B%E5%8D%888.oqgud17low8.25.57%20(1).png)


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
