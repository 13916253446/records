抽象语法树是js代码另一种结构映射，可以将`js`拆解成`AST`，也可以把`AST`转成源代码。这中间的过程就是我们的用武之地。 利用 抽象语法属(AST) 可以对你的源代码进行修改、优化，甚至可以打造自己的编译工具。比如你看到这里用了`var`不顺眼，你可以分分钟改成`let`。 有点类似`babel`的功能。

### 如何生成AST

我们可以大致的想一下如果亲自实现把`js`代码转换成结构化的数据我们应该怎么做？
就像是小时候拆解自己的玩具，在进行组合，或者像老妈给我们做的可口的饭菜，把原材料进行加工处理。
对于`ast`，可能我们会想到使用字符串处理、正则匹配等方法，如果对简单的代码处理我们是可以实现的。
但是如果能够对随意的一段代码进行处理那就需要考虑非常多的情况。具体如何实现咱们不必过于纠结，这也不是重点。
但最终的实现里我们能想到方法基本都会被用到。我们可以简化理解，也就是对js代码经过了一系列的加工处理，变成了一盘好吃的饭菜。
这个做菜过程可能较为复杂，所以我们需要用现成的做菜方法，直接拿过来用就可以了。比如某某浓汤宝，好喝的可以评论下，我打算试试。
所以我们需要用到`esprima`、`UglifyJS`等库，做菜的方法不止一种，所以会存在很多这样的三方库，而我们会使用其中一种就可以了

#### 源代码

```javascript
function fun(a,b){
}
```

#### 转换过后

```json
{
    "type": "FunctionDeclaration",//函数声明
    "id": {
        "type": "Identifier",//标识符
        "name": "fun" //函数名称
    },
    "params": [//函数参数
        {
            "type": "Identifier",//参数标识符
            "name": "a"//参数名称
        },
        {
            "type": "Identifier",
            "name": "b"
        }
    ],
    "body": {//函数体
        "type": "BlockStatement",//语句块儿
        "body": []//具体内容为空，因为是空方法
    },
}
```

#### [官方在线语法树解析](http://esprima.org/demo/parse.html)

### 实例应用

-   把 == 改成全等 ===
    
    1.  基础方法
        
        ```javascript
        /引入工具包
        const esprima = require('esprima');//JS语法树模块
        const estraverse = require('estraverse');//JS语法树遍历各节点
        const escodegen = require('escodegen');//JS语法树反编译模块
        //获取代码ast
        const AST = esprima.parseScript(jsCode);
        
        /**
         * 
         * @param {遍历语法树} ast 
         */
        function walkIn(ast){
            estraverse.traverse(ast, {
                enter: (node) => {
                    toEqual(node);//把 == 改为全等 ===
                    setParseint(node); //parseInt(a)-> parseInt(a,10)
                }
            });
        }
        ```
        
    
    2.  修改代码
        
        ```javascript
        /**
         * 设置全等
         */
        function toEqual(node) {
            if (node.operator === '==') {
                node.operator = '===';
            }
        }
        ```

# 参考

-   [recast解析AST](https://mp.weixin.qq.com/s?__biz=MzA5MjQ0Mjk2NA==&mid=2247484129&idx=1&sn=37500d8ebfc9cda87d3c97142d150139&chksm=906c5adaa71bd3cc52a09627cc83aa5739f29a359bab9d2bc21af9c66e22f1ef25349983c4a7&scene=21#wechat_redirect)