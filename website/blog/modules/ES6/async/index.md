# 内部执行过程

-   `async`方法的`promise`只要出现不是`resolved`的状态，`async`方法将直接返回，不再继续往下执行
    
    ```javascript
    async function getTopNavList () {
        const promise = new Promise((resolve, reject) => {
            reject('停止执行')
        })
        const result = await promise
        // 后面的代码逻辑将不再执行
        console.log(result)
    }
    
    getTopNavList()
    ```
    
-   `async`方法返回的永远是个`promise`对象，如果方法内部出现错误，或者不是`resolve`状态,返回的就是个`reject`，如果没有发生错误，方法最终返回的是，`await`等待的`promise`以及后续所有的代码执行完毕的返回值，如果没有明确指定返回值，将返回一个`resolve`状态包含`undefined`的`promise`
    
    ```javascript
    // 情景1
    async function getTopNavList () {
     const promise = new Promise((resolve, reject) => {
         reject('停止执行')
     })
     const result = await promise
    }
    
    getTopNavList()
        .catch(msg => {
            console.log(msg) // 将执行到这里，打印“停止执行”
        })
    
    // 情景2
    async function getTopNavList () {
     const promise = new Promise((resolve, reject) => {
         resolve('继续执行')
     })
     const result = await promise
    }
    getTopNavList()
     .then(res => {
         consoleg.log(res) //将执行到这里，打印“undefined”
     }) 
     
    // 情景3
    async function getTopNavList () {
     const promise = new Promise((resolve, reject) => {
         resolve('继续执行')
     })
     const result = await promise
     return result
    }
    getTopNavList()
     .then(res => {
         consoleg.log(res) //将执行到这里，打印“继续执行”
     })
    ```